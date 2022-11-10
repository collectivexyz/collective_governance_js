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
import { EthWallet } from './wallet';

const logger = LoggerFactory.getLogger(module.filename);

const run = async () => {
  try {
    const config = new Config();
    const web3 = new Web3(config.rpcUrl);

    if (!config.storageAddress) {
      throw new Error('Storage contract is required');
    }

    if (!config.metaStorage) {
      throw new Error('MetaStorage contract is required');
    }

    logger.info(`Cancel Existing Proposal`);

    const wallet = new EthWallet(config.privateKey, web3);
    wallet.connect();
    logger.info(`Wallet connected: ${wallet.getAddress()}`);
    const governance = new CollectiveGovernance(config.abiPath, config.contractAddress, web3, wallet, config.getGas());
    logger.info(`Connected to contract: ${config.contractAddress}`);
    const name = await governance.name();
    const version = await governance.version();
    logger.info(`${name}: ${version}`);

    const metaAddress = config.metaStorage;
    const meta = new MetaStorage(config.abiPath, metaAddress, web3);

    const community = await meta.community();
    logger.info(`Community: ${community}`);
    const communityUrl = await meta.url();
    logger.info(`Community Url: ${communityUrl}`);
    const description = await meta.description();
    logger.info(`Description: ${description}`);

    const storageAddress = config.storageAddress;
    const storage = new Storage(config.abiPath, storageAddress, web3);
    const storageName = await storage.name();
    const storageVersion = await storage.version();
    logger.info(`${storageName}: ${storageVersion}`);

    const proposalId = config.getProposalId();
    const startTime = await storage.startTime(proposalId);
    logger.info(`Vote start time ${new Date(startTime * 1000).toISOString()}`);
    const endTime = await storage.endTime(proposalId);
    logger.info(`Vote ends at ${new Date(endTime * 1000).toISOString()}`);
    await governance.cancel(proposalId);
    const voteStatus = await governance.isOpen(proposalId);
    if (!voteStatus) {
      logger.info(`Vote closed`);
    } else {
      logger.info('Vote not cancelled');
    }
  } catch (error) {
    logger.error(error);
    throw new Error('Run failed');
  }
};

run()
  .then(() => process.exit(0))
  .catch((error) => logger.error(error));
