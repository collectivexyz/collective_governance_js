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

import * as dotenv from 'dotenv';
import { LoggerFactory } from './logging';

dotenv.config();

export class Config {
  private readonly logger = LoggerFactory.getLogger(module.filename);

  public readonly abiPath: string = process.env.ABI_PATH || '';
  public readonly voterFactory: string = process.env.VOTER_FACTORY || '';
  public readonly voterClass: string = process.env.VOTER_CLASS || '';
  public readonly builderAddress: string = process.env.BUILDER_ADDRESS || '';
  public readonly rpcUrl: string = process.env.RPC_URL || 'wss://localhost:8545';
  public readonly privateKey: string = process.env.PRIVATE_KEY || '';
  public readonly tokenContract: string = process.env.TOKEN_CONTRACT || '';
  public readonly vaultContract: string = process.env.VAULT_CONTRACT || '';
  public readonly vaultValue: string = process.env.VAULT_VALUE || '';
  public readonly vaultSignature: string = process.env.VAULT_SIGNATURE || '';
  public readonly vaultCalldata: string = process.env.VAULT_CALLDATA || '';
  public readonly gas: string = process.env.GAS || '470000';
  public readonly minimumDuration: string = process.env.MINIMUM_DURATION || '86400';
  public readonly proposalId: string = process.env.PROPOSAL_ID || '';
  public readonly buildTxId: string = process.env.BUILD_TX || '';
  public readonly systemCreator: string = process.env.SYSTEM_CREATOR || '';

  constructor() {
    if (!this.abiPath) {
      throw new Error('ABI path required');
    }

    if (!this.voterFactory) {
      throw new Error('Voter factory is required');
    }

    if (!this.builderAddress) {
      throw new Error('Builder address required');
    }

    if (!this.rpcUrl) {
      throw new Error('RPC url is required');
    }

    if (!this.privateKey) {
      throw new Error('Wallet private key is required');
    }

    if (!this.tokenContract) {
      throw new Error('Project address is required');
    }

    if (!this.buildTxId) {
      throw new Error('Build Transaction is required');
    }
  }

  public getGas(): number {
    return parseInt(this.gas);
  }

  public getMinimumDuration(): number {
    return parseInt(this.minimumDuration);
  }

  public getVaultValue(): number {
    return this.vaultValue ? parseInt(this.vaultValue) : 0;
  }

  public getProposalId(): number {
    return parseInt(this.proposalId);
  }
}
