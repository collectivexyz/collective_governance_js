// SPDX-License-Identifier: BSD-3-Clause
/*
 * BSD 3-Clause License
 *
 * Copyright (c) 2023, collective
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
import { EthWallet, Treasury, getTransactionHash, getEthSignature, Transaction } from '@collectivexyz/governance';
import Web3 from 'web3';
import { Config } from './config';
import { LoggerFactory } from './logging';
import { blocktimeNow } from '@collectivexyz/governance';

const logger = LoggerFactory.getLogger(module.filename);

const run = async () => {
  try {
    const config = new Config();

    if (!config.treasuryAddress) {
      throw new Error('Treasury address is not set');
    }

    if (!config.treasuryPayee) {
      throw new Error('Treasury payee is not set');
    }

    if (config.getTreasuryApproveQuantity() == 0) {
      throw new Error('Treasury approve quantity is zero');
    }

    if (!config.getTreasuryApproveMultiList()) {
      throw new Error('Treasury multi sig is not set');
    }

    const web3 = new Web3(config.rpcUrl);
    const wallet = new EthWallet(config.privateKey, web3);
    wallet.connect();
    logger.info(`Wallet connected: ${wallet.getAddress()}`);
    const blockTime = await blocktimeNow(web3);
    // slight grace period is added to ensure schedule time is past minimum time for time lock
    const scheduleTime = blockTime + 3600 + 300;
    logger.info(`Schedule time: ${scheduleTime}`);
    const transaction = {
      target: config.treasuryPayee,
      value: web3.utils.toWei(config.getTreasuryApproveQuantity().toString(), 'wei'),
      signature: '',
      _calldata: '',
      scheduleTime: scheduleTime,
    } as Transaction;

    const transactionHash = getTransactionHash(web3, transaction);
    logger.info(`Transaction hash: ${transactionHash}`);

    const approveMulti = config.getTreasuryApproveMultiList();
    const signatureList: string[] = [];
    for (let i = 0; i < approveMulti.length; i++) {
      const key = approveMulti[i];
      const wallet = new EthWallet(key, web3);
      const signature = await getEthSignature(wallet, transactionHash);
      logger.info(`Signature, ${i}: ${signature.toString()}`);
      signatureList.push(signature.toString());
    }

    logger.info(`Connecting to Treasury at ${config.treasuryAddress}`);
    const treasury = new Treasury(config.abiPath, config.treasuryAddress, web3, wallet, config.getGas(), config.gasPrice);
    await treasury.approveMulti(config.treasuryPayee, config.getTreasuryApproveQuantity(), scheduleTime, signatureList);
  } catch (error) {
    logger.error(error);
    throw new Error('Run failed');
  }
};

run()
  .then(() => process.exit(0))
  .catch((error) => logger.error(error));


