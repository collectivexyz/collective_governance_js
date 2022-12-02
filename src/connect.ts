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

import { ethers } from 'ethers';

import { Config } from './config';
import { CollectiveGovernance } from './governance';
import { LoggerFactory } from './logging';
import { Storage } from './storage';
import { MetaStorage } from './metastorage';
import { GovernanceBuilder } from './governancebuilder';

const logger = LoggerFactory.getLogger(module.filename);

export interface Collective {
  governance: CollectiveGovernance;
  storage: Storage;
  meta: MetaStorage;
}

export async function getProvider(config: Config): Promise<ethers.providers.Provider> {
  const network = ethers.providers.getNetwork(config.getChainId());
  const provider = new ethers.providers.WebSocketProvider(config.rpcUrl, network);
  return provider;
}

export async function connect(): Promise<Collective> {
  try {
    const config = new Config();
    const provider = await getProvider(config);
    const wallet = new ethers.Wallet(config.privateKey, provider);
    const address = await wallet.getAddress();
    logger.info(`Wallet connected: ${address}`);
    const builder = new GovernanceBuilder(config.abiPath, config.builderAddress, provider, wallet);
    const contractAddress = await builder.discoverContract(config.buildTxId);
    const governance = new CollectiveGovernance(config.abiPath, contractAddress.governanceAddress, provider, wallet);
    logger.info(`Connected to contract: ${contractAddress.governanceAddress}`);
    const name = await governance.name();
    const version = await governance.version();
    logger.info(`${name} - ${version}`);

    const metaAddress = contractAddress.metaAddress;
    const meta = new MetaStorage(config.abiPath, metaAddress, provider, wallet);
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
    const storage = new Storage(config.abiPath, storageAddress, provider, wallet);
    const storageName = await storage.name();
    const storageVersion = await storage.version();

    if (version != storageVersion) {
      logger.error(`Required storage version ${version}`);
      throw new Error('Storage version mismatch');
    }

    logger.info(`${storageName} - ${storageVersion}`);
    return { governance, storage, meta };
  } catch (error) {
    logger.error(error);
    throw new Error('Run failed');
  }
}
