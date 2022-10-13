// SPDX-License-Identifier: BSD-3-Clause
/*
 * BSD 3-Clause License
 *
 * Copyright (c) 2022, Collective.XYZ
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

import Web3 from 'web3';
import { Config } from './config';
import { CollectiveGovernance } from './governance';
import { LoggerFactory } from './logging';
import { Storage } from './storage';
import { EthWallet } from './wallet';

const logger = LoggerFactory.getLogger(module.filename);

function timeNow(): number {
  return Math.floor(Date.now() / 1000);
}

async function timeout(duration: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, duration);
  });
}

// this shows an example of configuring a vault with
// an attached payment

// this example is using this example contract to management payments
// https://github.com/jac18281828/transfervault

const run = async () => {
  try {
    const config = new Config();
    const web3 = new Web3(config.rpcUrl);

    logger.info(`Governance Started`);

    const wallet = new EthWallet(config.privateKey, web3);
    wallet.connect();
    logger.info(`Wallet connected: ${wallet.getAddress()}`);
    const governance = new CollectiveGovernance(config.abiPath, config.contractAddress, web3, wallet, config.getGas());
    logger.info(`Connected to contract: ${config.contractAddress}`);
    const name = await governance.name();
    const version = await governance.version();
    logger.info(`${name}: ${version}`);

    const storageAddress = await governance.getStorageAddress();
    const storage = new Storage(config.abiPath, storageAddress, web3);
    const storageName = await storage.name();
    const storageVersion = await storage.version();
    logger.info(`${storageName}: ${storageVersion}`);

    const proposalId = await governance.propose();

    if (!config.vaultContract) {
      throw Error('Vault not configured');
    }

    // add 10 minutes to ensure eta is within allowable lock range
    const etaOfLock = timeNow() + config.getMinimumDuration() + 10 * 60;

    await governance.attachTransaction(
      proposalId,
      config.vaultContract,
      config.getVaultValue(),
      config.vaultSignature,
      config.vaultCalldata,
      etaOfLock
    );

    await governance.configure(proposalId, 1);

    const quorum = await storage.quorumRequired(proposalId);
    const duration = await storage.voteDuration(proposalId);

    logger.info(`New Vote - ${proposalId}: quorum=${quorum}, duration=${duration}`);

    const startTime = await storage.startTime(proposalId);
    while (timeNow() < startTime) {
      logger.info('Waiting for start ...');
      await timeout((startTime - timeNow()) * 1000);
    }

    await governance.startVote(proposalId);
    logger.info('Voting started...');

    // voting shares
    await governance.voteFor(proposalId);

    let voteStatus = await governance.isOpen(proposalId);
    while (voteStatus) {
      const endTime = await storage.endTime(proposalId);
      let sleepFor = endTime - timeNow();
      while (sleepFor > 0) {
        logger.info(`Voting in progress... sleeping for ${sleepFor}`);
        await timeout(sleepFor * 1000);
        sleepFor = endTime - timeNow();
      }
      voteStatus = await governance.isOpen(proposalId);
    }

    while (timeNow() < etaOfLock) {
      const remainingTime = etaOfLock - timeNow();
      logger.info(`Awaiting timeLock... sleeping for ${remainingTime}`);
      await timeout(remainingTime * 1000);
    }

    await governance.endVote(proposalId);
    const measurePassed = await governance.voteSucceeded(proposalId);
    if (measurePassed) {
      logger.info('The measure has passed');
    } else {
      logger.info('The measure has failed');
    }
  } catch (error) {
    logger.error(error);
    throw new Error('Run failed');
  }
};

run()
  .then(() => process.exit(0))
  .catch((error) => logger.error(error));
