import FeCascader from './Cascader.vue'
import FeColorPicker from './ColorPicker.vue'
import FeInput from './Input.vue'
import FeInputNumber from './InputNumber.vue'
import FeRate from './Rate.vue'
import FeSelect from './Select.vue'
import FeSwitch from './Switch.vue'
import FeSlider from './Slider.vue'
import FeLabel from '../slots/FeLabel.vue'

export const options = {
  components:{
    FeCascader,
    FeColorPicker,
    FeInput,
    FeInputNumber,
    FeLabel,
    FeRate,
    FeSelect,
    FeSwitch,
    FeSlider
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
          'elLabel',
          "options",
          "placeholder",
          "popperClass",
          "props",
          "separator",
          "showAllLevels",
          "size",
          'elValue'
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
          'disabled',
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
          'disabled',
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
    'el-select': {
      classification: 'select',
      component: 'FeSelect',
      slotProps: {
        component: [
          'allowCreate',
          'clearable',
          'collapseTags',
          'disabled',
          'multiple',
        ]
      }
    },
    'el-switch': {
      classification: 'switch',
      component: 'FeSwitch',
      slotProps: {
        component: [
          'disabled',
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

export default function (instance) {
  instance.extend(options)
}
