import * as dotenv from 'dotenv';
import * as fs from 'fs';
import Web3 from 'web3';

dotenv.config();

function loadAbi(abiFile: string) {
  const abiData = fs.readFileSync(abiFile).toString();
  return JSON.parse(abiData);
}

const run = async () => {
  try {
    const abiFile: string | undefined = process.env.ABI_FILE;
    const contractAddress: string | undefined = process.env.CONTRACT_ADDRESS;
    const rpcUrl: string | undefined = process.env.RPC_URL;
    const walletAddress: string | undefined = process.env.WALLET_ADDRESS;
    const privateKey: string | undefined = process.env.PRIVATE_KEY;

    if (!abiFile) {
      throw new Error('ABI file required in environment');
    }

    if (!contractAddress) {
      throw new Error('Contract address required in environment');
    }

    if (!walletAddress) {
      throw new Error('Wallet address is required in environment');
    }

    if (!privateKey) {
      throw new Error('Private key is required in environment');
    }

    console.log(`Loading ABI: ${abiFile}`);
    const contractAbi = loadAbi(abiFile);

    const web3 = new Web3(rpcUrl || 'ws://localhost:8545');
    const account = web3.eth.accounts.privateKeyToAccount(`0x${privateKey}`);
    web3.eth.accounts.wallet.add(account);
    web3.eth.defaultAccount = account.address;
    const electorPoolContract = new web3.eth.Contract(contractAbi, contractAddress);
    const contractName = await electorPoolContract.methods.name().call();
    console.log(contractName);

    const addSupervisorTx = await electorPoolContract.methods.registerSupervisor(account.address).send({
      from: account.address,
      gas: 470000,
      gasPrice: 0,
    });
    console.log(addSupervisorTx);

    const regVoterTx = await electorPoolContract.methods.registerVoter(account.address).send({
      from: account.address,
      gas: 470000,
      gasPrice: 0,
    });
    console.log(regVoterTx);

    const setPassTx = await electorPoolContract.methods.setPassThreshold(1).send({
      from: account.address,
      gas: 470000,
      gasPrice: 0,
    });
    console.log(setPassTx);

    const openVotingTx = await electorPoolContract.methods.openVoting().send({
      from: account.address,
      gas: 470000,
      gasPrice: 0,
    });
    console.log(openVotingTx);

    const voteTx = await electorPoolContract.methods.voteFor().send({
      from: account.address,
      gas: 470000,
      gasPrice: 0,
    });
    console.log(voteTx);

    const endVotingTx = await electorPoolContract.methods.endVoting().send({
      from: account.address,
      gas: 470000,
      gasPrice: 0,
    });
    console.log(endVotingTx);

    const result = await electorPoolContract.methods.getResult().call();
    console.log(`Measure Passed: ${result}`);
  } catch (error) {
    console.error('Error while calling contract', error);
  }
};

run().catch((error) => console.error(error));
