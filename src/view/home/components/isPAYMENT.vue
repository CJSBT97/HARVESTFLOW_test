<template>
    <div class="isPAYMENT">
        <el-button @click="connectWallet"
                   type="text">CONNECT YOUR WALLET</el-button>
    </div>
</template>

<script>
import { removeToken } from '@/utils/auth'
import { getAccounts, setupNetwork } from '@/utils/ethers'
export default {
    name: 'isPAYMENT',
    data () {
        return {
            timer: null
        }
    },
    beforeDestroy () {
        clearTimeout(this.timer)
        this.timer = null
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
        }
    }
}
</script>

<style lang="sass" scoped>
.isPAYMENT
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: rgba(255, 255, 255, 0.5)
    backdrop-filter: blur(4px)
    z-index: 9
    & .el-button
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
        width: 280px
        height: 58px
        text-align: center
        color: #fff
        font-size: 16px
        font-family: PlusJakartaSansRegular
        font-weight: 700
        border-radius: 100px
        background: #325AB4
        letter-spacing: 1.6px
</style>
