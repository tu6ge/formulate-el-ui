import { createLocalVue, mount } from '@vue/test-utils'
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
const localVue = createLocalVue()
localVue.use(Formulate, options)

describe('FeLabel', () => {
  it('test find feLabel Component', () => {
    const wrapper = mount(Formulate.options.components.FormulateInput, {
      localVue,
      propsData: {
        type: 'text',
        label:'姓名'
      }
    })
    expect(wrapper.findComponent(FeLabel).exists()).toBe(true)
  })

  it('test label default class', () => {
    const wrapper = mount(Formulate.options.components.FormulateInput, {
      localVue,
      propsData: {
        type: 'text',
        label:'姓名'
      }
    })
    const label = wrapper.find('.formulate-input-label');
    expect(label.classes()).toEqual(['formulate-input-label', 'formulate-input-label--before'])
  })

  it('test label class when it have requried rule', () => {
    const wrapper = mount(Formulate.options.components.FormulateInput, {
      localVue,
      propsData: {
        type: 'text',
        label:'姓名',
        validation: ['required']
      }
    })
    const label = wrapper.find('.formulate-input-label');
    expect(label.classes()).toEqual(['formulate-input-label', 'formulate-input-label--before', 'formulate-input-label--required'])
  })

  it('test label class when it have requried rule , and force hidden', () => {
    const wrapper = mount(Formulate.options.components.FormulateInput, {
      localVue,
      propsData: {
        type: 'text',
        label:'姓名',
        validation: ['required'],
        requiredTip: false
      }
    })
    const label = wrapper.find('.formulate-input-label');
    expect(label.classes()).toEqual(['formulate-input-label', 'formulate-input-label--before'])
  })
})