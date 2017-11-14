// 1、概述--symbol:ES6引入的新的原始数据类型，通过Symbol函数生成
    let s = Symbol();
    // console.log(typeof s);
    /*
    1)Symbol函数可接受一个字符串作为参数，表示哦对Symbol实例的描述，来标识Symbol实例
    2)相同参数的Symbol函数返回值是不相等的
    3)Symbol值不能与其他类型的值进行计算
    4）Symbol 值可以显式转为字符串、布尔值，但是不能转为数值。
    */
    let s1 = Symbol('foo');
    let s2 = Symbol('bar');
    let s3 = Symbol('foo');
    /*
    console.log(s1);// Symbol(foo)
    console.log(s2);// Symbol(bar)
    console.log(s1 === s3);//false
    console.log('your name is'+s1);//TypeError: can't convert symbol to string
    console.log(String(s2));//Symbol(bar)
    console.log(s2.toString());//Symbol(bar)
    console.log(Boolean(s3));//true
    console.log(Number(s3));//symbol_pcm.js:1 Uncaught TypeError: Cannot convert a Symbol value to a number
    */
// 2、作为属性名的Symbol--用于对象的属性名的标识符，保证属性的唯一性
    /*
    1）通过方括号结构和Object.defineProperty，将对象的属性名指定一个Symbol值
    */
    // let mySymbol = Symbol();
    // 第一种写法
    // let a = {};
    // a[mySymbol] = 'hello';
    // 第二种写法
    // let a ={
    //     [mySymbol]:'hello'
    // };
    // 第三种写法
    // let a = {};
    // Object.defineProperty(a, mySymbol, { value: 'Hello!' });

    // 以上写法都得到同样结果
    // a[mySymbol] // "Hello!"
    /*
    2）Symbol值作为对象属性名时，不能用点运算符
    */
    const mySymbol = Symbol();
    const a = {};
    a.mySymbol = 'hello';
    // console.log(a[mySymbol]);//undefined
    // console.log(a['mySymbol']);//hello
// 3、实例：消除魔术字符串
     /*
    1）魔术字符串:在代码中多次出现、与代码形成强耦合的某一个具体的字符串或者数值，避免一个值多处利用。修改时，需多处修改的尴尬
    */
    const shapeType = {
        triangle: 'Triangle'//将魔术字符串写成变量
      };  
      function getArea(shape, options) {
        let area = 0;
        switch (shape) {
          case shapeType.triangle:
            area = .5 * options.width * options.height;
            break;
        }
        return area;
      }    
      getArea(shapeType.triangle, { width: 100, height: 100 });
// 4、属性名的遍历
    /*
    1）Object.getOwnPropertySymbols:获取指定对象的所有Symbol属性名
      返回一个数组，成员是当前对象的所有用作属性名的Symbol值
    */
    const obj = {};
    let a1 = Symbol('a');
    let b1 = Symbol('b');  
    obj[a1] = 'Hello';
    obj[b1] = 'World';
    const objectSymbols = Object.getOwnPropertySymbols(obj);
//    console.log(objectSymbols); // [Symbol(a), Symbol(b)]
   let foo = Symbol('foo');
   Object.defineProperty(obj,foo,{
       value:'foobar',
   });
   for(let i in obj){
       console.log(i);//无输出
   }
//    console.log(Object.getOwnPropertyNames(obj));//[]
//    console.log(Object.getOwnPropertySymbols(obj));//[Symbol(a), Symbol(b), Symbol(foo)]
   /*
   2）Reflect.ownKeys():可以返回所有类型的键名，包括常规键名和 Symbol 键名
   */
   let obj1 = {
       [Symbol('my_key')]:1,
       enum:2,
       nonEnum:3
   };
    // console.log(Reflect.ownKeys(obj1));// ["enum", "nonEnum", Symbol(my_key)]
// 5、Symbol.for(),Symbol.KeyFor()
    /*
    1）Symbol():没有登记机制，每次调用会返回一个不同的值
    2）Symbol.for():被登记在全局环境中，调用时，先检查给定的key是否已经存在，不存在则新建一个值，
                    存在则返回已查到的key
    3）Symbol.keyFor():返回一个已登记的Symbol类型值的key
    */
    let s4 = Symbol.for('pcm');
    let s5 = Symbol.for('pcm');
    // console.log(s4 === s5);//true
    let s6 = Symbol('bhr');
    let s7 = Symbol('bhr');
    // console.log(s6 === s7);//false
    // console.log(Symbol.keyFor(s4));//'pcm'
    // console.log(Symbol.keyFor(s6))//'undefined'
