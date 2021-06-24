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
import formulate_zh from 'formulate-el-ui/src/i18n/zh.js'
import formulate_rules from 'formulate-el-ui/src/extends/rules.js'

Vue.use(VueFormulate, {
  classes: {
    outer: 'el-formulate-input'  // 配合上面引入的样式文件，使用 element-ui 的风格
  },
  plugins: [
    CheckboxHelp,    // CheckboxHelp 用于解决 checkbox 组件中 help 信息展示位置错误的问题
    formulate_zh,    // 中文翻译，验证错误的文字更符合中文习惯
    formulate_rules, // 添加全局的手机号验证器和身份证号验证器
  ] 
})
```

## 已知问题

- 项目维护者正在专注于做 vue3 的兼容，目前没有时间处理 issue 以及 pr
- 在编辑表单中，如果有图片表单域，调用接口后，再把图片数据赋值给表单后，表单不会渲染出来图片，临时处理方案是，可以在 `formulate-form` 组件上加一个 `v-if="loadForm"` `loadForm` 默认值设置为 `false` ,待接口返回数据后，然后再置位 `true`, 即可达到渲染图片的目的

## 文档

查看 [vueformulate 文档](https://vueformulatecom-braid.vercel.app/).
