import { mount } from '@vue/test-utils'
import Vue from 'vue'
import Formulate from '@braid/vue-formulate'
import FeLabel from '@/slots/FeLabel.vue'

const options = {
  components:{
    FeLabel,
  },
  slotComponents: {
    label: 'FeLabel'
  },
  slotProps: {
    label: ['requiredTip']
  }
}
Vue.use(Formulate, options)

const resetInstance = () => {
  Formulate.install(Vue, options)
}

describe('FeLabel', () => {
  it('sets unknown classification if not in library', () => {
    const wrapper = mount(FeLabel, { propsData: {
      type: 'foobar',
    } })
    expect(wrapper.vm.classification).toBe('unknown')
  })
})