// 6、实例：模块的Singleton模式
   /*
   1）Singleton模式:调用一个类，任何时候返回的都是同一个实例
   */
// 7、内置Symbol值
   /*
   1）Symbol.hasInstance:指向一个内部方法，当其他对象使用instanceof运算符，判断是否为该对象的实例
   */
   class MyClass{
       [Symbol.hasInstance](foo){
           return foo instanceof Array;
       }
   }
    //console.log([1,2,3] instanceof new MyClass());//true
    /*
    2）Symbol.isConcatSpreadable:对象的Symbol.isConcatSpreadable属性等于一个布尔值，
        表示该对象用于Array.prototype.concat()时，是否可以展开
    */
    // 数组的默认行为是可以展开，Symbol.isConcatSpreadable默认等于undefined。该属性等于true时，也有展开的效果
    let arr1 = ['c', 'd'];
    ['a', 'b'].concat(arr1, 'e') // ['a', 'b', 'c', 'd', 'e']
    arr1[Symbol.isConcatSpreadable] // undefined
    
    let arr2 = ['c', 'd'];
    arr2[Symbol.isConcatSpreadable] = false;
    ['a', 'b'].concat(arr2, 'e') // ['a', 'b', ['c','d'], 'e']
    // 类似数组的对象正好相反，默认不展开。它的Symbol.isConcatSpreadable属性设为true，才可以展开
    let obj2 = {length: 2, 0: 'c', 1: 'd'};
    ['a', 'b'].concat(obj2, 'e') // ['a', 'b', obj, 'e']
    
    obj2[Symbol.isConcatSpreadable] = true;
    ['a', 'b'].concat(obj2, 'e') // ['a', 'b', 'c', 'd', 'e']
    /*
    3）Symbol.species:指向当前对象的构造函数,使用这个属性返回的函数当作构造函数，来创造新的实例对象
    */
    class MyArray extends Array {
        static get [Symbol.species]() { return Array; }
    }
    let a2 = new MyArray(1,2,3);
    let mapped = a2.map(x => x * x);
    // console.log(a2);//[1,2,3]
    mapped instanceof MyArray // false
    mapped instanceof Array // true
    /*
    4）Symbol.match:指向一个函数,当执行str.match(myObject)时，如果该属性存在，会调用它，返回该方法的返回值
        String.prototype.match(regexp)
        // 等同于
        regexp[Symbol.match](this)  
    */
    class MyMatcher {
      [Symbol.match](string) {
        return 'hello world'.indexOf(string);
      }
    }
    // console.log('l'.match(new MyMatcher()));//2
    /*
    5）Symbol.replace:，指向一个方法，当该对象被String.prototype.replace方法调用时，会返回该方法的返回值
    */
    /*
    6）Symbol.search:，指向一个方法，当该对象被String.prototype.search方法调用时，会返回该方法的返回值
    String.prototype.search(regexp)
    // 等同于
    regexp[Symbol.search](this)
    */
    class MySearch {
        constructor(value) {
            // console.log('value:'+value);
          this.value = value;
        }
        [Symbol.search](string) {
            // console.log('string:'+string);
          return string.indexOf(this.value);
        }
      }
    //   console.log('abc'.search(new MySearch('a')));//0
    /*
    6）Symbol.split:，指向一个方法，当该对象被String.prototype.split方法调用时，会返回该方法的返回值
    String.prototype.split(separator, limit)
    // 等同于
    separator[Symbol.split](this, limit)
    */
    class MySplitter {
        constructor(value) {
          this.value = value;
        }
        [Symbol.split](string) {
          let index = string.indexOf(this.value);
          if (index === -1) {
            return string;
          }
          return [
            string.substr(0, index),
            string.substr(index + this.value.length)
          ];
        }
      }
    //   console.log('foobar'.split(new MySplitter('foo')));//['','bar']
    //   console.log('foobar'.split(new MySplitter('bar')));//['foo','']
    //   console.log('foobar'.split(new MySplitter('baz')));//foobar
    /*
    7）Symbol.iterator:，指向对象的默认遍历器方法，当该对象进行for...of循环调用时，会返回该对象的默认遍历器
    */
    // const myIterable = {};
    // myIterable[Symbol.iterator] = function* () {
    //   yield 1;
    //   yield 2;
    //   yield 3;
    // };
    // [...myIterable] // [1, 2, 3]