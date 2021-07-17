import { createLocalVue, mount } from '@vue/test-utils'
import Formulate from '@braid/vue-formulate'
import {options, default as checkbox} from '@/extends/checkbox.js'

describe('checkbox', () => {
  it('test help component default position', () => {
    const localVue = createLocalVue()
    localVue.use(Formulate)
    const wrapper = mount(Formulate.options.components.FormulateInput, {
      localVue,
      propsData: {
        type: 'checkbox',
        label:'姓名',
        help: '帮助信息'
      }
    })
    expect(wrapper.find('.formulate-input-element-decorator + .formulate-input-help').exists()).toBe(false)
  })
  it('test help Component position', () => {
    const localVue = createLocalVue()
    localVue.use(Formulate, options)
    const wrapper = mount(Formulate.options.components.FormulateInput, {
      localVue,
      propsData: {
        type: 'checkbox',
        label:'姓名',
        help: '帮助信息'
      }
    })
    expect(wrapper.find('.formulate-input-element-decorator + .formulate-input-help').exists()).toBe(true)
  })

  it('test checkbox extend', ()=>{
    const instance = { extend: jest.fn() }
    checkbox(instance)
    expect(instance.extend.mock.calls.length).toBe(1)
  })
})
