import Vue from 'vue'
import App from './App.vue'

import VueDemonstration from 'vue-demonstration'
Vue.component('demonstration', VueDemonstration)

import {Button} from 'vue-multiple-button'
import 'vue-multiple-button/lib/button.css'
Vue.component('vm-button', Button)

import Message from '../../src/index.js'
Vue.component(Message.name, Message)
Vue.prototype.$message = Message
Message.config({
    top: 20
})

new Vue({
    el: '#app',
    render: h => h(App)
})
