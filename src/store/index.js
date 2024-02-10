import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import getters from './getters'
import user from './modules/user'
import web3 from './modules/web3'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        app,
        user,
        web3
    },
    getters
})

export default store
