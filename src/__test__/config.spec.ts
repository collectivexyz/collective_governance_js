import { Config } from '../config';

describe('Config', () => {
  const env = process.env;
  let config: Config;

  beforeEach(() => {
    jest.resetModules();
    process.env = {
      ...env,
      ABI_PATH: '/slash/path',
      COMMUNITY_CLASS: '0x101',
      BUILDER_ADDRESS: '0x1020',
      PROPOSAL_ADDRESS: '0x1021',
      COMMUNITY_ADDRESS: '0x1022',
      TOKEN_CONTRACT: '0x103',
      VAULT_CONTRACT: '0x104',
      SYSTEM_CREATOR: '0x105',
      VAULT_SIGNATURE: 'go()',
      VAULT_CALLDATA: '00001',
      RPC_URL: 'http://collective.xyz',
      PRIVATE_KEY: '0xefgabc',
      GAS: '1',
      GAS_PRICE: '7',
      MINIMUM_DURATION: '300',
      PROPOSAL_ID: '22',
      BUILD_TX: '0xffff',
      TREASURY_BUILDER_ADDRESS: '0x1023',
      TREASURY_APPROVER_LIST: '0x1, 0x2,     \t0x3',
      TREASURY_ADDRESS: '0x1024',
      TREASURY_PAYEE: '0x106',
      TREASURY_APPROVE_QUANTITY: '100',
      TREASURY_APPROVE_MULTI: '\t0xa\t, 0xb , 0xc',
    };
    config = new Config();
  });

  afterEach(() => {
    process.env = env;
  });

  it('must load abi path', () => {
    expect(config.abiPath).toBe('/slash/path');
  });

  it('must load voter class', () => {
    expect(config.communityClass).toBe('0x101');
  });

  it('must load builder address', () => {
    expect(config.builderAddress).toBe('0x1020');
  });

  it('must load community address', () => {
    expect(config.communityAddress).toBe('0x1022');
  });

  it('must load proposal address', () => {
    expect(config.proposalAddress).toBe('0x1021');
  });

  it('must load treasury builder address', () => {
    expect(config.treasuryBuilderAddress).toBe('0x1023');
  });

  it('must load token contract', () => {
    expect(config.tokenContract).toBe('0x103');
  });

  it('must load vault contract', () => {
    expect(config.vaultContract).toBe('0x104');
  });

  it('must load system creator', () => {
    expect(config.systemCreator).toBe('0x105');
  });

  it('must load vault signature', () => {
    expect(config.vaultSignature).toBe('go()');
  });

  it('must load vault calldata', () => {
    expect(config.vaultCalldata).toBe('00001');
  });

  it('must load rpc url', () => {
    expect(config.rpcUrl).toBe('http://collective.xyz');
  });

  it('must load private key', () => {
    expect(config.privateKey).toBe('0xefgabc');
  });

  it('must load gas price limit', () => {
    expect(config.getGas()).toBe(1);
  });

  it('must load gas price', () => {
    expect(config.gasPrice).toBe('7');
  });

  it('must load minimum duration', () => {
    expect(config.minimumDuration).toBe('300');
  });

  it('must load proposal id', () => {
    expect(config.proposalId).toBe('22');
  });

  it('must load build transaction', () => {
    expect(config.buildTxId).toBe('0xffff');
  });

  it('must require abi path', () => {
    process.env.ABI_PATH = '';
    expect(() => new Config()).toThrow();
  });

  it('must require builder address', () => {
    process.env.BUILDER_ADDRESS = '';
    expect(() => new Config()).toThrow();
  });

  it('must require community address', () => {
    process.env.COMMUNITY_ADDRESS = '';
    expect(() => new Config()).toThrow();
  });

  it('must not require proposal address', () => {
    process.env.PROPOSAL_ADDRESS = '';
    expect(() => new Config()).not.toThrow();
  });

  it('must require rpc url', () => {
    process.env.RPC_URL = '';
    expect(() => new Config()).toThrow();
  });

  it('must require private key', () => {
    process.env.PRIVATE_KEY = '';
    expect(() => new Config()).toThrow();
  });

  it('must require token contract', () => {
    process.env.TOKEN_CONTRACT = '';
    expect(() => new Config()).toThrow();
  });

  it('must require build transaction', () => {
    process.env.BUILD_TX = '';
    expect(() => new Config()).toThrow();
  });

  it('must require gas to be a number', () => {
    process.env.GAS = '---';
    config = new Config();
    expect(() => config.getGas()).toThrow();
  });

  it('must require minimum duration to be a number', () => {
    process.env.MINIMUM_DURATION = 'ZZZ';
    config = new Config();
    expect(() => config.getMinimumDuration()).toThrow();
  });

  it('must default vault value to zero', () => {
    process.env.VAULT_VALUE = '';
    config = new Config();
    expect(config.getVaultValue()).toBe(0);
  });

  it('must require proposal id to be a number', () => {
    process.env.PROPOSAL_ID = 'seven';
    config = new Config();
    expect(() => config.getProposalId()).toThrow();
  });

  it('must require chian id to be a number', () => {
    process.env.CHAIN_ID = 'eight';
    config = new Config();
    expect(() => config.getChainId()).toThrow();
  });

  it('must load the treasury approver list if set', () => {
    expect(config.getTreasuryApproverList()).toEqual(['0x1', '0x2', '0x3']);
  });

  it('must return empty list if treasury approver list is not set', () => {
    process.env.TREASURY_APPROVER_LIST = '';
    config = new Config();
    expect(config.getTreasuryApproverList()).toEqual([]);
  });

  it('must load the treasury address', () => {
    expect(config.treasuryAddress).toBe('0x1024');
  });

  it('must load the treasury payee', () => {
    expect(config.treasuryPayee).toBe('0x106');
  });

  it('must load treasury approve quantity', () => {
    expect(config.getTreasuryApproveQuantity()).toBe(100);
  });

  it('must enforce treasury approve quantity as a number', () => {
    process.env.TREASURY_APPROVE_QUANTITY = 'note to self';
    config = new Config();
    expect(() => config.getTreasuryApproveQuantity()).toThrowError();
  });

  it('must load the treasury approve multi if set', () => {
    expect(config.getTreasuryApproveMultiList()).toEqual(['0xa', '0xb', '0xc']);
  });

  it('must return empty list if treasury approve multi is not set', () => {
    process.env.TREASURY_APPROVE_MULTI = '';
    config = new Config();
    expect(config.getTreasuryApproveMultiList()).toEqual([]);
  });
});
