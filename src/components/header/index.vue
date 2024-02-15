<template>
    <div>
        <div v-show="isTrue"
             class="follow center">
            <p>HARVEST FLOW is currently on testnet. Stay tuned for more exciting projects coming your way in Spring 2024!</p>
            <a href="https://twitter.com/HarvestFlow_io"
               target="_blank"> Follow X > </a>
        </div>
        <header class="centerBetween marginBoxHeaderFooter">
            <nav class="centerBetween">
                <div class="logo"><el-button type="text"
                               @click="getPushHome"><img src="@/assets/images/logo.svg" /></el-button></div>
                <a>Explore</a>
                <a>FAQ</a>
                <a href="https://x.com/HarvestFlow_io"
                   target="_blank"><img src="@/assets/images/X.svg" /></a>
            </nav>
            <div class="info centerBetween">
                <template v-if="accountFilter">
                    <el-button type="text"
                               style="color: #325AB4;font-family: 'PlusJakartaSansBlod';font-size:16px;font-weight:500;"
                               @click="getPushAccountOverview">Account Overview</el-button>
                    <el-button class="Connect"
                               type="text">{{ accountFilter }}</el-button>
                </template>
                <el-button v-else
                           @click="connectWallet"
                           class="isConnect"
                           type="text">Connect Wallet</el-button>
                <div class="avatar">
                    <img src="@/assets/images/face.png">
                </div>
            </div>
        </header>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import { getAccounts, setupNetwork } from '@/utils/ethers'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Header',
    data () {
        return {
            isTrue: true,
            timer: null
        }
    },
    computed: {
        ...mapGetters([
            'newPersonID',
            'token',
            'account',
            'accountFilter'
        ]),
        ...mapState('web3', ['account'])
    },
    beforeDestroy () {
        clearTimeout(this.timer)
        this.timer = null
    },
    mounted () {
        if (this.$route.path == '/AccountOverview') {
            this.isTrue = false
        } else {
            this.isTrue = true
        }
        // 监听账户变化事件
        window.ethereum.on('accountsChanged', (accounts) => {
            if (accounts.length === 0) {

                this.$store.commit('web3/saveAccountFilter', null)
                this.$store.commit('web3/accountFilter', null)
            } else {
                this.connectWallet()
                console.log("用户已连接，当前账户:", accounts[0]);
            }
        });
        // 监听网络变化事件
        window.ethereum.on('chainChanged', (chainId) => {
            // 当用户切换网络时，会触发该事件 重新链接钱包
            this.connectWallet()
            console.log("用户已切换网络，当前网络ID:", chainId);
        });
    },
    watch: {
        '$route' (to) { // to为新的路由信息，from为之前的路由信息
            if (to.path == '/AccountOverview') {
                this.isTrue = false
            } else {
                this.isTrue = true
            }
        },
    },
    methods: {
        async connectWallet () {
            const res = await setupNetwork()
            if (res) {
                getAccounts().catch();
                if (this.timer != null) {
                    clearTimeout(this.timer)
                    this.timer = null
                }
                this.timer = setTimeout(() => {
                    removeToken()
                    this.$store.commit('web3/saveAccount', null)
                    this.$store.commit('web3/saveAccountFilter', null)
                    clearTimeout(this.timer)
                    this.timer = null
                }, 60 * 60 * 1000);
            }
        },
        getPushHome () {
            if (this.$route.path != '/home') {
                this.$router.push('/home')
            }
        },
        getPushAccountOverview () {
            if (this.$route.path != '/AccountOverview') {
                this.$router.push('/AccountOverview')
            }
        }
    }
}
</script>

<style lang="sass" scoped>
/* 头部 */
.avatar
    overflow: hidden
    margin-left: 10px
    width: 37px
    height: 37px
    border-radius: 50%

header
    padding-top: 30px
    padding-bottom: 30px
    font-family: 'PlusJakartaSansRegular'
    font-weight: 500

.logo
    font-size: 20px
    font-weight: 800

.follow
    background: rgba(237, 243, 247, 1)
    width: 100%
    height: 51px
    color: var(--TEXT_BLACK, #282828)
    font-family: "Noto Sans"
    font-size: 13px
    font-weight: 400
    line-height: 180%
    letter-spacing: 0.39px

    & a
        margin-left: 10%
        color: var(--MAIN_BLUE, #325AB4)
        font-family: "Noto Sans"
        font-size: 13px
        font-style: normal
        font-weight: 400
        line-height: 180%
        letter-spacing: 0.39px
.isConnect,.Connect
    width: 148px
    height: 37px
    text-align: center
    padding: 5px 28px
    border-radius: 100px
    font-size: 13px
.isConnect
    border: 1px solid #325AB4
    color: #325AB4
    &:hover
        border: 1px solid #325AB4
        color: #325AB4

.Connect
    color: #fff
    background-color: #325AB4
    &:hover
        color: #fff
        background-color: #325AB4
</style>
