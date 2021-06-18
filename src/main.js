import Vue from 'vue'
// import App from './App.vue'
import VueFormulate from '@braid/vue-formulate'
import FormulateSpecimens from './components/FormulateSpecimens.vue'
import zh from './i18n/zh.js'
import CheckboxHelp from './extends/checkbox.js'

Vue.config.productionTip = false

const ElThem = function (instance) {
  instance.extend({
    classes: {
      outer: 'el-formulate-input'
    }
  })
}

Vue.use(VueFormulate, {
  plugins: [zh, ElThem, CheckboxHelp],
  locale: 'zh'
})

new Vue({
  render: h => h(FormulateSpecimens),
}).$mount('#app')
