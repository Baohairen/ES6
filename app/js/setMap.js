// Set和Map数据结构
function setMap () {
  // 1.Set:ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
  // 注：1和"1"是两个不同的值，两个对象总是不相等的
  const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
  console.log([...items]);       //[1, 2, 3, 4, 5]
  console.log(items.size) // 5
  // 去除数组的重复成员的方法
  let array1 = ['1',1, 1, 2, 3];
  console.log([...new Set(array1)]);     //['1',1, 2, 3]
  console.log(Array.from(new Set(array1)));    //['1',1, 2, 3]
  let set = new Set();

  set.add({});
  console.log(set.size); // 1

  set.add({});
  console.log(set.size); // 2
  /*add(value)：添加某个值，返回Set结构本身。
  delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
  has(value)：返回一个布尔值，表示该值是否为Set的成员。
  clear()：清除所有成员，没有返回值。*/
  let s = new Set();
  s.add(1).add(2).add(2);
  // 注意2被加入了两次

  console.log(s.size); // 2

  console.log(s.has(1));// true
  console.log(s.has(2)); // true
  console.log(s.has(3)); // false

  console.log(s.delete(2));
  console.log(s.has(2)) // false
  s.clear();
  console.log(s);       //Set(0) {}
  /*keys()：返回键名的遍历器
    values()：返回键值的遍历器
    entries()：返回键值对的遍历器
    forEach()：使用回调函数遍历每个成员
    注：由于 Set 结构没有键名，只有键值（或者说键名和键值是同一个值），所以keys方法和values方法的行为完全一致。
  */
  let set2 = new Set(['red', 'green', 'blue']);
  console.log(set2.keys());         //["red", "green", "blue"]
  console.log(set2.values());       //["red", "green", "blue"]
  for (let x of set2) {
    console.log(x);           //red、green、blue
  }
  for (let item of set2.entries()) {
    console.log(item);             // ["red", "red"]、["green", "green"]、["blue", "blue"]
  }
  // 在遍历操作中，同步改变原来的 Set 结构
  // 方法一
  let set3 = new Set([1, 2, 3]);
  set3 = new Set([...set3].map(val => val * 2));
  console.log(set3);        // set的值是2, 4, 6 

  // 方法二
  let set4 = new Set([1, 2, 3]);
  set4 = new Set(Array.from(set4, val => val * 2));
  console.log(set4);    // set的值是2, 4, 6

  // 2.WeakSet 结构：与 Set 类似，也是不重复的值的集合。但是，它与 Set 有两个区别。首先，WeakSet 的成员只能是对象，而不能是其他类型的值。
  // 没有size属性，没有办法遍历它的成员。
  const a = [[1, 2], [3, 4]];
  const ws1 = new WeakSet(a);         // WeakSet {[1, 2], [3, 4]}
  console.log(ws1);
  const ws = new WeakSet();
  const obj = {};
  const foo = {};
  ws.add(window);
  ws.add(obj);

  console.log(ws.has(window)); // true
  console.log(ws.has(foo));    // false

  ws.delete(window);
  console.log(ws.has(window));    // false
  // 3.ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。
  // 如果对同一个键多次赋值，后面的值将覆盖前面的值。
  // 如果读取一个未知的键，则返回undefined。
  // 0和-0就是一个键，布尔值true和字符串true则是两个不同的键。另外，undefined和null也是两个不同的键。虽然NaN不严格相等于自身，但 Map 将其视为同一个键。
  const map1 = new Map([
    ['name', '张三'],
    ['title', 'Author']
  ]);

  console.log(map1.size); // 2
  console.log(map1.has('name')); // true
  console.log(map1.get('name')); // "张三"
  console.log(map1.has('title')); // true
  console.log(map1.get('title')); // "Author"
  // 遍历方法
  const map = new Map([
    ['F', 'no'],
    ['T',  'yes'],
  ]);

  for (let key of map.keys()) {
    console.log(key);
  }
  // "F"
  // "T"

  for (let value of map.values()) {
    console.log(value);
  }
  // "no"
  // "yes"

  for (let item of map.entries()) {
    console.log(item[0], item[1]);
  }
  // "F" "no"
  // "T" "yes"

  // 或者
  for (let [key, value] of map.entries()) {
    console.log(key, value);
  }
  // "F" "no"
  // "T" "yes"

  // 等同于使用map.entries()
  for (let [key, value] of map) {
    console.log(key, value);
  }
  // "F" "no"
  // "T" "yes"
  // Map 结构转为数组结构，比较快速的方法是使用扩展运算符（...）。
  const map2 = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
  ]);

  console.log([...map2.keys()]);
  // [1, 2, 3]

  console.log([...map2.values()]);
  // ['one', 'two', 'three']

  console.log([...map2.entries()]);
  // [[1,'one'], [2, 'two'], [3, 'three']]

  console.log([...map2]);
  // [[1,'one'], [2, 'two'], [3, 'three']]

  // （1）Map 转为数组
  const myMap = new Map()
    .set(true, 7)
    .set({foo: 3}, ['abc']);
  console.log([...myMap]);
  // [ [ true, 7 ], [ { foo: 3 }, [ 'abc' ] ] ]
  // （2）数组 转为 Map
  const myMap1 = new Map([
    [true, 7],
    [{foo: 3}, ['abc']]
  ])
  console.log(myMap);
  // Map {
  //   true => 7,
  //   Object {foo: 3} => ['abc']
  // }
  // （3）Map 转为对象:如果所有 Map 的键都是字符串，它可以转为对象。
  function strMapToObj(strMap) {
    let obj = Object.create(null);
    for (let [k,v] of strMap) {
      obj[k] = v;
    }
    return obj;
  }

  const myMap2 = new Map()
    .set('yes', true)
    .set('no', false);
  console.log(strMapToObj(myMap2));
  // { yes: true, no: false }
  // （4）对象转为 Map
  function objToStrMap(obj) {
    let strMap = new Map();
    for (let k of Object.keys(obj)) {
      strMap.set(k, obj[k]);
    }
    return strMap;
  }

  console.log(objToStrMap({yes: true, no: false}))
  // Map {"yes" => true, "no" => false}
  // （5）Map 转为 JSON:Map 转为 JSON 要区分两种情况。一种情况是，Map 的键名都是字符串，这时可以选择转为对象 JSON。
  function strMapToJson(strMap) {
    return JSON.stringify(strMapToObj(strMap));
  }

  let myMap3 = new Map().set('yes', true).set('no', false);
  console.log(strMapToJson(myMap3));
  // '{"yes":true,"no":false}'
  function mapToArrayJson(map) {
    return JSON.stringify([...map]);
  }

  let myMap4 = new Map().set(true, 7).set({foo: 3}, ['abc']);
  console.log(mapToArrayJson(myMap4));
  // '[[true,7],[{"foo":3},["abc"]]]'
  // （6）JSON 转为 Map:正常情况下，所有键名都是字符串。有一种特殊情况，整个 JSON 就是一个数组，且每个数组成员本身，又是一个有两个成员的数组。
  function jsonToStrMap(jsonStr) {
    return objToStrMap(JSON.parse(jsonStr));
  }

  console.log(jsonToStrMap('{"yes": true, "no": false}'));
  // Map {'yes' => true, 'no' => false}
  function jsonToMap(jsonStr) {
    return new Map(JSON.parse(jsonStr));
  }

  console.log(jsonToMap('[[true,7],[{"foo":3},["abc"]]]'));
  // Map {true => 7, Object {foo: 3} => ['abc']}

  // 4.WeakMap的专用场合就是，它的键所对应的对象，可能会在将来消失。WeakMap结构有助于防止内存泄漏。
  // WeakMap只有四个方法可用：get()、set()、has()、delete()。


}