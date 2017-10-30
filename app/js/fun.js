// 函数的扩展
function fun () {
  // 1.ES6 允许为函数的参数设置默认值，即直接写在参数定义的后面。
  // log('Hello') // Hello World
  // log('Hello', 'China') // Hello China
  // log('Hello', '') // Hello
  // 2.参数默认值不是传值的，而是每次都重新计算默认值表达式的值。
  // let x = 99;
  // function foo(p = x + 1) {
  //   console.log(p);
  // }

  // foo() // 100

  // x = 100;
  // foo() // 101
  // 3.参数默认值可以与解构赋值的默认值，结合起来使用。
  // function foo({x, y = 5}) {
  //   console.log(x, y);
  // }

  // foo({}) // undefined 5
  // foo({x: 1}) // 1 5
  // foo({x: 1, y: 2}) // 1 2
  // foo() // TypeError: Cannot read property 'x' of undefined

  // test();

  // f(2) // 2
  // f() // undefined

  // foo()
  // // Error: Missing parameter

  // console.log(sum(0,1));

  console.log(factorial(5, 1)) // 120
  console.log(Fibonacci2(100)) // 573147844013817200000
  console.log(Fibonacci2(1000)) // 7.0330367711422765e+208
  console.log(Fibonacci2(10000)) // Infinity
}
function log(x, y = 'World') {
  console.log(x, y);
}
// 写法一
function m1({x = 0, y = 0} = {}) {
  return [x, y];
}

// 写法二
function m2({x, y} = { x: 0, y: 0 }) {
  return [x, y];
}
/* 上面两种写法都对函数的参数设定了默认值，区别是
   写法一函数参数的默认值是空对象，但是设置了对象解构赋值的默认值；
   写法二函数参数的默认值是一个有具体属性的对象，但是没有设置对象解构赋值的默认值。*/
function test(){
  // 函数没有参数的情况
  console.log(m1()) // [0, 0]
  console.log(m2()) // [0, 0]

  // x 和 y 都有值的情况
  console.log(m1({x: 3, y: 8})) // [3, 8]
  console.log(m2({x: 3, y: 8})) // [3, 8]

  // x 有值，y 无值的情况
  console.log(m1({x: 3})) // [3, 0]
  console.log(m2({x: 3})) // [3, undefined]

  // x 和 y 都无值的情况
  console.log(m1({})) // [0, 0];
  console.log(m2({})) // [undefined, undefined]

  console.log(m1({z: 3})) // [0, 0]
  console.log(m2({z: 3})) // [undefined, undefined]
}
// 作用域
var x = 1;
function f(x, y = x) {
  console.log(y);
}
// 利用参数默认值，可以指定某一个参数不得省略，如果省略就抛出一个错误。
function throwIfMissing() {
  throw new Error('Missing parameter');
}

function foo(mustBeProvided = throwIfMissing()) {
  return mustBeProvided;
}
// 箭头函数
var sum = (num1, num2) => num1 + num2;
// 等同于
// var sum = function(num1, num2) {
//   return num1 + num2;
// };
// 尾递归
function factorial(n, total) {
  if (n === 1) return total;
  return factorial(n - 1, n * total);
}
function Fibonacci2 (n , ac1 = 1 , ac2 = 1) {
  if( n <= 1 ) {return ac2};

  return Fibonacci2 (n - 1, ac2, ac1 + ac2);
}