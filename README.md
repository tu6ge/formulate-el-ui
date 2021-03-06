<p align="center"><img width="100" src="./public/logo.png" alt="VueFormulate"></p>

# formulate-el-ui

<a href="https://www.npmjs.com/package/formulate-el-ui"><img alt="npm" src="https://img.shields.io/npm/v/formulate-el-ui"></a>
<a href="https://github.com/tu6ge/formulate-el-ui"><img alt="GitHub" src="https://img.shields.io/github/license/tu6ge/formulate-el-ui"></a>
![](https://img.shields.io/npm/dm/formulate-el-ui)

本项目为 `vueformulate` 项目加上了 `element-ui` 皮肤，可以让你在 `element-ui` 项目中使用 `vueformulate` 时保持风格统一

> 关于 element-ui 中的 `el-form` 和 `vueformulate` 包的功能比较，我写了一篇 [文章](https://learnku.com/vuejs/t/58162) ,供大家参考借鉴

## 语义化版本

本项目遵循 [语义化版本 2.0](https://semver.org/lang/zh-CN/) 

## 在安装之前，需要安装如下 npm 包

- @braid/vue-formulate [中文文档](https://tu6ge.github.io/vueformulate.com/zh/)
- element-ui

## 安装

```
yarn add formulate-el-ui
```

## 快速体验

[点击预览](https://tu6ge.github.io/formulate-el-ui/) 

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

如果需要使用行内表单（所有的表单域在一行内展示），则可以在 `FormulateForm` 组件上加一个 `el-formulate__form-inline` 样式即可：

```
<FormulateForm
  :form-class="['el-formulate__form-inline']"
>
  <FormulateInput
    label="个性签名"
    type="el-input"
    value="你好，Element-UI"
  />
</FormulateForm>
```
> 要了解更多，请访问 [`form-class` 的文档](https://tu6ge.github.io/vueformulate.com/zh/guide/theming/customizing-classes/)

> 注意：使用行内表单时，展示错误信息使用了 `position:absoulte`, 如果字段中的验证规则有多条错误信息，会导致展示错乱，所以，需要在验证
> 中使用 [`bail` 规则](https://tu6ge.github.io/vueformulate.com/zh/guide/validation/#%E5%81%9C%E6%AD%A2%E9%AA%8C%E8%AF%81) ，
> 这样错误信息就会只展示一条。


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
| Input | `el-input` | autosize, clearable, maxlength, minlength,rows, disabled <br> showPassword, showWordLimit, elType (值为`textarea` 时，是多行文本框) |
| Cascader | `el-cascader` | beforeFilter, clearable, collapseTags, debounce,<br> disabled, filterMethod, elLabel, options, placeholder, popperClass,<br> props, separator, showAllLevels, size, elValue |
| ColorPicker 颜色选择器 | `el-color-picker` | colorFormat,predefine,showAlpha |
| InputNumber | `el-input-number` | min,max,step,stepStrictly,precision,disabled |
| Rate | `el-rate` | allowHalf,colors,disabledVoidColor,disabledVoidIconClass<br>,highThreshold,iconClasses,max,lowThreshold,showScore,showText,<br>texts,testColor,voidColor,voidIconClass |
| Select | `el-select` | allowCreate,clearable,collapseTags,filterable, disabled,multiple |
| Slider | `el-slider` | formatTooltip,min,marks,max,scoreTemplate,<br>showTooltip,step,showStops,showInput,showInputControls,<br>range,vertical,height |
| Switch | `el-switch` | activeText,inactiveText,activeColor,inactiveColor, disabled |

### 必填字段 +v0.2.5

element-ui 的 `el-form-item` 组件，当加上了 `required` prop 后，会显示一个红色 `*` 提示用户该字段必填，现在本项目也已支持，只要是
`FormulateInput` 的验证规则中包含 `required` ,则会默认加上这个红色 `*` ，如果不想显示，则可以在 `FormulateInput` 上设置 `requiredTip` prop 为 `false`,即可：

```
<FormulateInput :required-tip="false" />
```

## 已知问题

- 项目维护者正在专注于做 vue3 的兼容，目前没有时间处理 issue 以及 pr，虽然这样，但是整个项目有基于 vue2 的完整的单元测试，可以放心使用。
- 在编辑表单中，如果有图片表单域，调用接口后，再把图片数据赋值给表单后，表单不会渲染出来图片，临时处理方案是，可以在 `formulate-form` 组件上加一个 `v-if="loadForm"` `loadForm` 默认值设置为 `false` ,待接口返回数据后，然后再置位 `true`, 即可达到渲染图片的目的

## 文档

查看 [vueformulate 文档](https://vueformulatecom-braid.vercel.app/zh)

# License

MIT

# VS Code 代码提示插件

已推出辅助开发的 vscode 插件，可以点击 [formulate-el-helper](https://marketplace.visualstudio.com/items?itemName=tu6ge.formulate-el-helper) 安装

[![vscode](https://vsmarketplacebadge.apphb.com/version-short/tu6ge.formulate-el-helper.svg)](https://marketplace.visualstudio.com/items?itemName=tu6ge.formulate-el-helper)
[![](https://vsmarketplacebadge.apphb.com/installs/tu6ge.formulate-el-helper.svg
)](https://marketplace.visualstudio.com/items?itemName=tu6ge.formulate-el-helper)
[![](https://vsmarketplacebadge.apphb.com/downloads/tu6ge.formulate-el-helper.svg
)](https://marketplace.visualstudio.com/items?itemName=tu6ge.formulate-el-helper)
[![](https://vsmarketplacebadge.apphb.com/rating-star/tu6ge.formulate-el-helper.svg
)](https://marketplace.visualstudio.com/items?itemName=tu6ge.formulate-el-helper)

# 星星

如果你感觉好用，就给项目打个星星吧 ^_^

# 相关推荐

- [**Vue Formulate Helper**](https://marketplace.visualstudio.com/items?itemName=tu6ge.vueformulate-helper) : Vue Formulate 的 VS Code 代码提示插件
