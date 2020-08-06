import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
Vue.component('lm-button', Button)
Vue.component('lm-icon', Icon)
Vue.component('lm-button-group', ButtonGroup)
Vue.component('lm-input', Input)
Vue.component('lm-row', Row)
Vue.component('lm-col', Col)
new Vue({
    el: '#app',
    data: {
        load: false,
        message: 'hello',
    },
    methods: {
        inputChange(e) {
            console.log(e.target.value);
        }
    }
})

