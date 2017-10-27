// 使用u修饰符后，所有量词都会正确识别码点大于0xFFFF的 Unicode 字符（识别四个字节的 UTF-16 编码为一个字符）。
  // 1、点字符（.），在正则表达式中，含义是除了换行符以外的任意单个字符。对于码点大于0xFFFF的 Unicode 字符，点字符不能识别，必须加上u修饰符
    // var s = '𠮷';
    // console.log(/^.$/.test(s));//false
    // console.log(/^.$/u.test(s));//true
  // 2、Unicode 字符表示法（大括号表示），在正则表达式中必须加上u修饰符，才能识别当中的大括号，否则会被解读为量词
    // console.log(/\u{61}/.test('a')); //false
    // console.log(/\u{61}/u.test('a')); // true
  // 3、量词
    // console.log(/u{3}/.test('uuu')); //true 匹配三个连续的u
    /*console.log(/a{2}/.test('aa')) // true
    console.log(/a{2}/u.test('aa')) // true
    console.log(/𠮷{2}/.test('𠮷𠮷')) // false
    console.log(/𠮷{2}/u.test('𠮷𠮷')) // true*/
  // 4、预定义模式--\S是预定义模式，匹配所有不是空格的字符
    // console.log(/^\S$/.test('𠮷')); // false
    // console.log(/^\S$/u.test('𠮷')); // true
    function codePointLength(text) {
      var result = text.match(/[\s\S]/gu);
      return result ? result.length : 0;
    }
    function clickme9(){
      var s = '𠮷𠮷';
      console.log('"'+s+'"字符串通过原生的方法返回的长度为：'+s.length); // 4
      console.log('"'+s+'"字符串通过识别Unicode码的方法返回正确的长度为：'+codePointLength(s)); // 2
    }
// y修饰符，粘连”（sticky）修饰符，全局匹配，后一次匹配都从上一次匹配成功的下一个位置开始，
//         g修饰符只要剩余位置中存在匹配就可，而y修饰符确保匹配必须从剩余的第一个位置开始
  // var s = 'aaa_aa_a';
  // var r1 = /a+/g;
  // var r2 = /a+/y;
  // console.log(r1.exec(s));//["aaa", index: 0, input: "aaa_aa_a"]
  // console.log(r2.exec(s));//["aaa", index: 0, input: "aaa_aa_a"]
  // console.log(r1.exec(s));//["aa", index: 4, input: "aaa_aa_a"]---g修饰没有位置要求，所以第二次执行会返回结果
  // console.log(r2.exec(s));//null---y修饰符要求匹配必须从头部开始，所以返回null
// 改一下正则表达式，保证每次都能头部匹配，y修饰符就会返回结果了
  // var s = 'aaa_aa_a';
  // var r = /a+_/y; 
  // r.exec(s) // ["aaa_"]
  // r.exec(s) // ["aa_"]
// sticky属性--与y修饰符匹配，表示是否设置了y修饰符
  // var r = /hello\d/y;
  // console.log(r.sticky);//true
// flags属性--返回正则表达式的修饰符
  // ES5 的 source 属性
  // 返回正则表达式的正文
  console.log(/abc/ig.source);
  // "abc"

  // ES6 的 flags 属性
  // 返回正则表达式的修饰符
  console.log(/abc/ig.flags)
  // 'gi'
// s修饰符：dotAll模式
