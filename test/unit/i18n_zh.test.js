import {options} from '@/i18n/zh.js'

test('chinese i18n', ()=>{
  expect(options.locale).toEqual('zh');
  expect(options.locales).toHaveProperty('zh')
  expect(Object.keys(options.locales.zh).length).toEqual(21);
})