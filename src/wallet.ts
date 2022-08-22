import Web3 from 'web3';
import { getKeyAsEthereumKey } from './abi';

export interface Wallet {
  getAddress(): string;
  connect(): void;
}

export class EthWallet implements Wallet {
  private walletAddress;
  private account: any;
  private web3: Web3;

  constructor(privateKey: string, web3: Web3) {
    this.walletAddress = getKeyAsEthereumKey(privateKey);
    this.web3 = web3;
    this.account = this.web3.eth.accounts.privateKeyToAccount(this.walletAddress);
  }

  connect(): void {
    this.web3.eth.accounts.wallet.add(this.account);
    this.web3.eth.defaultAccount = this.account.address;
  }

  getAddress(): string {
    return this.account.address;
  }
}
