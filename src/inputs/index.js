import Vue from 'vue'

import FeCascader from './Cascader.vue'
import FeInput from './Input.vue'
import FePrivateFormulateInputFile from './FormulateInputFile.vue'

Vue.component('FeCascader', FeCascader)
Vue.component('FeInput', FeInput)
Vue.component('FePrivateFormulateInputFile', FePrivateFormulateInputFile)

export default function (instance) {
  instance.extend({
    library: {
      'el-cascader': {
        classification: 'text',
        component: 'FeCascader',
        slotProps: {
          component: ['clearable', 'options', 'props', 'size', 'placeholder', 'disabled', 'showAllLevels', 'collapseTags', 'separator', 'filterMethod', 'debounce', 'beforeFilter', 'popperClass']
        }
      },
      'el-input': {
        classification: 'text',
        component: 'FeInput',
        slotProps: {
          component: ['clearable', 'showWordLimit', 'maxlength', 'minlength']
        }
      },
      image: {
        component: 'FePrivateFormulateInputFile'
      },
      file: {
        component: 'FePrivateFormulateInputFile'
      }
    }
  })
}