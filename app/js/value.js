// Number.EPSILON的实质是一个可以接受的最小误差范围。
function withinErrorMargin (left, right) {
  return Math.abs(left - right) < Number.EPSILON * Math.pow(2, 2);
}
function checkError(){
  console.log(0.1 + 0.2 === 0.3) // false
  console.log(withinErrorMargin(0.1 + 0.2, 0.3)) // true
  console.log(1.1 + 1.3 === 2.4) // false
  console.log(withinErrorMargin(1.1 + 1.3, 2.4)) // true
}
// 下面的函数可以同时验证两个运算数和运算结果。
function trusty (left, right, result) {
  if (
    Number.isSafeInteger(left) &&
    Number.isSafeInteger(right) &&
    Number.isSafeInteger(result)
  ) {
    return result;
  }
  throw new RangeError('Operation cannot be trusted!');
}
function checkInteger(){
  console.log(trusty(1, 2, 3));    // 3
  console.log(9007199254740993 === Number.MAX_SAFE_INTEGER);   //false
  console.log(9007199254740991 === Number.MAX_SAFE_INTEGER);   //true
  
  console.log(trusty(9007199254740993, 990, 9007199254740993 - 990))
  // RangeError: Operation cannot be trusted!
}
function math(){
  // 1.Math.trunc方法用于去除一个数的小数部分，返回整数部分，对于非数值，Math.trunc内部使用Number方法将其先转为数值，对于空值和无法截取整数的值，返回NaN。
  console.log('*************Math.trunc方法****************');
  console.log(Math.trunc());// NaN
  console.log(Math.trunc(''));// 0
  // 2.console.log(Math.sign方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值。如果参数是非数值，会自动转为数值。对于那些无法转为数值的值，会返回NaN。
  console.log('*************Math.sign方法****************');
  console.log(Math.sign(''))  // 0
  console.log(Math.sign(true))  // +1
  console.log(Math.sign(false))  // 0
  console.log(Math.sign(null))  // 0
  console.log(Math.sign('9'))  // +1
  console.log(Math.sign('foo'))  // NaN
  console.log(Math.sign())  // NaN
  console.log(Math.sign(undefined))  // NaN
  // 3.Math.cbrt方法用于计算一个数的立方根。
  console.log('*************Math.cbrt方法****************');
  console.log(Math.cbrt('8')) // 2
  console.log(Math.cbrt('hello')) // NaN
  // 4.Math.clz32方法返回一个数的32位无符号整数形式有多少个前导0。
  console.log('*************Math.clz32方法****************');
  console.log(Math.clz32(1)) // 31
  console.log(Math.clz32(1000)) // 22
  console.log(Math.clz32(0b01000000000000000000000000000000)) // 1
  console.log(Math.clz32(3.2)) // 30
  console.log(Math.clz32()) // 32
  console.log(Math.clz32(NaN)) // 32
  console.log(Math.clz32(Infinity)) // 32
  console.log(Math.clz32(null)) // 32
  console.log(Math.clz32('foo')) // 32
  console.log(Math.clz32([])) // 32
  console.log(Math.clz32({})) // 32
  console.log(Math.clz32(true)) // 31
  // 5.Math.imul方法返回两个数以32位带符号整数形式相乘的结果，返回的也是一个32位的带符号整数。
  console.log('*************Math.imul方法****************');
  console.log(Math.imul(2, 4));   // 8
  console.log(Number(0x7fffffff));
  console.log(Math.imul(0x7fffffff, 0x7fffffff))        // 1
  // 6.Math.hypot方法返回所有参数的平方和的平方根。
  console.log('*************Math.hypot方法****************');
  console.log(Math.hypot(3, 4));        // 5
  console.log(Math.hypot(3, 4, 5));     // 7.0710678118654755
  console.log(Math.hypot());            // 0
  console.log(Math.hypot(NaN));         // NaN
  console.log(Math.hypot(3, 4, 'foo')); // NaN
  console.log(Math.hypot(3, 4, '5'));   // 7.0710678118654755
  console.log(Math.hypot(-3));          // 3
}
