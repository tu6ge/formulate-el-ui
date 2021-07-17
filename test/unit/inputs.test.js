import { createLocalVue, mount } from '@vue/test-utils'
import Formulate from '@braid/vue-formulate'
import {options} from '@/inputs/index.js'
import ElementUI from 'element-ui';
import {
  createTest,
  createVue,
  destroyVM,
  waitImmediate,
  wait,
  triggerEvent
} from '../util';

const localVue = createLocalVue()
localVue.use(Formulate, options)
localVue.use(ElementUI)

const cascaderOptions = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake'
    }, {
      value: 'binjiang',
      label: 'Bin Jiang'
    }]
  }, {
    value: 'ningbo',
    label: 'NingBo',
    children: [{
      value: 'jiangbei',
      label: 'Jiang Bei'
    }, {
      value: 'jiangdong',
      label: 'Jiang Dong',
      disabled: true
    }]
  }]
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  disabled: true,
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men'
    }]
  }]
}];

const getMenus = el => el.querySelectorAll('.el-cascader-menu');
const getOptions = (el, menuIndex) => getMenus(el)[menuIndex].querySelectorAll('.el-cascader-node');
const selectedValue = ['zhejiang', 'hangzhou', 'xihu'];
const getCloseButton = el => el.querySelectorAll('i.el-tag__close');

describe('Input Components', () => {
  it('test cascader', () => {
    const wrapper = mount(Formulate.options.components.FormulateInput, {
      localVue,
      propsData: {
        type: 'el-cascader',
        label:'姓名'
      }
    })
    expect(wrapper.vm.classification).toEqual('text')
    expect(wrapper.vm.component).toEqual('FeCascader')
    expect(Object.keys(wrapper.vm.slotProps.component)).toEqual([
      "beforeFilter",
      "clearable",
      "collapseTags",
      "debounce",
      "disabled",
      "filterMethod",
      "options",
      "placeholder",
      "popperClass",
      "props",
      "separator",
      "showAllLevels",
      "size"
    ])

    expect(wrapper.find('.formulate-input-element').attributes('data-type')).toBe('el-cascader')
    expect(wrapper.find('.formulate-input').attributes('data-classification')).toBe('text')
  })

  it('test cascader class', () => {
    const wrapper = mount(Formulate.options.components.FormulateInput, {
      localVue,
      propsData: {
        type: 'el-cascader',
        label:'姓名',
        elementClass: ['bar-class']
      }
    })

    expect(wrapper.find('.formulate-input-element').classes('bar-class')).toBe(true)
  })

  it('toggle dropdown visible', async() => {
    const vm = mount(Formulate.options.components.FormulateInput, {
      localVue,
      propsData: {
        type: 'el-cascader',
        label:'姓名',
      }
    })
    // const inside_cascader = vm.findComponent({ref:'popper'})
    // console.log(inside_cascader)

    // expect(inside_cascader.$refs.popper.style.display).to.equal('none');
    // inside_cascader.$el.click();
    // await waitImmediate();
    // expect(inside_cascader.$refs.popper.style.display).to.includes('');
    // inside_cascader.$el.click();
    // await wait(500);
    // expect(inside_cascader.$refs.popper.style.display).to.includes('none');
  });
})