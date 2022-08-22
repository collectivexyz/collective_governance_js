import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';

import { Wallet } from './wallet';
import { loadAbi, pathWithSlash } from './abi';
import { LoggerFactory } from './logging';

export class CollectiveGovernance {
  static ABI_NAME = 'Governance.json';
  static STRAT_NAME = 'VoteStrategy.json';

  private readonly logger = LoggerFactory.getLogger(module.filename);

  private contractAddress: string;
  private wallet: Wallet;
  private contractAbi: any[];
  private contract: Contract;
  private stratAbi: any[];
  private strategy: Contract;
  private gas: number;
  private latestBlock: number = 0;

  constructor(abiPath: string, contractAddress: string, web3: Web3, wallet: Wallet, gas: number, latestBlock: number = 0) {
    this.contractAddress = contractAddress;
    this.wallet = wallet;
    this.gas = gas;
    this.latestBlock = latestBlock;

    const abiFile = pathWithSlash(abiPath) + CollectiveGovernance.ABI_NAME;
    this.logger.info(`Loading ABI: ${abiFile}`);
    this.contractAbi = loadAbi(abiFile);
    this.contract = new web3.eth.Contract(this.contractAbi, this.contractAddress);

    const stratFile = pathWithSlash(abiPath) + CollectiveGovernance.STRAT_NAME;
    this.logger.info(`Loading ABI: ${stratFile}`);
    this.stratAbi = loadAbi(stratFile);
    this.strategy = new web3.eth.Contract(this.stratAbi, this.contractAddress);
  }

  async name(): Promise<string> {
    const name = await this.contract.methods.name().call();
    return name;
  }

  async propose(): Promise<number> {
    const proposeTx = await this.contract.methods.propose().send({
      from: this.wallet.getAddress(),
      gas: this.gas,
      gasPrice: 0,
    });
    this.logger.info(proposeTx);
    const events = await this.contract.getPastEvents('ProposalCreated', {
      filter: {
        from: this.wallet.getAddress(),
      },
      fromBlock: this.latestBlock,
      toBlock: 'latest',
    });
    let proposalId = 0;
    events.forEach((event) => {
      if (event.transactionHash === proposeTx.transactionHash) {
        proposalId = parseInt(event.returnValues['proposalId']);
      }
    });
    if (proposalId > 0) {
      return proposalId;
    }
    throw new Error('Unknown proposal created');
  }

  async configure(proposalId: number, quorum: number, address: string, requiredDuration: number): Promise<void> {
    const configureTx = await this.contract.methods.configure(proposalId, quorum, address, requiredDuration).send({
      from: this.wallet.getAddress(),
      gas: this.gas,
      gasPrice: 0,
    });
    this.logger.info(configureTx);
  }

  async isOpen(proposalId: number): Promise<boolean> {
    return await this.strategy.methods.isOpen(proposalId).call();
  }

  async endVote(proposalId: number): Promise<void> {
    const endTx = await this.strategy.methods.endVote(proposalId).send({
      from: this.wallet.getAddress(),
      gas: this.gas,
      gasPrice: 0,
    });
    this.logger.info(endTx);
  }

  async voteFor(proposalId: number): Promise<void> {
    const voteTx = await this.strategy.methods.voteFor(proposalId).send({
      from: this.wallet.getAddress(),
      gas: this.gas,
      gasPrice: 0,
    });
    this.logger.info(voteTx);
  }

  async voteAgainst(proposalId: number): Promise<void> {
    const voteTx = await this.strategy.methods.voteAgainst(proposalId).send({
      from: this.wallet.getAddress(),
      gas: this.gas,
      gasPrice: 0,
    });
    this.logger.info(voteTx);
  }

  async abstainFromVote(proposalId: number): Promise<void> {
    const voteTx = await this.strategy.methods.abstainFromVote(proposalId).send({
      from: this.wallet.getAddress(),
      gas: this.gas,
      gasPrice: 0,
    });
    this.logger.info(voteTx);
  }

  async voteSucceeded(proposalId: number): Promise<boolean> {
    return await this.strategy.methods.getVoteSucceeded(proposalId).call();
  }
}
