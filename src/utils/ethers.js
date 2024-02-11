import { ethers } from 'ethers'
import store from '@/store'
import { RPC_NODE, CHAIN_ID, CHAIN_NAME, BLOCK_CHAIN_BROWER, MainToken } from '@/config'
import { sleep } from '@/utils/helper'
import { truncateString } from '@/utils/app'

export const getReadOnlyProvider = () => {
    // if (store.state.ethers && Object.keys(store.state.ethers).length > 0) {
    //     return store.state.ethers
    // }
    const provider = new ethers.JsonRpcProvider(RPC_NODE)
    store.commit('saveEthers', provider)
    return provider
}

export const setupNetwork = async () => {
    const ethereum = window.ethereum;
    if (!ethereum) return;
    try {
        // current chain
        const chainInfo = await ethereum.request({
            method: 'eth_chainId'
        })

        if (parseInt(chainInfo) == parseInt(CHAIN_ID)) {
            store.commit('web3/saveChainId', parseInt(CHAIN_ID))
            return true;
        }

        await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{
                chainId: `0x${CHAIN_ID.toString(16)}`
            }],
        })
        store.commit('web3/saveChainId', parseInt(CHAIN_ID))
        return true
    } catch (error) {
        console.log(44, error)
        if (error.code === 4001) return;
        if (error.code === -32002) return;
        try {
            await ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{
                    chainId: `0x${CHAIN_ID.toString(16)}`,
                    chainName: CHAIN_NAME,
                    rpcUrls: [RPC_NODE],
                    nativeCurrency: MainToken,
                    blockExplorerUrls: [BLOCK_CHAIN_BROWER]
                }],
            })
            store.commit('web3/saveChainId', parseInt(CHAIN_ID))
            return true
        } catch (error) {
            console.log('connect wallet fail', error);
            store.commit('web3/saveAccountFilter', null)
            store.commit('web3/saveAccount', null)
            return false
        }
    }
}

export const getAccounts = async () => {
    let ethereum = window.ethereum;
    if (store.state.web3.account) {
        return store.state.web3.account;
    }
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
    let account = accounts[0]
    account = ethers.getAddress(account)
    store.commit('web3/saveAccount', account)
    store.commit('web3/saveAccountFilter', truncateString(account))
    return account
}

/**
 * Wait for the transaction comfirmed
 * @param {*} hash 
 */
export const waitForTx = async (hash) => {
    let provider = getReadOnlyProvider();
    console.log(`Waiting for tx: ${hash}...`)
    let trx = await provider.getTransactionReceipt(hash)
    while (!trx) {
        await sleep(1)
        trx = await provider.getTransactionReceipt(hash)
    }
    if (trx.status !== 0) {
        console.log('tx passed');
        return;
    } else {
        console.log('tx fail status:', trx.status);
        console.log('tx fail status:', trx);
        throw 'fail'
    }
}
