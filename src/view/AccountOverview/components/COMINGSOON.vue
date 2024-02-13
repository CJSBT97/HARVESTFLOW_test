<template>
    <div class="COMINGSOON">
        <h3>COMING SOON</h3>
    </div>
</template>

<style lang="sass" scoped>
.COMINGSOON
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    color: #fff
    & > h3
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
        z-index: 3
        width: 440px
        height: 90px
        line-height: 90px
        flex-shrink: 0
        border-radius: 15px
        opacity: 0.95
        background: #82A5BE
        text-align: center
        font-family: "PlusJakartaSansBlod"
        font-size: 32px
        font-weight: 800
        letter-spacing: 6.4px
</style>