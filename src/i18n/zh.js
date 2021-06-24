/**
 * Here we can import additional helper functions to assist in formatting our
 * language. Feel free to add additional helper methods to libs/formats if it
 * assists in creating good validation messages for your locale.
 */

/**
 * This is the ISO 639-1 and (optionally) ISO 639-2 language "tag".
 * Some valid examples:
 * zh
 * zh-CN
 * zh-HK
 * en
 * en-GB
 */
const locale = 'zh'

/**
 * This is an object of functions that each produce valid responses. There's no
 * need for these to be 1-1 with english, feel free to change the wording or
 * use/not use any of the variables available in the object or the
 * arguments for the message to make the most sense in your language and culture.
 *
 * The validation context object includes the following properties:
 * {
 *   args        // Array of rule arguments: between:5,10 (args are ['5', '10'])
 *   name:       // The validation name to be used
 *   value:      // The value of the field (do not mutate!),
 *   vm: the     // FormulateInput instance this belongs to,
 *   formValues: // If wrapped in a FormulateForm, the value of other form fields.
 * }
 */
const localizedValidationMessages = {
  /**
   * Valid accepted value.
   */
  accepted: function ({ vm }) {
    return `请同意${vm.context.label}。`
  },

  /**
   * The date is not after.
   */
  after: function ({ vm, args }) {
    if (Array.isArray(args) && args.length) {
      return `${vm.context.label} 必须在 ${args[0]} 之后。`
    }
    return `${vm.context.label} 必须是以后的日期。`
  },

  /**
   * The value is not a letter.
   */
  alpha: function ({ vm }) {
    return `${vm.context.label} 只能包含字母。`
  },

  /**
   * Rule: checks if the value is alpha numeric
   */
  alphanumeric: function ({ vm }) {
    return `${vm.context.label} 只能包含字母或数字。`
  },

  /**
   * The date is not before.
   */
  before: function ({ vm, args }) {
    if (Array.isArray(args) && args.length) {
      return `${vm.context.label} 必须在 ${args[0]} 之前`
    }
    return `${vm.context.label} 必须是以前的日期。`
  },

  /**
   * The value is not between two numbers or lengths
   */
  between: function ({ vm, value, args }) {
    const force = Array.isArray(args) && args[2] ? args[2] : false
    if ((!isNaN(value) && force !== 'length') || force === 'value') {
      return `${vm.context.label} 必须在 ${args[0]} 和 ${args[1]} 之间。`
    }
    return `${vm.context.label} 必须在 ${args[0]} 和 ${args[1]} 字符长度之间。`
  },

  /**
   * The confirmation field does not match
   */
  confirm: function ({ vm }) {
    return `${vm.context.label} 不匹配。`
  },

  /**
   * Is not a valid date.
   */
  date: function ({ vm, args }) {
    if (Array.isArray(args) && args.length) {
      return `${vm.context.label} 日期无效，请使用 ${args[0]} 格式。`
    }
    return `${vm.context.label} 日期无效。`
  },

  /**
   * The default render method for error messages.
   */
  default: function () {
    return `此输入无效。`
  },

  /**
   * Is not a valid email address.
   */
  email: function ({ value }) {
    if (!value) {
      return '请输入有效的电子邮箱地址。'
    }
    return `“${value}” 不是一个有效的电子邮箱地址。`
  },

  /**
   * Ends with specified value
   */
  endsWith: function ({ value }) {
    if (!value) {
      return `无效的结尾值。`
    }
    return `“${value}” 包含无效的结尾值。`
  },

  /**
   * Value is an allowed value.
   */
  in: function ({ vm, value }) {
    if (typeof value === 'string' && value) {
      return `“${value}” 是 ${vm.context.label} 不允许的值。`
    }
    return `${vm.context.label} 包含不允许的值。`
  },

  /**
   * Value is not a match.
   */
  matches: function ({ vm }) {
    return `${vm.context.label} 包含不允许的值。`
  },

  /**
   * The maximum value allowed.
   */
  max: function ({ vm, value, args }) {
    if (Array.isArray(value)) {
      return `您最多可有 ${args[0]} 个 ${vm.context.label}。`
    }
    const force = Array.isArray(args) && args[1] ? args[1] : false
    if ((!isNaN(value) && force !== 'length') || force === 'value') {
      return `${vm.context.label} 必须小于或等于 ${args[0]}.`
    }
    return `${vm.context.label} 必须小于或等于 ${args[0]} 字符长度.`
  },

  /**
   * The (field-level) error message for mime errors.
   */
  mime: function ({ vm, args }) {
    return `${vm.context.label} 格式必须是: ${args[0] || '无允许文件格式'}`
  },

  /**
   * The maximum value allowed.
   */
  min: function ({ vm, value, args }) {
    if (Array.isArray(value)) {
      return `您需要最少 ${args[0]} 个 ${vm.context.label}.`
    }
    const force = Array.isArray(args) && args[1] ? args[1] : false
    if ((!isNaN(value) && force !== 'length') || force === 'value') {
      return `${vm.context.label} 最少是 ${args[0]}.`
    }
    return `${vm.context.label} 最少 ${args[0]} 字符长度。`
  },

  /**
   * The field is not an allowed value
   */
  not: function ({ vm, value }) {
    return `“${value}” 是 ${vm.context.label} 不被允许的值。`
  },

  /**
   * The field is not a number
   */
  number: function ({ vm }) {
    return `${vm.context.label} 必须是数字。`
  },

  /**
   * Required field.
   */
  required: function ({ vm }) {
    return `${vm.context.label} 是必填项。`
  },

  /**
   * Starts with specified value
   */
  startsWith: function ({ value }) {
    if (!value) {
      return `无效的起始值`
    }
    return `“${value}” 包含无效的起始值`
  },

  /**
   * Value is not a url.
   */
  url: function () {
    return `请输入正确的网址。`
  }
}

/**
 * This creates a vue-formulate plugin that can be imported and used on each
 * project.
 */
export default function (instance) {
  instance.extend({
    locales: {
      [locale]: localizedValidationMessages
    },
    locale: locale,
  })
}
