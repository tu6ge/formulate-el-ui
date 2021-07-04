import {default as zh, options as zhOptions} from './i18n/zh.js'
import {default as CheckboxHelp, options as CheckboxHelpOptions} from './extends/checkbox.js'
import {default as rules, options as rulesOptions} from './extends/rules.js'
import {default as inputs, options as inputsOptions} from './inputs/'

const themeOptions = {
  classes: {
    outer: 'el-formulate-input'
  }
}

const theme = function (instance) {
  instance.extend(themeOptions)
}

export {
  theme,
  CheckboxHelp,
  rules,
  inputs,
  zh,
}

export default function(instance){
  let locales_zh = Object.assign(rulesOptions.locales.zh, zhOptions.locales.zh)
  let library = Object.assign(CheckboxHelpOptions.library, inputsOptions.library)

  let options = {}
  options = Object.assign(options, themeOptions)
  options = Object.assign(options, CheckboxHelpOptions)
  options = Object.assign(options, rulesOptions)
  options = Object.assign(options, inputsOptions)
  options = Object.assign(options, zhOptions)
  options.locales = {zh:locales_zh};
  options.library = library

  instance.extend(options)
}