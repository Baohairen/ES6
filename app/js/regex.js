// 使用u修饰符后，所有量词都会正确识别码点大于0xFFFF的 Unicode 字符。
/*console.log(/a{2}/.test('aa')) // true
console.log(/a{2}/u.test('aa')) // true
console.log(/𠮷{2}/.test('𠮷𠮷')) // false
console.log(/𠮷{2}/u.test('𠮷𠮷')) // true*/

function codePointLength(text) {
  var result = text.match(/[\s\S]/gu);
  return result ? result.length : 0;
}
function clickme9(){
  var s = '𠮷𠮷';
  console.log('"'+s+'"字符串通过原生的方法返回的长度为：'+s.length); // 4
  console.log('"'+s+'"字符串通过识别Unicode码的方法返回正确的长度为：'+codePointLength(s)); // 2
}
