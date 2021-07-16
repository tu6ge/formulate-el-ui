const mobile = function ({ value }) {
  return /^1[0-9]{10}$/.test(value)
}

const idcard = function ({ value }) {
  let reg = /^\d{17}(\d|X|x)$/;
  if(reg.test(value) === false)
  {
    return false;
  }

  let valnum
  let arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2)
  let arrCh = new Array('1', '0', 'x', '9', '8', '7', '6', '5', '4', '3', '2')
  let nTemp = 0, i
  for (i = 0; i < 17; i++) {
    nTemp += value.substr(i, 1) * arrInt[i]
  }
  valnum = arrCh[nTemp % 11]
  if (valnum != value.substr(17, 1).toLocaleLowerCase()) {
    return false
  }

  return true
}

export const options = {
  rules: {
    mobile,
    idcard
  },
  locales: {
    zh: {
      mobile({value}) {
        return `${value} 不是一个正确的手机号`
      },
      idcard() {
        return `身份证号码格式错误`
      }
    }
  }
}

export default function (instance) {
  instance.extend(options)
}