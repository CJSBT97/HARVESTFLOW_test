<template>
    <div>
        <div v-show="isTrue"
             class="follow center">
            <p>Stay tuned for more exciting projects coming your way in April 2024!</p>
            <a href="#"> Follow X > </a>
        </div>
        <header class="centerBetween marginBox">
            <nav class="centerBetween">
                <div class="logo"><img src="@/assets/images/logo.svg" /></div>
                <a>Explore</a>
                <a>FAQ</a>
                <a><img src="@/assets/images/X.svg" /></a>
            </nav>
            <div class="info centerBetween">
                <template v-if="token">
                    <el-button type="text"
                               @click="$router.push('/AccountOverview')">Account Overview</el-button>
                    <el-button class="Connect"
                               type="text">{{ newPersonID }}</el-button>
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
import { mapGetters } from 'vuex'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Header',
    data () {
        return {
            isTrue: true
        }
    },
    computed: {
        ...mapGetters([
            'newPersonID',
            'token'
        ])
    },
    mounted () {
        if (this.$route.path == '/AccountOverview') {
            this.isTrue = false
        } else {
            this.isTrue = true
        }
        this.$store.dispatch('user/getInfo')
        // 监听账户变化事件
        window.ethereum.on('accountsChanged', (accounts) => {
            if (accounts.length === 0) {
                console.log("用户已断开连接");
                this.$store.dispatch('user/resetToken')
            } else {
                console.log("用户已连接，当前账户:", accounts[0]);
            }
        });
        // 监听网络变化事件
        window.ethereum.on('chainChanged', (chainId) => {
            // 当用户切换网络时，会触发该事件 重新链接钱包
            this.$store.dispatch('user/resetToken')
            this.$store.dispatch('user/login')
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
        connectWallet () {
            this.$store.dispatch('user/login')
                .then(() => {
                })
                .catch(() => {
                })
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
    background: rgba(217, 217, 217, 1)
    width: 100%
    height: 51px

    & a
        margin-left: 10%
        color: rgba(50, 89, 180, 1)
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