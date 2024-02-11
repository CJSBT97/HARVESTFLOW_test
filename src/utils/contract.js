import { abi } from './abis'
import { ethers } from 'ethers' 
import { setupNetwork, waitForTx } from './ethers'
import { CONTRACT_ADDRESS, STAKE_AMOUNT } from '@/config'

/**
 * 获取质押合约
 * @returns 
 */
async function getContract() {
    await setupNetwork()
    const provider = new ethers.BrowserProvider(window.ethereum)
    // construct contract
    const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, provider)
    return contract.connect(await provider.getSigner())
}

/**
 * 质押ETH， 0.0001个，只有没有质押过的用户才可以质押，质押过的用户不能再次质押
 * @returns 
 */
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

/**
 * 取消质押，有质押的用户才能质押，取消质押会赎回用户的ETH和待领取的奖励
 * @returns 
 */
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

/**
 * 领取奖励，对于质押的用户，可以随时领取利息奖励，年化5%，按秒更新奖励
 * @returns 
 */
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
 * 用户质押信息，用来判断用户的质押状态
 * @param {*} address 
 */
export async function userStaked(address) {
    try {
        const contract = await getContract()
        const userInfo = await contract.stakeInfo(address)
        // bool staked;
        // bool staking;
        // uint256 lastUpdateTime;
        // uint256 totalClaimed;

        // staked表示用户执行过质押
        // staking表示用正在质押
        // staked=true, staking=false 表示用户质押后取消了质押
    } catch (e) {
        
    }
}

/**
 * 获取质押用户待领取的奖励
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

/**
 * 获取所有的交易记录，这里只获取了最近的10笔奖励，更多的交易记录需要传之前的索引就行，交易索引是按时间从1开始自增的
 * @returns 
 */
export async function getTransctions() {
    try {
        const contract = await getContract()
        const lastIndex = await contract.index();
        const startIndex = Math.max(1, lastIndex - 10)
        let m = []
        for (let i = lastIndex; i >= startIndex; i--) {
            m.push(contract.transactions(i))
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