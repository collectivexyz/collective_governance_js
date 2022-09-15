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
import { Contract, EventData } from 'web3-eth-contract';
import { Wallet } from './wallet';
import { loadAbi, pathWithSlash } from './abi';
import { LoggerFactory } from './logging';

export class VoterClassFactory {
  static ABI_NAME = 'VoterClassFactory.json';

  private readonly logger = LoggerFactory.getLogger(module.filename);

  private contractAddress: string;
  private wallet: Wallet;
  private contractAbi: any[];
  private contract: Contract;
  private gas: number;

  constructor(abiPath: string, contractAddress: string, web3: Web3, wallet: Wallet, gas: number) {
    this.contractAddress = contractAddress;
    this.wallet = wallet;
    this.gas = gas;

    const abiFile = pathWithSlash(abiPath) + VoterClassFactory.ABI_NAME;
    this.logger.info(`Loading ABI: ${abiFile}`);
    this.contractAbi = loadAbi(abiFile);
    this.contract = new web3.eth.Contract(this.contractAbi, this.contractAddress);
    this.contract.defaultAccount = web3.eth.defaultAccount;
    this.logger.info(`Connected to contract ${this.contractAddress}`);
  }

  async createERC721(projectAddress: string, weight: number): Promise<string> {
    this.logger.debug(`Sending createERC721 to ${projectAddress}`);
    const tx = await this.contract.methods.createERC721(projectAddress, weight).send({
      from: this.wallet.getAddress(),
      gas: this.gas,
    });
    this.logger.info(tx);
    const event: EventData = tx.events['VoterClassCreated'];
    const classAddress = event.returnValues['voterClass'];
    if (classAddress) {
      return classAddress;
    }
    throw new Error('Unknown VoterClass created');
  }
}
