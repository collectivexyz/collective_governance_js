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

dotenv.config();

export class Config {
  public readonly abiPath: string = process.env.ABI_PATH || '';
  public readonly communityClass: string = process.env.COMMUNITY_CLASS || '';
  public readonly builderAddress: string = process.env.BUILDER_ADDRESS || '';
  public readonly communityAddress: string = process.env.COMMUNITY_ADDRESS || '';
  public readonly proposalAddress: string = process.env.PROPOSAL_ADDRESS || '';
  public readonly treasuryBuilderAddress: string = process.env.TREASURY_BUILDER_ADDRESS || '';
  public readonly treasuryApproverList: string = process.env.TREASURY_APPROVER_LIST || '';
  public readonly treasuryAddress: string = process.env.TREASURY_ADDRESS || '';
  public readonly treasuryPayee: string = process.env.TREASURY_PAYEE || '';
  public readonly treasuryApproveQuantity: string = process.env.TREASURY_APPROVE_QUANTITY || '';
  public readonly treasuryApproveMulti: string = process.env.TREASURY_APPROVE_MULTI || '';
  public readonly rpcUrl: string = process.env.RPC_URL || '';
  public readonly privateKey: string = process.env.PRIVATE_KEY || '';
  public readonly tokenContract: string = process.env.TOKEN_CONTRACT || '';
  public readonly vaultContract: string = process.env.VAULT_CONTRACT || '';
  public readonly vaultValue: string = process.env.VAULT_VALUE || '';
  public readonly vaultSignature: string = process.env.VAULT_SIGNATURE || '';
  public readonly vaultCalldata: string = process.env.VAULT_CALLDATA || '';
  public readonly gas: string = process.env.GAS || '1000000';
  public readonly gasPrice: string = process.env.GAS_PRICE || '1';
  public readonly minimumDuration: string = process.env.MINIMUM_DURATION || '86400';
  public readonly proposalId: string = process.env.PROPOSAL_ID || '';
  public readonly buildTxId: string = process.env.BUILD_TX || '';
  public readonly systemCreator: string = process.env.SYSTEM_CREATOR || '';

  // default Goërli
  public readonly chainId: string = process.env.CHAIN_ID || '5';

  constructor() {
    if (!this.abiPath) {
      throw new Error('ABI path required');
    }

    if (!this.builderAddress) {
      throw new Error('Builder address required');
    }

    if (!this.communityAddress) {
      throw new Error('Community Builder address required');
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
    const maxGas = parseInt(this.gas);
    if (isNaN(maxGas)) throw new Error(`${this.gas} is not a number`);
    return maxGas;
  }

  public getMinimumDuration(): number {
    const duration = parseInt(this.minimumDuration);
    if (isNaN(duration)) throw new Error(`${this.minimumDuration} is not a number`);
    return duration;
  }

  public getVaultValue(): number {
    return this.vaultValue ? parseInt(this.vaultValue) : 0;
  }

  public getProposalId(): number {
    const id = parseInt(this.proposalId);
    if (isNaN(id)) throw new Error(`${this.proposalId} is not a number`);
    return id;
  }

  public getChainId(): number {
    const id = parseInt(this.chainId);
    if (isNaN(id)) throw new Error(`${this.proposalId} is not a number`);
    return id;
  }

  public getTreasuryApproverList(): string[] {
    if (!this.treasuryApproverList) return [];
    return this.treasuryApproverList.split(',').map((address) => address.trim());
  }

  public getTreasuryApproveMultiList(): string[] {
    if (!this.treasuryApproveMulti) return [];
    return this.treasuryApproveMulti.split(',').map((address) => address.trim());
  }

  public getTreasuryApproveQuantity(): number {
    const quantity = parseInt(this.treasuryApproveQuantity);
    if (isNaN(quantity)) throw new Error(`${this.treasuryApproveQuantity} is not a number`);
    return quantity;
  }
}
