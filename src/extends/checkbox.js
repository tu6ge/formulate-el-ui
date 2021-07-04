export const options = {
  library: {
    checkbox: {
      slotComponents: {
        help: 'div',
        suffix: 'FormulateHelp'
      }
    }
  }
}

export default function (instance) {
  instance.extend(options)
}