import Web3 from 'web3';
import { Config } from './config';
import { CollectiveGovernance } from './governance';
import { LoggerFactory } from './logging';
import { EthWallet } from './wallet';

const logger = LoggerFactory.getLogger(module.filename);

async function timeout(duration: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, duration);
  });
}

const run = async () => {
  try {
    const config = new Config();
    const web3 = new Web3(config.rpcUrl);
    const latestBlock = await web3.eth.getBlockNumber();
    logger.info(`Governance Started at Block: ${latestBlock}`);
    const wallet = new EthWallet(config.privateKey, web3);
    wallet.connect();
    logger.info(`Wallet connected: ${wallet.getAddress()}`);
    const governance = new CollectiveGovernance(
      config.abiPath,
      config.contractAddress,
      web3,
      wallet,
      config.getGas(),
      latestBlock
    );
    const name = await governance.name();
    const proposalId = await governance.propose();
    logger.info(`New Vote - ${name}: ${proposalId}`);
    await governance.configure(proposalId, 1, config.projectAddress, 10);

    const nextBlock = (await web3.eth.getBlockNumber()) + 1;
    while (nextBlock != (await web3.eth.getBlockNumber())) {
      await timeout(1000);
      logger.info('Waiting for vote to start');
    }

    await governance.voteFor(proposalId);
    let voteStatus = await governance.isOpen(proposalId);
    while (voteStatus) {
      await timeout(1000);
      voteStatus = await governance.isOpen(proposalId);
      logger.info('Voting is in progress');
    }
    await governance.endVote(proposalId);
    const measurePassed = await governance.voteSucceeded(proposalId);
    if (measurePassed) {
      logger.info('The measure has passed');
    } else {
      logger.info('The measure has failed');
    }
  } catch (error) {
    logger.error(error);
    throw new Error('Run failed');
  }
};

run()
  .then(() => process.exit(0))
  .catch((error) => logger.error(error));
