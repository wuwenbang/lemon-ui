import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('lm-button', Button)
Vue.component('lm-icon', Icon)
Vue.component('lm-button-group', ButtonGroup)
new Vue({
    el: '#app',
    data: {
        load: false
    }
})