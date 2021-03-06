

export const options = {
  components:{
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
    'el-color-picker': {
      classification: 'text',
      component: 'FeColorPicker',
      slotProps: {
        component: [
          'colorFormat',
          'predefine',
          'showAlpha',
        ]
      }
    },
    'el-input': {
      classification: 'text',
      component: 'FeInput',
      slotProps: {
        component: [
          'elType',

          'autosize',
          'clearable',
          'maxlength',
          'minlength',
          'rows',
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
    },
    'el-rate': {
      classification: 'rate',
      component: 'FeRate',
      slotProps: {
        component: [
          'allowHalf',
          'colors',
          'disabledVoidColor',
          'disabledVoidIconClass',
          'highThreshold',
          'iconClasses',
          'max',
          'lowThreshold',
          'showScore',
          'showText',
          'texts',
          'testColor',
          'voidColor',
          'voidIconClass'
        ]
      }
    },
    'el-switch': {
      classification: 'switch',
      component: 'FeSwitch',
      slotProps: {
        component: [
          'activeText',
          'inactiveText',
          'activeColor',
          'inactiveColor'
        ]
      }
    },
    'el-slider': {
      classification: 'slider',
      component: 'FeSlider',
      slotProps: {
        component: [
          'formatTooltip',
          'min',
          'marks',
          'max',
          'scoreTemplate',
          'showTooltip',
          'step',
          'showStops',
          'showInput',
          'showInputControls',
          'range',
          'vertical',
          'height',
        ]
      }
    }
  },
  slotComponents: {
    label: 'FeLabel'
  },
  slotProps: {
    label: ['requiredTip']
  }
}

