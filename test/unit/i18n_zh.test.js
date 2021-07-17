import {options,default as zh} from '@/i18n/zh.js'

import {en} from '@braid/vue-formulate-i18n'

describe('chinese i18n', () => {
  it('active locale is zh', ()=>{
    expect(options.locale).toEqual('zh');
    expect(options.locales).toHaveProperty('zh')
    expect(Object.keys(options.locales.zh).length).toEqual(21);
  })

  it('includes all the validation results that english does', () => {
    const instance = { extend: jest.fn() }
    const locale = {en,zh}
    locale.en(instance)
    locale.zh(instance)
    //console.log(instance.extend.mock.calls[0][0])
    const englishMessages = Object.keys(instance.extend.mock.calls[0][0].locales.en)
    const localizedMessages = Object.keys(instance.extend.mock.calls[1][0].locales.zh)
    expect(englishMessages).toEqual(localizedMessages)
  })
})