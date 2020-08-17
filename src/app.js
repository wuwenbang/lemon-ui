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
import Toast from './toastPlugin'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'

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
Vue.component('lm-popover', Popover)
Vue.component('lm-collapse', Collapse)
Vue.component('lm-collapse-item', CollapseItem)

Vue.use(Toast)


new Vue({
    el: '#app',
    data: {
        load: false,
        message: 'hello',
        selectedTab: 'tab1',
        selected: ['1']
    },
    methods: {
        onClick() {
            this.$toast("hello")
        }
    },

})

