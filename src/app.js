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
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'


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
Vue.component('lm-tabs', Tabs)
Vue.component('lm-tabs-head', TabsHead)
Vue.component('lm-tabs-body', TabsBody)
Vue.component('lm-tabs-item', TabsItem)
Vue.component('lm-tabs-pane', TabsPane)

Vue.use(plugin)


new Vue({
    el: '#app',
    data: {
        load: false,
        message: 'hello',
        selectedTab: 'tab1'
    },
    methods: {
        showToast(position) {
            this.$toast('你的智商需要充值', {
                position,
                closeButton: {
                    text: "知道了"
                }
            })
        },
        showToast1() { this.showToast('top') },
        showToast2() { this.showToast('middle') },
        showToast3() { this.showToast('bottom') }
    },

})

