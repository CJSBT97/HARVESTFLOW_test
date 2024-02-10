import { CHAIN_ID } from "@/config";

export default {
  namespaced: true,
  state: {
    ethers: null,
    account: null,
    allAccounts: [],
    chainId: -1,
    blockNum: null,
    nonce: null,
    readonlyProvider: null,
    ethBalance: 0
  },
  mutations: {
    saveEthers: (state, ethers) => {
      state.ethers = ethers;
    },
    saveAccount: (state, account) => {
      state.account = account
    },
    saveAllAccounts: (state, allAccounts) => {
      state.allAccounts = allAccounts;
    },
    saveAbi: (state, { name, abi }) => {
      state.abis[name] = abi;
    },
    saveChainId: (state, chainId) => {
      state.chainId = chainId;
    },
    saveBlockNum: (state, blockNum) => {
      state.blockNum = blockNum;
    },
    saveNonce: (state, nonce) => {
      state.nonce = nonce;
    },
    saveReadonlyProvider: (state, readonlyProvider) => {
      state.readonlyProvider = readonlyProvider;
    },
    saveEthBalance: (state, ethBalance) => {
      state.ethBalance = ethBalance
    }
  },
  getters: {
    isMainChain: (state) => {
      return parseInt(state.chainId) === parseInt(CHAIN_ID);
    },
  },
};
