// 数组的扩展
// 1.扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。
function arr(){
  // const numbers = [4, 38];
  // console.log(add(...numbers)) // 42
  // 2.将一个数组添加到另一个数组的尾部。
  // let arr1 = [0, 1, 2];
  // let arr2 = [3, 4, 5];
  // arr1.push(...arr2);
  // console.log(arr1);
  // // 3.复制数组
  // const a1 = [1, 2];
  // // 写法一
  // const a2 = [...a1];
  // console.log('复制数组方法一：'+a2);
  // // 写法二
  // const [...a3] = a1;
  // console.log('复制数组方法二：'+a3);
  // // 4.合并数组
  // var arr1 = ['a', 'b'];
  // var arr2 = ['c'];
  // var arr3 = ['d', 'e'];
  // console.log([...arr1, ...arr2, ...arr3]);
  // 5.Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括ES6新增的数据结构Set和Map）。
  // let arrayLike = {
  //   '0': 'a',
  //   '1': 'b',
  //   '2': 'c',
  //   length: 3
  // };
  // let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
  // console.log(arr2);
  // // 6.Array.of方法用于将一组值，转换为数组。
  // console.log(Array()) // []
  // console.log(Array(3)) // [, , ,]
  // console.log(Array(3, 11, 8)) // [3, 11, 8]
  // 7.数组实例的copyWithin方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。也就是说，使用这个方法，会修改当前数组。
  // [1, 2, 3, 4, 5].copyWithin(0, 3)      // [4, 5, 3, 4, 5]
  // // 将3号位复制到0号位
  // [1, 2, 3, 4, 5].copyWithin(0, 3, 4)   // [4, 2, 3, 4, 5]
  // // -2相当于3号位，-1相当于4号位
  // [1, 2, 3, 4, 5].copyWithin(0, -2, -1)    // [4, 2, 3, 4, 5]
  // 8.find方法，用于找出第一个符合条件的数组成员。如果没有符合条件的成员，则返回undefined。
  // 9.findIndex方法，用于找出第一个符合条件的数组成员的下标。如果没有符合条件的成员，则返回-1。
  // let fi = [1, 5, 10, 15].find(function(value, index, arr) {
  //   return value > 9;
  // }) // 10
  // let fiI = [1, 5, 10, 15].findIndex(function(value, index, arr) {
  //   return value > 9;
  // }) // 2
  // console.log(fi);
  // console.log(fiI);
  // 10.fill方法使用给定值，填充一个数组。
  // console.log(['a', 'b', 'c'].fill(7));           // [7, 7, 7]
  // console.log(['a', 'b', 'c'].fill(7, 1, 2));      // ['a', 7, 'c']
  // 11.keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。
  // for (let index of ['a', 'b'].keys()) {
  //   console.log(index);
  // }
  // // 0
  // // 1

  // for (let elem of ['a', 'b'].values()) {           //暂不支持
  //   console.log(elem);
  // }
  // // 'a'
  // // 'b'

  // for (let [index, elem] of ['a', 'b'].entries()) {
  //   console.log(index, elem);
  // }
  // 0 "a"
  // 1 "b"
  // 12.Array.prototype.includes方法返回一个布尔值，表示某个数组是否包含给定的值，
  console.log([1, 2, 3].includes(2))     // true
  console.log([1, 2, 3].includes(4))   // false
  console.log([1, 2, NaN].includes(NaN));   // true
}

var add = (x,y) => x+y