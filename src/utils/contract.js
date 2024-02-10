import { abi } from './abis'
import { ethers } from 'ethers' 
import { setupNetwork, waitForTx } from './ethers'
import { CONTRACT_ADDRESS, STAKE_AMOUNT } from '@/config'
import { expr } from 'jquery'

async function getContract() {
    await setupNetwork()
    const provider = new ethers.BrowserProvider(window.ethereum)
    // construct contract
    const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, provider)
}

export async function stake() {
    try {
        const contract = await getContract()
        const tx = await contract.stake({
            value: ethers.parseEther(STAKE_AMOUNT)
        })
        await waitForTx(tx.hash)
        return;
    } catch(e) {
        console.log('stake fail:', e)
    }
}

export async function unstake() {
    try {
        const contract = await getContract()
        const tx = await contract.unstake()
        await waitForTx(tx.hash)
        return;
    } catch(e) {
        console.log('unstake fail:', e)
    }
}

export async function claim() {
    try {
        const contract = await getContract()
        const tx = await contract.claim()
        await waitForTx(tx.hash)
        return;
    } catch(e) {
        console.log('claim fail:', e)
    }
}

/**
 * 
 * @param {*} address Login user's eth address
 */
export async function getPendingReward(address) {
    try {
        const contract = await getContract()
        const pendingReward = await contract.pendingReward(address)
        return pendingReward;
    } catch (e) {
        console.log('get pending reward fail:', e)
    }
}

export async function getTransctions() {
    try {
        const contract = await getContract()
        const lastIndex = await contract.index();
        const startIndex = Math.max(1, lastIndex - 10)
        let m = []
        for (let i = lastIndex; i >= startIndex; i--) {
            m.push(contract.tranctions(i))
        }
        const trans = await Promise.all(m)
        // [
        //     [
        //         2n,  // transaction type: 1: stake, 2: unstake , 3: claim
        //         '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',   // user address
        //         1707584402n,                                    // time stamp
        //         1000000001585489n                               // amount: stake amount, unstake amount, claim reward amount
        //     ],
        //     ...
        // ]
        return trans;
    } catch (e) {
        
    }
}