import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Content from './content'
import Footer from './footer'
import Sider from './sider'
import Toast from './toast'
import plugin from './plugin'

Vue.component('lm-button', Button)
Vue.component('lm-icon', Icon)
Vue.component('lm-button-group', ButtonGroup)
Vue.component('lm-input', Input)
Vue.component('lm-row', Row)
Vue.component('lm-col', Col)
Vue.component('lm-layout', Layout)
Vue.component('lm-header', Header)
Vue.component('lm-content', Content)
Vue.component('lm-footer', Footer)
Vue.component('lm-sider', Sider)
Vue.component('lm-toast', Toast)
Vue.use(plugin)


new Vue({
    el: '#app',
    data: {
        load: false,
        message: 'hello',
    },
    methods: {
        showToast() {
            this.$toast('hello')
        }
    },
})

