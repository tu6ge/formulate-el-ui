import MyInput from './Input.vue'
import Vue from 'vue'

Vue.component('MyInput', MyInput)

export default function (instance) {
  instance.extend({
    library: {
      'el-input': {
        classification: 'text',
        component: 'MyInput',
        slotProps: {
          component: ['clearable', 'showWordLimit', 'maxlength', 'minlength']
        }
      }
    }
  })
}