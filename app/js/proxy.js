function proxy(){
  /* 1.Proxy 用于修改某些操作的默认行为，Proxy接受两个参数。
      第一个参数是所要代理的目标对象（上例是一个空对象），即如果没有Proxy的介入，操作原来要访问的就是这个对象；
      第二个参数是一个配置对象，对于每一个被代理的操作，需要提供一个对应的处理函数，该函数将拦截对应的操作。*/
  var obj = new Proxy({}, {
    get: function (target, key, receiver) {
      console.log(`getting ${key}!`);
      return Reflect.get(target, key, receiver);
    },
    set: function (target, key, value, receiver) {
      console.log(`setting ${key}!`);
      return Reflect.set(target, key, value, receiver);
    }
  });
  obj.count = 1; //  setting count!
  console.log(++obj.count);   //  getting count!   //  setting count!  //  2
  var handler = {
    get: function(target, name) {
      if (name === 'prototype') {
        return Object.prototype;
      }
      return 'Hello, ' + name;
    },

    apply: function(target, thisBinding, args) {
      return args[0];
    },

    construct: function(target, args) {
      return {value: args[1]};
    }
  };

  var fproxy = new Proxy(function(x, y) {
    return x + y;
  }, handler);

  console.log(fproxy(1, 2)); // 1
  console.log(new fproxy(1, 2)); // {value: 2}
  console.log(fproxy.prototype === Object.prototype); // true
  console.log(fproxy.foo === "Hello, foo"); // true
  // 2.get方法用于拦截某个属性的读取操作，可以接受三个参数，依次为目标对象、属性名和 proxy 实例本身（即this关键字指向的那个对象），其中最后一个参数可选。
  // 第三个参数receiver，总是返回this关键字所指向的那个对象，即proxy实例本身。
  // 如果一个属性不可配置（configurable）和不可写（writable），则该属性不能被代理，通过 Proxy 对象访问该属性会报错。
  var person = {
    name: "张三"
  };

  var proxy1 = new Proxy(person, {
    get: function(target, property) {
      if (property in target) {
        return target[property];
      } else {
        throw new ReferenceError("Property \"" + property + "\" does not exist.");
      }
    }
  });

  console.log(proxy1.name); // "张三"
  // console.log(proxy1.age); // 抛出一个错误
  // 3.set方法用来拦截某个属性的赋值操作，可以接受四个参数，依次为目标对象、属性名、属性值和 Proxy 实例本身，其中最后一个参数可选。
  // 第四个参数receiver，总是返回this关键字所指向的那个对象，即proxy实例本身。
  let validator = {
    set: function(obj, prop, value) {
      if (prop === 'age') {
        if (!Number.isInteger(value)) {
          throw new TypeError('The age is not an integer');
        }
        if (value > 200) {
          throw new RangeError('The age seems invalid');
        }
      }

      // 对于age以外的属性，直接保存
      obj[prop] = value;
    }
  };

  let person1 = new Proxy({}, validator);

  // person1.age = 100;

  // console.log(person1.age); // 100
  // person1.age = 'young' // 报错
  // person1.age = 300; // 报错
  // 4.apply方法拦截函数的调用、call和apply操作。
  var twice = {
    apply (target, ctx, args) {
      return Reflect.apply(...arguments) * 2;
    }
  };
  function sum (left, right) {
    return left + right;
  };
  var proxy2 = new Proxy(sum, twice);
  console.log(proxy2(1, 2)); // 6
  console.log(proxy2.call(null, 5, 6)); // 22
  console.log(proxy2.apply(null, [7, 8])); // 30
  // 5.has方法用来拦截HasProperty操作，即判断对象是否具有某个属性时，这个方法会生效。
  var handler2 = {
    has (target, key) {
      if (key[0] === '_') {
        return false;
      }
      return key in target;
    }
  };
  var target2 = { _prop: 'foo', prop: 'foo' };
  var proxy2 = new Proxy(target2, handler2);
  console.log('_prop' in proxy2); // false
  console.log('prop' in proxy2); // true
  // 6.construct方法用于拦截new命令,返回的必须是一个对象，否则会报错
  var p = new Proxy(function () {}, {
    construct: function(target, args) {
      console.log('called: ' + args.join(', '));
      return { value: args[0] * 10 };
    }
  });

  console.log((new p(1)).value);    // "called: 1"   // 10
  // 7.deleteProperty方法用于拦截delete操作，如果这个方法抛出错误或者返回false，当前属性就无法被delete命令删除。
  var handler3 = {
    deleteProperty (target, key) {
      invariant(key, 'delete');
      return true;
    }
  };
  function invariant (key, action) {
    if (key[0] === '_') {
      throw new Error(`Invalid attempt to ${action} private "${key}" property`);
    }else{
      console.log('删除成功');
    }
  }

  var target3 = { _prop: 'foo' };
  var proxy3 = new Proxy(target3, handler3);
  delete proxy3.prop;
  // delete proxy3._prop;        // Error: Invalid attempt to delete private "_prop" property
  // 8.defineProperty方法拦截了Object.defineProperty操作。
  var handler4 = {
    defineProperty (target, key, descriptor) {
      return false;
    }
  };
  var target4 = {};
  var proxy4 = new Proxy(target4, handler4);
  // proxy4.foo = 'bar';      // TypeError: proxy defineProperty handler returned false for property '"foo"'
  // 9.getOwnPropertyDescriptor方法拦截Object.getOwnPropertyDescriptor()，返回一个属性描述对象或者undefined。
  var handler5 = {
    getOwnPropertyDescriptor (target, key) {
      if (key[0] === '_') {
        return;
      }
      return Object.getOwnPropertyDescriptor(target, key);
    }
  };
  var target5 = { '_foo': 'bar', 'baz': 'tar' };
  var proxy5 = new Proxy(target5, handler5);
  console.log(Object.getOwnPropertyDescriptor(proxy5, 'wat')); // undefined
  console.log(Object.getOwnPropertyDescriptor(proxy5, '_foo')); // undefined
  console.log(Object.getOwnPropertyDescriptor(proxy5, 'baz'));     // { value: 'tar', writable: true, enumerable: true, configurable: true }
  
  // 10.getPrototypeOf方法主要用来拦截获取对象原型。
  // 11.isExtensible方法拦截Object.isExtensible操作。
  // 12.ownKeys方法用来拦截对象自身属性的读取操作。
  // 13.preventExtensions方法拦截Object.preventExtensions()。该方法必须返回一个布尔值，否则会被自动转为布尔值。
  // 14.setPrototypeOf方法主要用来拦截Object.setPrototypeOf方法。
  let target6 = {
    _bar: 'foo',
    _prop: 'bar',
    prop: 'baz'
  };

  let handler6 = {
    ownKeys (target) {
      return Reflect.ownKeys(target).filter(key => key[0] !== '_');
    }
  };

  let proxy6 = new Proxy(target6, handler6);
  for (let key of Object.keys(proxy6)) {
    console.log(target6[key]);     // "baz"
  }
  // 15.Proxy.revocable方法返回一个可取消的 Proxy 实例。
  // this:在 Proxy 代理的情况下，目标对象内部的this关键字会指向 Proxy 代理。
  // Proxy 对象可以拦截目标对象的任意属性，这使得它很合适用来写 Web 服务的客户端。
}
