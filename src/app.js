import Vue from 'vue'
import Button from './button'
import Icon from './icon'

Vue.component('lm-button', Button)
Vue.component('lm-icon', Icon)
new Vue({
    el: '#app',
    data: {
        load: false
    }
})