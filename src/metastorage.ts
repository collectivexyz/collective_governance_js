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

export class MetaStorage {
  static ABI_NAME = 'MetaStorage.json';

  private readonly logger = LoggerFactory.getLogger(module.filename);

  private contractAddress: string;
  private web3: Web3;
  private contractAbi: any[];
  private contract: Contract;

  constructor(abiPath: string, contractAddress: string, web3: Web3) {
    this.contractAddress = contractAddress;
    this.web3 = web3;
    const abiFile = pathWithSlash(abiPath) + MetaStorage.ABI_NAME;
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

  async community(): Promise<string> {
    const communityHexEnc = await this.contract.methods.community().call();
    const community = this.web3.utils.hexToAscii(communityHexEnc);
    return community;
  }

  async description(): Promise<string> {
    const description = await this.contract.methods.description().call();
    return description;
  }

  async url(): Promise<string> {
    const description = await this.contract.methods.url().call();
    return description;
  }

  async getMetaDescription(proposalId: number): Promise<string> {
    return await this.contract.methods.description(proposalId).call();
  }

  async getMetaUrl(proposalId: number): Promise<string> {
    return await this.contract.methods.url(proposalId).call();
  }

  async getMeta(proposalId: number, metaId: number): Promise<{ name: string; value: string }> {
    const metaData = await this.contract.methods.getMeta(proposalId, metaId).call();
    const decodedName = this.web3.utils.hexToAscii(metaData[0]);
    return { name: decodedName, value: metaData[1] };
  }
}
