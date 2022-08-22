import * as dotenv from 'dotenv';

dotenv.config();

export class Config {
  public readonly abiPath: string = process.env.ABI_PATH || '';
  public readonly contractAddress: string = process.env.CONTRACT_ADDRESS || '';
  public readonly rpcUrl: string = process.env.RPC_URL || 'wss://localhost:8545';
  public readonly privateKey: string = process.env.PRIVATE_KEY || '';
  public readonly gas: string = process.env.GAS || '470000';
  public readonly projectAddress: string = process.env.PROJECT_ADDRESS || '';

  constructor() {
    if (!this.abiPath) {
      throw new Error('ABI path required');
    }

    if (!this.contractAddress) {
      throw new Error('Contract address required');
    }

    if (!this.rpcUrl) {
      throw new Error('RPC url is required');
    }

    if (!this.privateKey) {
      throw new Error('Wallet private key is required');
    }

    if (!this.projectAddress) {
      throw new Error('Project address is required');
    }
  }

  public getGas(): number {
    return parseInt(this.gas);
  }
}
