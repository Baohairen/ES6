// Symbol
function symbol () {
  // 1.新的原始数据类型Symbol，表示独一无二的值。相同参数的Symbol函数的返回值是不相等的。
  // Symbol 值不能与其他类型的值进行运算，会报错。但是，Symbol 值可以显式转为字符串。另外，Symbol 值也可以转为布尔值，但是不能转为数值。
  let s = Symbol();
  console.log(typeof s);  // "symbol"
  let s1 = Symbol('foo');
  let s2 = Symbol('bar');
  let s3 = Symbol('foo');

  console.log(s1 === s2);  // false
  console.log(s1); // Symbol(foo)
  console.log(s2); // Symbol(bar)

  console.log(s1.toString()); // "Symbol(foo)"
  console.log(s2.toString()); // "Symbol(bar)"
  // 2.作为属性名的 Symbol,使用 Symbol 值定义属性时，Symbol 值必须放在方括号之中。Symbol 值作为对象属性名时，不能用点运算符。
  const mySymbol = Symbol();
  const a = {};

  a.mySymbol = 'Hello!';
  console.log(a[mySymbol]); // undefined
  console.log(a['mySymbol']); // "Hello!"
  a[mySymbol] = 'World';
  console.log(a[mySymbol]);   // World
  // 3.属性名的遍历,该属性不会出现在for...in、for...of循环中，也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回。
  // Object.getOwnPropertySymbols方法，可以获取指定对象的所有 Symbol 属性名。
  const obj = {};
  let a1 = Symbol('a');
  let b1 = Symbol('b');

  obj[a1] = 'H';
  obj[b1] = 'W';

  const objectSymbols = Object.getOwnPropertySymbols(obj);

  console.log(objectSymbols);       // [Symbol(a1), Symbol(b1)]
  // Reflect.ownKeys方法可以返回所有类型的键名，包括常规键名和 Symbol 键名。
  let obj1 = {
    [Symbol('my_key')]: 1,
    enum: 2,
    nonEnum: 3
  };

  console.log(Reflect.ownKeys(obj1));       //  ["enum", "nonEnum", Symbol(my_key)]
  // 4.Symbol.for方法接受一个字符串作为参数，然后搜索有没有以该参数作为名称的Symbol值。如果有，就返回这个 Symbol 值，否则就新建并返回一个以该字符串为名称的 Symbol 值。
  // Symbol()写法没有登记机制，所以每次调用都会返回一个不同的值。
  // Symbol.keyFor方法返回一个已登记的 Symbol 类型值的key。
  console.log(Symbol.for("bar") === Symbol.for("bar"));     // true
  console.log(Symbol("bar") === Symbol("bar"));      // false
  let s4 = Symbol.for("foo");
  console.log(Symbol.keyFor(s4)) // "foo"

  let s5 = Symbol("foo");
  console.log(Symbol.keyFor(s5)) // undefined
  // Symbol.for为 Symbol 值登记的名字，是全局环境的，可以在不同的 iframe 或 service worker 中取到同一个值。
  // let iframe = document.createElement('iframe');
  // iframe.src = String(window.location);
  // document.body.appendChild(iframe);

  // console.log(iframe.contentWindow.Symbol.for('foo') === Symbol.for('foo'));     // true
  console.log('*************内置的Symbol值****************');
  // 6.内置的Symbol值
    // 6.1、Symbol.hasInstance属性，指向一个内部方法。当其他对象使用instanceof运算符，判断是否为该对象的实例时，会调用这个方法。
      class MyClass {
        [Symbol.hasInstance](foo) {
          return foo instanceof Array;
        }
      }
      console.log([1, 2, 3] instanceof new MyClass()); // true
      console.log([1, 2, 3] instanceof Array); // true
    // 6.2、Symbol.isConcatSpreadable属性等于一个布尔值，表示该对象用于Array.prototype.concat()时，是否可以展开。
    let arr1 = ['c', 'd'];
    console.log(['a', 'b'].concat(arr1, 'e')); // ['a', 'b', 'c', 'd', 'e']
    console.log(arr1[Symbol.isConcatSpreadable]); // undefined

    let arr2 = ['c', 'd'];
    arr2[Symbol.isConcatSpreadable] = false;   //不展开时直接当做一个对象合并，并不拆分
    console.log(['a', 'b'].concat(arr2, 'e')) // ['a', 'b', ['c','d'], 'e']
    // 6.3、Symbol.species属性，指向当前对象的构造函数。创造实例时，默认会调用这个方法，即使用这个属性返回的函数当作构造函数，来创造新的实例对象。
    class MyArray extends Array {
      static get [Symbol.species]() { return Array; }
    }
    let arr3 = new MyArray(1,2,3);
    let mapped = arr3.map(x => x * x);

    console.log(mapped instanceof MyArray); // false
    console.log(mapped instanceof Array); // true
    // 6.4、Symbol.match属性，指向一个函数。当执行str.match(myObject)时，如果该属性存在，会调用它，返回该方法的返回值。
    class MyMatcher {
      [Symbol.match](string) {
        return 'hello world'.indexOf(string);
      }
    }

    console.log('e'.match(new MyMatcher())) // 1
    console.log('a'.match(new MyMatcher())) // -1
    // 6.5、Symbol.replace属性，指向一个方法，当该对象被String.prototype.replace方法调用时，会返回该方法的返回值。
    const x = {};
    x[Symbol.replace] = (...s) => console.log(s);

    'Hello'.replace(x, 'World') // ["Hello", "World"]
    // 6.6、Symbol.search属性，指向一个方法，当该对象被String.prototype.search方法调用时，会返回该方法的返回值。
    class MySearch {
      constructor(value) {
        this.value = value;
      }
      [Symbol.search](string) {
        return string.indexOf(this.value);
      }
    }
    console.log('foobar'.search(new MySearch('o'))) // 0
    // 6.7、Symbol.split属性，指向一个方法，当该对象被String.prototype.split方法调用时，会返回该方法的返回值。
    // 6.8、Symbol.iterator属性，指向该对象的默认遍历器方法。
    // 6.9、Symbol.toPrimitive属性，指向一个方法。该对象被转为原始类型的值时，会调用这个方法，返回该对象对应的原始类型值。
    // 6.10、Symbol.toStringTag属性，指向一个方法。在该对象上面调用Object.prototype.toString方法时，如果这个属性存在，它的返回值会出现在toString方法返回的字符串之中，表示对象的类型。
    // 6.11、对象的Symbol.unscopables属性，指向一个对象。该对象指定了使用with关键字时，哪些属性会被with环境排除。
}