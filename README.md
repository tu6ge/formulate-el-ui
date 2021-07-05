<p align="center"><img width="100" src="./public/logo.png" alt="VueFormulate"></p>

# formulate-el-ui

<a href="https://www.npmjs.com/package/formulate-el-ui"><img alt="npm" src="https://img.shields.io/npm/v/formulate-el-ui"></a>
<a href="https://github.com/tu6ge/formulate-el-ui"><img alt="GitHub" src="https://img.shields.io/github/license/tu6ge/formulate-el-ui"></a>

本项目为 `vueformulate` 项目加上了 `element-ui` 皮肤，可以让你在 `element-ui` 项目中使用 `vueformulate` 时保持风格统一

> 关于 element-ui 中的 `el-form` 和 `vueformulate` 包的功能比较，我写了一篇 [文章](https://learnku.com/vuejs/t/58162) ,供大家参考借鉴

## 语义化版本

本项目遵循 [语义化版本 2.0](https://semver.org/lang/zh-CN/) 

## 在安装之前，需要安装如下 npm 包

- @braid/vue-formulate
- element-ui

## 安装

```
yarn add formulate-el-ui
```

## 快速体验

```
git clone git@github.com:tu6ge/formulate-el-ui.git

cd formulate-el-ui

yarn install // or npm i

npm run serve //可以快速体验本项目的一些演示 demo
```

## 使用

### 全局引入

在你的 `main.js` 文件的适当位置加上如下代码：
```
import 'formulate-el-ui/dist/element-ui.min.css';
import formulateElementUI from 'formulate-el-ui'

Vue.use(VueFormulate, {
  plugins: [formulateElementUI]
})
```

### 只使用样式

```
import {
  theme
} from 'formulate-el-ui'
import 'formulate-el-ui/dist/element-ui.min.css';

Vue.use(VueFormulate, {
  plugins: [theme], // 配合上面引入的样式文件，使用 element-ui 的风格
})
```

### 只修正 checkbox 组件的 help 展示位置

```
import {
  CheckboxHelp,
} from 'formulate-el-ui'

Vue.use(VueFormulate, {
  plugins: [CheckboxHelp], // CheckboxHelp 用于解决 checkbox 组件中 help 信息展示位置错误的问题
})
```

### 增加中国手机号和身份证号码验证规则、

包含的规则：
- mobile ：手机号码格式验证
- idcard ：18位身份证格式验证

```
import {
  rules,
} from 'formulate-el-ui'

Vue.use(VueFormulate, {
  plugins: [rules],
})
```

### 只扩展 element-ui 常用的表单域组件

```
import {
  inputs,
} from 'formulate-el-ui'

Vue.use(VueFormulate, {
  plugins: [inputs],
})
```

目前包含的组件

| 组件 | FormulateInput type | 支持的 prop |
|----|----|----|
| Input | `el-input` | autosize, clearable, maxlength, minlength,rows, showPassword, showWordLimit, elType (值为`textarea` 时，是多行文本框) |
| Cascader | `el-cascader` | "beforeFilter", "clearable", "collapseTags", "debounce", "disabled", "filterMethod", "options", "placeholder", "popperClass", "props", "separator", "showAllLevels", "size" |
| ColorPicker 颜色选择器 | `el-color-picker` | 'colorFormat','predefine','showAlpha' |
| InputNumber | `el-input-number` | 'min','max','step','stepStrictly','precision' |
| Rate | `el-rate` | 'allowHalf','colors','disabledVoidColor','disabledVoidIconClass','highThreshold','iconClasses','max','lowThreshold','showScore','showText','texts','testColor','voidColor','voidIconClass' |
| Switch | `el-switch` | 'activeText','inactiveText','activeColor','inactiveColor'
| Slider | `el-slider` | 'formatTooltip','min','marks','max','scoreTemplate','showTooltip','step','showStops','showInput','showInputControls','range','vertical','height' |


## 已知问题

- 项目维护者正在专注于做 vue3 的兼容，目前没有时间处理 issue 以及 pr，虽然这样，但是整个项目有基于 vue2 的完整的单元测试，可以放心使用。
- 在编辑表单中，如果有图片表单域，调用接口后，再把图片数据赋值给表单后，表单不会渲染出来图片，临时处理方案是，可以在 `formulate-form` 组件上加一个 `v-if="loadForm"` `loadForm` 默认值设置为 `false` ,待接口返回数据后，然后再置位 `true`, 即可达到渲染图片的目的

## 文档

查看 [vueformulate 文档](https://vueformulatecom-braid.vercel.app/)，另外，还有 [中文文档](https://tu6ge.github.io/vueformulate.com/zh/)

