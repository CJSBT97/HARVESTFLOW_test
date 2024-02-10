<template>
    <div class="isPAYMENT">
        <el-button @click="connectWallet"
                   type="text">CONNECT YOUR WALLET</el-button>
    </div>
</template>

<script>
export default {
    name: 'isPAYMENT',
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
        font-family: PlusJakartaSansBlod
        font-weight: 700
        border-radius: 100px
        background: #325AB4
</style>