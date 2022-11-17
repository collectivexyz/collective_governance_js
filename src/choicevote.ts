// SPDX-License-Identifier: BSD-3-Clause
/*
 * BSD 3-Clause License
 *
 * Copyright (c) 2022, collective
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
import { MetaStorage } from './metastorage';
import { blocktimeNow, timeNow, timeout } from './time';
import { EthWallet } from './wallet';
import { GovernanceBuilder } from './governancebuilder';

const logger = LoggerFactory.getLogger(module.filename);

async function run() {
  try {
    const config = new Config();
    const web3 = new Web3(config.rpcUrl);

    logger.info(`Governance Started`);

    const wallet = new EthWallet(config.privateKey, web3);
    wallet.connect();
    logger.info(`Wallet connected: ${wallet.getAddress()}`);

    const builder = new GovernanceBuilder(config.abiPath, config.builderAddress, web3, wallet, config.getGas());
    const contractAddress = await builder.discoverContractAddress(config.buildTxId);

    const governance = new CollectiveGovernance(config.abiPath, contractAddress.governanceAddress, web3, wallet, config.getGas());
    logger.info(`Connected to contract: ${contractAddress.governanceAddress}`);
    const name = await governance.name();
    const version = await governance.version();
    logger.info(`${name}: ${version}`);

    const metaAddress = contractAddress.metaAddress;
    const meta = new MetaStorage(config.abiPath, metaAddress, web3);
    const metaName = await meta.name();
    const metaVersion = await meta.version();

    if (version !== metaVersion) {
      logger.error(`Required meta version ${version}`);
      throw new Error('MetaStorage version mismatch');
    }

    logger.info(`${metaName}: ${metaVersion}`);
    const community = await meta.community();
    logger.info(`Community: ${community}`);
    const communityUrl = await meta.url();
    logger.info(`Community Url: ${communityUrl}`);
    const description = await meta.description();
    logger.info(`Description: ${description}`);

    const storageAddress = contractAddress.storageAddress;
    const storage = new Storage(config.abiPath, storageAddress, web3);
    const storageName = await storage.name();
    const storageVersion = await storage.version();

    if (version != storageVersion) {
      logger.error(`Required storage version ${version}`);
      throw new Error('Storage version mismatch');
    }

    logger.info(`${storageName}: ${storageVersion}`);

    const blockTime = await blocktimeNow(web3);
    const blockTimeDelta = Math.abs(blockTime - timeNow());
    // add 10 minutes to ensure eta is within allowable lock range
    const etaOfLock = timeNow() + config.getMinimumDuration() + blockTimeDelta + 10 * 60;
    const proposalId = await governance.choiceVote(5);

    let tId = await governance.attachTransaction(
      proposalId,
      '0x8CDad6BB54410ABA01033b9fBc0c5ECCB2a4137E',
      0,
      'set(address,uint256)',
      '0x0000000000000000000000000D837FF9Cc578508b8F80200e872Ee76F27057b70000000000000000000000000000000000000000000000000000000000000000',
      etaOfLock
    );
    await governance.setChoice(proposalId, 0, 'Erling Haaland', 'Norwegian striker', tId);

    tId = await governance.attachTransaction(
      proposalId,
      '0x8CDad6BB54410ABA01033b9fBc0c5ECCB2a4137E',
      0,
      'set(address,uint256)',
      '0x0000000000000000000000000D837FF9Cc578508b8F80200e872Ee76F27057b70000000000000000000000000000000000000000000000000000000000000001',
      etaOfLock
    );
    await governance.setChoice(proposalId, 1, 'Karim Benzema', 'French forward', tId);

    tId = await governance.attachTransaction(
      proposalId,
      '0x8CDad6BB54410ABA01033b9fBc0c5ECCB2a4137E',
      0,
      'set(address,uint256)',
      '0x0000000000000000000000000D837FF9Cc578508b8F80200e872Ee76F27057b70000000000000000000000000000000000000000000000000000000000000002',
      etaOfLock
    );
    await governance.setChoice(proposalId, 2, 'Sadio Mané', 'Senegal striker', tId);

    tId = await governance.attachTransaction(
      proposalId,
      '0x8CDad6BB54410ABA01033b9fBc0c5ECCB2a4137E',
      0,
      'set(address,uint256)',
      '0x0000000000000000000000000D837FF9Cc578508b8F80200e872Ee76F27057b70000000000000000000000000000000000000000000000000000000000000003',
      etaOfLock
    );
    await governance.setChoice(proposalId, 3, 'Robert Lewandowski', 'Polish striker', tId);

    tId = await governance.attachTransaction(
      proposalId,
      '0x8CDad6BB54410ABA01033b9fBc0c5ECCB2a4137E',
      0,
      'set(address,uint256)',
      '0x0000000000000000000000000D837FF9Cc578508b8F80200e872Ee76F27057b70000000000000000000000000000000000000000000000000000000000000004',
      etaOfLock
    );
    await governance.setChoice(proposalId, 4, 'Mohamed Salah', 'Egyptian forward', tId);

    await governance.configureDelay(proposalId, 3, 300, 3600);
    const quorum = await storage.quorumRequired(proposalId);
    const duration = await storage.voteDuration(proposalId);

    logger.info(`Choice Vote - ${proposalId}: quorum=${quorum}, duration=${duration}`);

    const startTime = await storage.startTime(proposalId);
    while (timeNow() < startTime + blockTimeDelta) {
      const deltaTime = Math.max((startTime - timeNow()) * 1000, 1000);
      logger.info(`Waiting for start ... ${deltaTime/1000} s`);
      logger.flush();
      await timeout(deltaTime);
    }

    await governance.startVote(proposalId);
    logger.info('Voting started...');

    // voting shares
    await governance.voteChoice(proposalId, 2);

    let voteStatus = await governance.isOpen(proposalId);
    const endTime = await storage.endTime(proposalId);
    while (voteStatus) {
      const sleepFor = Math.max(endTime - timeNow() + blockTimeDelta, 1000);
      logger.info(`Voting in progress...sleeping for ${sleepFor}`);
      logger.info(`endTime: ${new Date(endTime * 1000).toISOString()}`);
      logger.flush();
      await timeout(sleepFor * 1000);
      voteStatus = await governance.isOpen(proposalId);
    }

    while (timeNow() < etaOfLock) {
      const remainingTime = etaOfLock - timeNow();
      logger.info(`Awaiting timeLock... sleeping for ${remainingTime}`);
      logger.flush();
      await timeout(remainingTime * 1000);
    }

    await governance.endVote(proposalId);
    const cCount = await storage.choiceCount(proposalId);
    for (let id = 0; id < cCount; id++) {
      const choice = await storage.getChoice(proposalId, id);
      logger.info(`Choice ${id + 1}, ${choice.name}, ${choice.description}, ${choice.transactionId}, ${choice.voteCount}`);
    }

    const measurePassed = await governance.voteSucceeded(proposalId);
    if (measurePassed) {
      const choiceId = await storage.getWinningChoice(proposalId);
      const choice = await storage.getChoice(proposalId, choiceId);
      logger.info(
        `There is a winner: ${choiceId}, ${choice.name}, ${choice.description}, ${choice.transactionId}, ${choice.voteCount}`
      );
    } else {
      logger.info('The measure has failed');
    }
  } catch (error) {
    logger.error(error);
    throw new Error('Run failed');
  }
}

run()
  .then(() => process.exit(0))
  .catch((error) => logger.error(error));
