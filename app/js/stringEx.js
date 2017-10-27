// 4.字符串的遍历器接口
    // for (let codePoint of 'foo') {
    //   console.log(codePoint)
    // }
    // let text = String.fromCodePoint(0x20BB7);

    // for (let i = 0; i < text.length; i++) {    //传统的for循环不能识别大于0xFFFF的码点
    //   console.log(text[i]);
    // }
    // // " "
    // // " "

    // for (let i of text) {         //此循环能够识别
    //   console.log(i);
    // }
// 7、includes()：返回布尔值，表示是否找到了参数字符串。
    // startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
    // endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。
    // 使用第二个参数n时，endsWith它针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束。
    // let s = 'hello world!';
    // console.log(s.startsWith('w',7));
    // console.log(s.endsWith('o',5));
    // console.log(s.includes('o'));
// 8、repeat()返回一个新字符串，表示将原字符串重复n次
    // console.log('x'.repeat(3));
    // 参数如果是小数，会被取整
        // console.log('na'.repeat(2.4));
    // repeat的参数是负数或者Infinity，会报错
        // console.log('na'.repeat(Infinity));
        // console.log('na'.repeat(-2));
    // console.log('na'.repeat(-0.9));//' ',如果参数是0到-1之间的小数，则等同于0，这是因为会先进行取整运算。0到-1之间的小数，取整以后等于-0，repeat视同为0
    // console.log('na'.repeat(NaN));//' ',参数NaN等同于0
    // console.log('na'.repeat('na'));//' '如果repeat的参数是字符串，则会先转换成数字。
    // console.log('na'.repeat(3));//nanana
// 9、字符串补全长度：padStart()用于头部补全，padEnd()用于尾部补全
    // console.log('12'.padStart(10, 'YYYY-MM-DD')); // "YYYY-MM-12"
    // console.log('09-12'.padStart(10, 'YYYY-MM-DD')); // "YYYY-09-12"
// 10、模版字符串
    // let name = 'sunny';
    // console.log(`hello ${name},string text line 1
    // string text line 2`);
    // console.log(`
    // <ul>
    //     <li>first</li>
    //     <li>second</li>
    // </ul>
    // `);
    // console.log(`
    // <ul>
    //     <li>first</li>
    //     <li>second</li>
    // </ul>
    // `.trim());
// 如果需要引用模板字符串本身，在需要时执行，可以像下面这样写。
// 写法一
// let str1 = 'return ' + '`Hello ${name}!`';
// let func1 = new Function('name', str1);
// console.log(func1('Jack')); // "Hello Jack!"

// // 写法二
// let str2 = '(name) => `Hello ${name}!`';
// let func2 = eval.call(null, str2);
// console.log(func2('Jack')); // "Hello Jack!"
// 模板处理函数的第一个参数（模板字符串数组），还有一个raw属性。
// tag`First line\nSecond line`

// function tag(strings) {
//     console.log(strings);
//     console.log(strings.raw[0]);
//   // strings.raw[0] 为 "First line\\nSecond line"
//   // 打印输出 "First line\nSecond line"
// }
