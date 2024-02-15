<template>
    <div>
        <footer class="centerBetween marginBoxHeaderFooter">
            <nav class="centerBetween">
                <div class="logo"><el-button type="text"
                               @click="getPushHome"><img src="@/assets/images/logo.svg" /></el-button></div>
                <a>Privacy Policy</a>
                <a>LAW</a>
            </nav>
            <p>©️2024 Apas Port Inc. All rights reserved.</p>
        </footer>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Footer',
    methods: {
        getPushHome () {
            if (this.$route.path != '/home') {
                this.$router.push('/home')
            }
        }
    }
}
</script>

<style lang="sass" scoped>
footer a
    color: #000

    font-family: "PlusJakartaSansRegular"
    font-size: 16px
    font-style: normal
    font-weight: 500
    line-height: normal
    letter-spacing: 0.8px
</style>
