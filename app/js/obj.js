//对象的扩展
function obj1_1() {
  // 1.属性的简洁表示法
      // ES6 允许直接写入变量和函数，作为对象的属性和方法。
  let birth = '2000/01/01';

  const Person = {

    name: '张三',

    //等同于birth: birth
    birth,

    // 等同于hello: function ()...
    hello() { console.log('我的名字是',this.name+'\n我的生日是'+this.birth); }

  };
  // 2.ES6 允许字面量定义对象时，用方法二（表达式）作为对象的属性名，表达式还可以用于定义方法名。
  let propKey = 'foo';

  let obj = {
    [propKey]: true,
    ['a' + 'bc']: 123,
    ['h' + 'ello']() {
      return 'hi';
    }
  };
  console.log(obj);   //返回{foo: true, abc: 123}
  console.log(obj.hello()) // hi
  // Person.hello();
  // 3.Object.is它用来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致。
  //    不同之处只有两个：一是+0不等于-0，二是NaN等于自身。
  console.log(+0 === -0 )//true
  console.log(NaN === NaN) // false
  console.log(Object.is('foo', 'foo')) // true
  console.log(Object.is({}, {}))   // false
  console.log(Object.is(+0, -0)) // false
  console.log(Object.is(NaN, NaN)) // true
  // 4.Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。
  const target = { a: 1, b: 1 };

  const source1 = { b: 2, c: 2 };
  const source2 = { c: 3 };

  Object.assign(target, source1, source2);
  console.log(target); // {a:1, b:2, c:3}
  // Object.assign方法实行的是浅拷贝，下面代码中，源对象obj1的a属性的值是一个对象，Object.assign拷贝得到的是这个对象的引用。这个对象的任何变化，都会反映到目标对象上面。
  // Object.assign可以用来处理数组，但是会把数组视为对象。
  // Object.assign只能进行值的复制，如果要复制的值是一个取值函数，那么将求值后再复制。
  const obj1 = {a: {b: 1}};
  const obj2 = Object.assign({}, obj1);
  console.log(obj2.a.b);   //1
  obj1.a.b = 2;
  console.log(obj2.a.b); // 2
  // 5.对象的每个属性都有一个描述对象（Descriptor），用来控制该属性的行为。Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象。
  /*for...in循环：只遍历对象自身的和继承的可枚举的属性。
  Object.keys()：返回对象自身的所有可枚举的属性的键名。
  JSON.stringify()：只串行化对象自身的可枚举的属性。
  Object.assign()： 忽略enumerable为false的属性，只拷贝对象自身的可枚举的属性。*/
  let obj3 = { foo: 123 };
  console.log(Object.getOwnPropertyDescriptor(obj3, 'foo'));
  //  {
  //    value: 123,
  //    writable: true,
  //    enumerable: true,
  //    configurable: true
  //  }
  // Object.getOwnPropertyDescriptors方法，返回指定对象所有自身属性（非继承属性）的描述对象。
  const obj4 = {
    foo: 123,
    get bar() { return 'abc' }
  };
  console.log(Object.getOwnPropertyDescriptors(obj4));
  // 6.__proto__属性（前后各两个下划线），用来读取或设置当前对象的prototype对象。
  console.log(obj4.__proto__);
  obj4.__proto__ = {a:'1'};
  console.log(obj4.__proto__);
  console.log(obj4.a);
  // 7.Object.setPrototypeOf方法的作用与__proto__相同，用来设置一个对象的prototype对象，返回参数对象本身。
  let proto = {};
  let obj5 = { x: 10 };
  Object.setPrototypeOf(obj5, proto);

  proto.y = 20;
  proto.z = 40;

  console.log(obj5.x) // 10
  console.log(obj5.y) // 20
  console.log(obj5.z) // 40
  // 8.Object.getPrototypeOf() 方法用于读取一个对象的原型对象。
  console.log(Object.getPrototypeOf(obj5));
  // 9.关键字super，指向当前对象的原型对象。
  const proto1 = {
    foo: 'hello'
  };

  const obj6 = {
    find() {
      return super.foo;
    }
  };

  Object.setPrototypeOf(obj6, proto1);
  console.log(obj6.find()); // "hello"

  const proto2 = {
    x: 'hello',
    foo() {
      console.log(this.x);
    },
  };

  const obj7 = {
    x: 'world',
    foo() {
      super.foo();
    }
  }

  Object.setPrototypeOf(obj7, proto2);

  obj7.foo() // "world"
  // 10.Object.keys方法，返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键名。
  // Object.values方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值。
  // Object.entries方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组。
  // 扩展运算符的解构赋值，不能复制继承自原型对象的属性。
  var obj8 = { foo: 'bar', baz: 42 };
  console.log(Object.keys(obj8));       // ["foo", "baz"]
  console.log(Object.values(obj8));
  console.log(Object.entries(obj8));
}