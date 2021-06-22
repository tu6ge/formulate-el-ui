import FeCascader from './Cascader.vue'
import FeInput from './Input.vue'
import FePrivateFormulateInputFile from './FormulateInputFile.vue'

export default function (instance) {
  instance.extend({
    components:{
      FeCascader,
      FeInput,
      FePrivateFormulateInputFile
    },
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
