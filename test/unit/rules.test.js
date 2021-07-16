import {options} from '@/extends/rules.js'

test('mobile rules', ()=>{
  expect(options.rules.mobile({value:13911112222})).toBe(true);
  expect(options.rules.mobile({value:'13911112222'})).toBe(true);
  expect(options.rules.mobile({value:13911112})).toBe(false);
  expect(options.rules.mobile({value:23911112222})).toBe(false);
  expect(options.rules.mobile({value:'00000000000'})).toBe(false);
  expect(options.rules.mobile({value:'1391111222a'})).toBe(false);
})

test('idcard rules', ()=>{
  expect(options.rules.idcard({value:'370211111111111113'})).toBe(true);
  expect(options.rules.idcard({value:'37021111111111113X'})).toBe(true);
  expect(options.rules.idcard({value:'37021111111111113x'})).toBe(true);
  expect(options.rules.idcard({value:'370211111111111'})).toBe(false);
  expect(options.rules.idcard({value:'370211111111111131'})).toBe(false);
  expect(options.rules.idcard({value:'37021111111111113a'})).toBe(false);
  expect(options.rules.idcard({value:'aaaaaaaaaaaaaaaaaa'})).toBe(false);
})