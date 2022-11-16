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
import { Contract } from 'web3-eth-contract';
import { loadAbi, pathWithSlash } from './abi';
import { LoggerFactory } from './logging';

export class Storage {
  static ABI_NAME = 'Storage.json';

  private readonly logger = LoggerFactory.getLogger(module.filename);

  private contractAddress: string;
  private web3: Web3;
  private contractAbi: any[];
  private contract: Contract;

  constructor(abiPath: string, contractAddress: string, web3: Web3) {
    this.contractAddress = contractAddress;
    this.web3 = web3;
    const abiFile = pathWithSlash(abiPath) + Storage.ABI_NAME;
    this.logger.info(`Loading ABI: ${abiFile}`);
    this.contractAbi = loadAbi(abiFile);
    this.contract = new web3.eth.Contract(this.contractAbi, this.contractAddress);
  }

  async name(): Promise<string> {
    const name = await this.contract.methods.name().call();
    return name;
  }

  async version(): Promise<number> {
    const version = await this.contract.methods.version().call();
    return parseInt(version);
  }

  async quorumRequired(proposalId: number): Promise<number> {
    const quorum = await this.contract.methods.quorumRequired(proposalId).call();
    return parseInt(quorum);
  }

  async voteDelay(proposalId: number): Promise<number> {
    const delay = await this.contract.methods.voteDelay(proposalId).call();
    return parseInt(delay);
  }

  async voteDuration(proposalId: number): Promise<number> {
    const duration = await this.contract.methods.voteDuration(proposalId).call();
    return parseInt(duration);
  }

  async startTime(proposalId: number): Promise<number> {
    const timeStr = await this.contract.methods.startTime(proposalId).call();
    return parseInt(timeStr);
  }

  async endTime(proposalId: number): Promise<number> {
    const timeStr = await this.contract.methods.endTime(proposalId).call();
    return parseInt(timeStr);
  }

  async getWinningChoice(proposalId: number): Promise<number> {
    const choiceNum = await this.contract.methods.getWinningChoice(proposalId).call();
    return parseInt(choiceNum);
  }

  async choiceCount(proposalId: number): Promise<number> {
    const choiceCount = await this.contract.methods.choiceCount(proposalId).call();
    return parseInt(choiceCount);
  }

  async getChoice(
    proposalId: number,
    choiceId: number
  ): Promise<{ name: string; description: string; transactionId: number; voteCount: number }> {
    const metaData = await this.contract.methods.getChoice(proposalId, choiceId).call();
    const decodedName = this.web3.utils.hexToAscii(metaData[0]);
    return {
      name: decodedName,
      description: metaData[1],
      transactionId: parseInt(metaData[2]),
      voteCount: parseInt(metaData[3]),
    };
  }
}
