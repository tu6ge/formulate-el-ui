export declare const options:optionsType

interface optionsType {
  components ?: object,
  library ?: library
  [key:string]: any
}

interface library {
  [key:string]: {
    classification : string,
    component: string,
    slotProps?: {
      component: string[]
    }
  }
}
