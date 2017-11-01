// 1、属性的简洁表示法
    let birth = '2000/01/01';
    const person = {
        name : '章三',
        birth,//等同于birth: birth
        // 等同于hello: function ()...
        hello(){console.log('我的名字是'+this.name+'.'+'我的生日是'+this.birth)}
    };
    //  person.hello();
    // 如果某个方法的值是一个 Generator 函数，前面需要加上星号
    // const obj = {
    //     * m(){
    //         yield 'hello world';
    //     }
    // }
    // obj.m();
// 2、属性名表达式--将表达式放在方括号之内
    let propKey = 'foo';
    let obj1 = {
        [propKey]:true,
        ['a'+'abc']:123,
        'first word':'hello',
        ['h'+'ello1'](){
            console.log('lala');
        }
    };
    /*
    console.log(obj1[propKey]);//true
    console.log(obj1['aabc']);//123
    console.log(obj1['foo']);//true
    console.log(obj1['first word']);//hello
    obj1.hello1();//lala
    */
    // 属性名表达式与简洁表示法，不能同时使用，会报错
    // 报错
    // const foo = 'bar';
    // const bar = 'abc';
    // const baz = { [foo] };

    // 正确
    const foo = 'bar';
    const baz = { [foo]: 'abc'};
    // console.log(baz);
// 3、方法的name属性--返回函数名
    const person1 = {
        sayName() {
        console.log('hello!');
        },
    };
    // console.log(person1.sayName.name)   // "sayName"
    // 如果对象的方法使用了取值函数（getter）和存值函数（setter），返回值是方法名前加上get和set
    const obj = {
        get foo() {},
        set foo(x) {}
      };
    const descriptor = Object.getOwnPropertyDescriptor(obj, 'foo');   
    // console.log(obj.get.name );// "get foo"
    // console.log(descriptor.set.name); // "set foo"
    // bind方法创造的函数，name属性返回bound加上原函数的名字；Function构造函数创造的函数，name属性返回anonymous
    (new Function()).name // "anonymous"
    
    var doSomething = function() {
      // ...
    };
    doSomething.bind().name // "bound doSomething"
    // 如果对象的方法是一个 Symbol 值，那么name属性返回的是这个 Symbol 值的描述
    const key1 = Symbol('description');
    const key2 = Symbol('4444');
    let obj2 = {
      [key1]() {},
      [key2]() {},
    };
    // console.log(obj2[key1].name) // "[description]"
    // console.log(obj2[key2].name) // ""
// 4、Object.is()--比较两个值是否相等--与===的行为基本一致
    //ES5--+0等于-0，NaN不等于自身
    // console.log(+0 === -0);//true
    // console.log(NaN === NaN);//false
    //ES6--+0不等于-0，NaN等于自身
    // console.log(Object.is(+0,-0));//false
    // console.log(Object.is(NaN,NaN));//true
// 5、Object.assign()--用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）
   const target = {a:1};
   const source1 = {b:2};
   const source2 = {c:2};
   Object.assign(target,source1,source2);//第一个参数为目标对象，后面的参数为源对象
//    console.log(target);//{a: 1, b: 2, c: 2}
// 7、Object.getOwnPropertyDescriptors--返回指定对象所有自身属性（非继承属性）的描述对象
// 9、super关键字--指向当前对象的原型对象
    const proto = {
        foo : 'hello'
    };
    const obj3 = {
        find(){
            console.log(super.foo);
        }
    };
    Object.setPrototypeOf(obj3,proto);
    // obj3.find();//hello

    const proto1 = {
        x: 'hello',
        foo() {
          console.log(this.x);
        },
      };
      
      const obj4 = {
        x: 'world',
        foo() {
          super.foo();
        }
      }
      
      Object.setPrototypeOf(obj4, proto1);  
    //   obj4.foo() // "world"
// 10、Object.keys(),Object.values(),Object.entries()
    /*
      1)Object.keys():返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键名
      2）Object.values():返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值
      3）Object.entries():返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组
    */
    var obj5 = {foo:'bar',baz:42};
    // console.log(Object.keys(obj5));// ["foo", "baz"]

    const obj6 = {foo:'bar',baz:42};
    // console.log(Object.values(obj6));// ["bar", 42]

    // Object.values会过滤属性名为 Symbol 值的属性
    // console.log(Object.values({[Symbol()]:123,foo:'abc'}));// ['abc']

    // 如果Object.values方法的参数是一个字符串，会返回各个字符组成的一个数组
    // console.log(Object.values('foo'));// ['f', 'o', 'o']

    // 由于数值和布尔值的包装对象，都不会为实例添加非继承的属性。所以，Object.values会返回空数组
    // console.log(Object.values(42));//[]
    // console.log(Object.values(true));//[]

    const obj7 = {foo:'bar',baz:42};
    // console.log(Object.entries(obj7));// [ ["foo", "bar"], ["baz", 42] ]
// 11、对象的扩展运算符
    //1）解构赋值--对象的解构赋值用于从一个对象取值，相当于将所有可遍历的、但尚未被读取的属性，分配到指定的对象上面。所有的键和它们的值，都会拷贝到新对象上面
    // const [a, ...b] = [1, 2, 3];
    // a // 1
    // b // [2, 3]

    // let { f,g, ...h } = { f: 1, g: 2, s: 3, d: 4 };
    // console.log(f);// 1
    // console.log(g); // 2
    // console.log(h); // { a: 3, b: 4 } 
    // 2)扩展运算符（...）用于取出参数对象的所有可遍历属性，拷贝到当前对象之中
    // let z = { a: 3, b: 4 };
    // let n = { ...z };
    // console.log(n);// { a: 3, b: 4 }