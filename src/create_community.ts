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

import { EthWallet, CommunityBuilder } from '@collectivexyz/governance';
import Web3 from 'web3';
import { Config } from './config';
import { LoggerFactory } from './logging';

const logger = LoggerFactory.getLogger(module.filename);

const run = async () => {
  try {
    const config = new Config();
    const web3 = new Web3(config.rpcUrl);
    const wallet = new EthWallet(config.privateKey, web3);
    wallet.connect();
    logger.info(`Wallet connected: ${wallet.getAddress()}`);

    logger.info('Building CommunityClass');
    const communityBuilder = new CommunityBuilder(
      config.abiPath,
      config.communityAddress,
      web3,
      wallet,
      config.getGas(),
      config.gasPrice
    );
    const name = await communityBuilder.name();
    logger.info(`Connected to ${name}`);
    await communityBuilder.aCommunity();
    await communityBuilder.asErc20Community(config.tokenContract);
    await communityBuilder.withQuorum(5000);
    await communityBuilder.withCommunitySupervisor(wallet.getAddress());
    const classAddress = await communityBuilder.build();
    logger.info(`CommunityClass created at ${classAddress}`);
  } catch (error) {
    logger.error(error);
    throw new Error('Run failed');
  }
};

run()
  .then(() => process.exit(0))
  .catch((error) => logger.error(error));
