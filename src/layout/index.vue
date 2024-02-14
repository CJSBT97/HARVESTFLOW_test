<template>
    <div>
        <Header></Header>
        <router-view />
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
import { removeToken, removeTime, getToken, getTime } from '@/utils/auth'
import { truncateString } from '@/utils/app';

export default {
    name: 'LayOut',
    components: {
        Header,
        Footer
    },
    computed: {
    },
    data () {
        return {
            timer: null
        }
    },
    mounted () {
        if (getToken()) {
            if (new Date().getTime() - getTime() > 3600000) { // 3600000
                removeToken()
                removeTime()
                this.$store.commit('web3/saveAccount', null)
                this.$store.commit('web3/saveAccountFilter', null)
            } else {
                const filterToken = truncateString(getToken())
                this.$store.commit('web3/saveAccount', getToken())
                this.$store.commit('web3/saveAccountFilter', filterToken)
            }
        }
    },
    beforeDestroy () {
        clearTimeout(this.timer)
        this.timer = null
    },
    methods: {
    }
}
</script>
