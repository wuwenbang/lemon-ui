const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'

Vue.component('lm-tabs', Tabs)
Vue.component('lm-tabs-head', TabsHead)
Vue.component('lm-tabs-body', TabsBody)
Vue.component('lm-tabs-item', TabsItem)
Vue.component('lm-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {

    it('存在.', () => {
        expect(Tabs).to.exist
    })

    it('接受 selected 属性', (done) => {

        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
      <lm-tabs selected="finance">
        <lm-tabs-head>
          <lm-tabs-item name="woman"> 美女 </lm-tabs-item>
          <lm-tabs-item name="finance"> 财经 </lm-tabs-item>
          <lm-tabs-item name="sports"> 体育 </lm-tabs-item>
        </lm-tabs-head>
        <lm-tabs-body>
          <lm-tabs-pane name="woman"> 美女相关资讯 </lm-tabs-pane>
          <lm-tabs-pane name="finance"> 财经相关资讯 </lm-tabs-pane>
          <lm-tabs-pane name="sports"> 体育相关资讯 </lm-tabs-pane>
        </lm-tabs-body>
      </lm-tabs>
    `
        let vm = new Vue({
            el: div
        })
        vm.$nextTick(() => {
            let x = vm.$el.querySelector(`.tabs-item[data-name="finance"]`)
            expect(x.classList.contains('active')).to.be.true
            done()
        })
    })

})