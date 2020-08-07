const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
    it('存在.', () => {
        expect(Row).to.exist
    })

    it('接收 gutter 属性', (done) => {
        Vue.component('lm-row', Row)
        Vue.component('lm-col', Col)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <lm-row gutter="20">
            <lm-col span="8">1</lm-col>
            <lm-col span="16">2</lm-col>
        </lm-row>
        `
        const vm = new Vue({
            el: div
        })
        console.log(vm.$el.outerHTML)
        setTimeout(() => {
            const row = vm.$el.querySelector('.row')
            expect(getComputedStyle(row).marginLeft).to.eq('-10px')
            expect(getComputedStyle(row).marginRight).to.eq('-10px')
            const cols = vm.$el.querySelectorAll('.col')
            expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
            expect(getComputedStyle(cols[1]).paddingLeft).to.eq('10px')
            done()
        }, 0);
    })


})