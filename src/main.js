import Vue from 'vue'
import VueFormulate from '@braid/vue-formulate'
import FormulateSpecimens from './components/FormulateSpecimens.vue'

//import formulateElementUI from './index.js'
import {
  theme,
  CheckboxHelp,
  rules,
  inputs,
  zh
} from '../dist/formulate-el-ui.umd.js'
// } from './index.js'

Vue.config.productionTip = false

Vue.use(VueFormulate, {
  // plugins: [formulateElementUI]
  plugins: [
    theme,
    CheckboxHelp,
    rules,
    inputs,
    zh
  ]
})

new Vue({
  render: h => h(FormulateSpecimens),
}).$mount('#app')
