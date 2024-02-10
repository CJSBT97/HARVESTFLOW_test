// import { getMetaMask } from '@/api/getInfo'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { truncateString } from '@/utils/app'
import Web3 from "web3"
// import { ethers } from "ethers";
// import router, { resetRouter } from '@/router'
// import Cookies from 'js-cookie'

const state = {
    token: getToken(),
    name: '', // 账号
    photo: '', // 头像
    personID: '', // 用户id
    newPersonID: ''
}
const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_NAME: (state, name) => {
        state.name = name
    },
    SET_PERSONID: (state, personID) => {
        state.personID = personID
    },
    SET_PHOTO: (state, photo) => {
        state.photo = photo
    },
    SET_NRWPERSONID: (state, newPersonID) => {
        state.newPersonID = newPersonID
    },
}

const actions = {
    // 获取用户
    async login ({ commit }) {
        if (window.ethereum) {
            try {
                // 请求用户授权连接钱包
                await window.ethereum.request({ method: "eth_requestAccounts" });
                // 初始化web3
                const web3 = new Web3(window.ethereum);
                // 获取当前连接的账户
                const accounts = await web3.eth.getAccounts();
                const newPersonID = truncateString(accounts[0])
                commit('SET_TOKEN', accounts[0])
                commit('SET_PERSONID', accounts[0])
                commit('SET_NRWPERSONID', newPersonID)
                setToken(accounts[0])
                return accounts[0]
            } catch (error) {
                console.error(error);
            }
        } else {
            this.$message.error('Please install MetaMask!')
        }
    },
    // get user info
    async getInfo ({ commit, state, dispatch }) {
        try {
            // 获取当前连接的账户
            if (state.token) {
                const account = state.token
                // 获取当前连接的账户
                const web3 = new Web3(window.web3.currentProvider);
                const accounts = await web3.eth.getAccounts();
                if (accounts.length === 0 || !account) {
                    dispatch('resetToken')
                    console.log("用户未连接钱包");
                } else {
                    const newPersonID = truncateString(account)
                    commit('SET_TOKEN', account)
                    commit('SET_PERSONID', account)
                    commit('SET_NRWPERSONID', newPersonID)
                    setToken(account)
                    console.log("用户已连接，当前账户:", account);
                }
            }
        } catch (error) {
            console.error("发生错误:", error);
        }
    },
    // 获取账户余额
    async getBalance ({ state }) {
        try {
            const balance = await Web3.eth.getBalance(state.personID);
            // 转换为以太单位
            return Web3.utils.fromWei(balance, 'ether');
        } catch (error) {
            console.error("获取余额失败:", error);
            return null;
        }
    },

    // remove token
    resetToken ({ commit }) {
        return new Promise(resolve => {
            commit('SET_TOKEN', '')
            removeToken()
            resolve()
        })
    },

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
