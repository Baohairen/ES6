// 7、includes()：返回布尔值，表示是否找到了参数字符串。
    // startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
    // endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。
    // 使用第二个参数n时，endsWith它针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束。
    // let s = 'hello world!';
    // console.log(s.startsWith('w',7));
    // console.log(s.endsWith('w',5));
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
// 10、模版字符串
    // let name = 'sunny';
    // console.log(`hello ${name},string text line 1
    // string text line 2`);
    console.log(`
    <ul>
        <li>first</li>
        <li>second</li>
    </ul>
    `);
    console.log(`
    <ul>
        <li>first</li>
        <li>second</li>
    </ul>
    `.trim());