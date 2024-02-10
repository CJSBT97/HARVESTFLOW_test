<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>

export default {
    name: 'App',
    mounted () {
        document.title = 'HARVEST FLOW'
    }
}
</script>

<style>
#app {
    height: 100%;
}
</style>
