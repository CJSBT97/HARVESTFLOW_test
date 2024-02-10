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

export default {
    name: 'LayOut',
    components: {
        Header,
        Footer
    },
    computed: {
    },
    methods: {

    }
}
</script>
