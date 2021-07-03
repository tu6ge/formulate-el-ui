import FeCascader from './Cascader.vue'
import FeInput from './Input.vue'
import FeInputNumber from './InputNumber.vue'

export default function (instance) {
  instance.extend({
    components:{
      FeCascader,
      FeInput,
      FeInputNumber,
    },
    library: {
      'el-cascader': {
        classification: 'text',
        component: 'FeCascader',
        slotProps: {
          component: [
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
          ]
        }
      },
      'el-input': {
        classification: 'text',
        component: 'FeInput',
        slotProps: {
          component: [
            'elType',

            'clearable',
            'maxlength',
            'minlength',
            'showPassword',
            'showWordLimit',
          ]
        }
      },
      'el-input-number': {
        classification: 'text',
        component: 'FeInputNumber',
        slotProps: {
          component: [
            'min',
            'max',
            'step',
            'stepStrictly',
            'precision',
          ]
        }
      }
    }
  })
}
