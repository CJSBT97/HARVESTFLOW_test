import Vue from 'vue'
import App from './App.vue'

import store from './store'
import router from './router'

import "./style/base.css"

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element)

import web3 from "web3"
Vue.prototype.web3 = web3

// 引入 swiper.css
import "swiper/css/swiper.css";

Vue.config.productionTip = false


new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
