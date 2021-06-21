# formulate-el-ui

本项目为 `vueformulate` 项目加上了 `element-ui` 皮肤，可以让你在 `element-ui` 项目中使用 `vueformulate` 时保持风格统一

## 语义化版本

本项目遵循 [语义化版本 2.0](https://semver.org/lang/zh-CN/) 

## 在安装之前，需要安装如下 npm 包

- @braid/vue-formulate
- element-ui

## 安装

```
yarn add formulate-el-ui
```

## 使用

在你的 `main.js` 文件的适当位置加上如下代码：
```
import 'formulate-el-ui/src/assets/scss/element-ui.scss';
import CheckboxHelp from 'formulate-el-ui/src/extends/checkbox.js'

Vue.use(VueFormulate, {
  classes: {
    outer: 'el-formulate-input'
  },
  plugins: [CheckboxHelp] // CheckboxHelp 用于解决 checkbox 组件中 help 信息展示位置错误的问题
})
```

### 文档

查看 [vueformulate 文档](https://vueformulate.com/).
