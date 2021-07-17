import {options,default as rules} from '@/extends/rules.js'

describe('test rule', () => {
  it('mobile rules', ()=>{
    expect(options.rules.mobile({value:13911112222})).toBe(true);
    expect(options.rules.mobile({value:'13911112222'})).toBe(true);
    expect(options.rules.mobile({value:13911112})).toBe(false);
    expect(options.rules.mobile({value:23911112222})).toBe(false);
    expect(options.rules.mobile({value:'00000000000'})).toBe(false);
    expect(options.rules.mobile({value:'1391111222a'})).toBe(false);
  })

  it('idcard rules', ()=>{
    expect(options.rules.idcard({value:'370211111111111113'})).toBe(true);
    expect(options.rules.idcard({value:'37021111111111113X'})).toBe(true);
    expect(options.rules.idcard({value:'37021111111111113x'})).toBe(true);
    expect(options.rules.idcard({value:'370211111111111'})).toBe(false);
    expect(options.rules.idcard({value:'370211111111111131'})).toBe(false);
    expect(options.rules.idcard({value:'37021111111111113a'})).toBe(false);
    expect(options.rules.idcard({value:'aaaaaaaaaaaaaaaaaa'})).toBe(false);
  })
  
  it('mobile message', ()=>{
    expect(options.locales.zh.mobile({value:'bar'})).toBe('bar 不是一个正确的手机号');
  })

  it('idcard message', ()=>{
    expect(options.locales.zh.idcard({value:'bar'})).toBe('身份证号码格式错误');
  })

  it('extend', ()=>{
    const instance = { extend: jest.fn() }
    rules(instance)
    expect(instance.extend.mock.calls.length).toBe(1)
  })
})
