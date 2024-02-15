<template>
    <div class="isPAYMENT">
        <el-button @click="connectWallet"
                   type="text">Get a limited Blast Testnet <br> SBT now by lending <br> in project page!</el-button>
    </div>
</template>

<script>
export default {
    name: 'NotMint',
    data () {
        return {
        }
    },
    beforeDestroy () {
    },
    methods: {
        connectWallet () {
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
        width: 95%
        height: 21%
        text-align: center
        color: #fff
        font-size: 16px
        font-family: PlusJakartaSansRegular
        font-weight: 700
        border-radius: 100px
        background: #325AB4
        letter-spacing: 2.6px
        line-height: 150%
        border-radius: 15px
</style>
