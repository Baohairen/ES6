// 'use strict'
function clickme1(){
	//1、const声明一个只读的常量。一旦声明，常量的值就不能改变
		// const PI = 3.1415;
		// console.log(PI);
		// PI = 3;// TypeError: Assignment to constant variable.
	//2、const一旦声明变量，就必须立即初始化，不能留到以后赋值，只声明不赋值，就会报错
		// const foo;// SyntaxError: Missing initializer in const declaration
	//3、const的作用域与let命令相同：只在声明所在的块级作用域内有效。
		// if(true){
		// 	const max = 5;
		// 	console.log(max);
		// }
		// max;//Uncaught ReferenceError: max is not defined
	// 4、const命令声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用
		// if (true) {
		//   console.log(MAX); // ReferenceError
		//   const MAX = 5;
		// }
	// 5、const声明的常量，也与let一样不可重复声明
		// var message = "Hello!";
		// let age = 25;

		// 以下两行都会报错
		// const message = "Goodbye!";
		// const age = 30;
	// 6、const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址不得改动。
	// 对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。
	// 但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指针，
	// const只能保证这个指针是固定的，至于它指向的数据结构是不是可变的，就完全不能控制了。
		// 1)，常量foo储存的是一个地址，这个地址指向一个对象。
		// 	不可变的只是这个地址，即不能把foo指向另一个地址，但对象本身是可变的，所以依然可以为其添加新属性。
			// const foo = {};
			// foo.prop = 123;//添加一个属性可以成功
			// console.log(foo.prop);
			// 将指向另一个对象，就会报错
			// foo = {}; // TypeError: "foo" is read-only
		// 2)常量a是一个数组，这个数组本身是可写的，但是如果将另一个数组赋值给a，就会报错
			// const a = [];
			// a.push('hello');// 可执行
			// a.length = 0;// 可执行
			// a = ['dave'];//"a" is read-only
		// 3)Object.freeze方法将对象冻结。
		// 常量foo指向一个冻结的对象，所以添加新属性不起作用，严格模式时还会报错。
			// const foo = Object.freeze({});
			// 常规模式时，下面一行不起作用；
			// 严格模式时，该行会报错
			// foo.prop = 123;//严格模式时 Uncaught TypeError: Cannot add property prop, object is not extensible

			// 除了将对象本身冻结，对象的属性也应该冻结。下面是一个将对象彻底冻结的函数。
			// var constantize = (obj) => {
			//   Object.freeze(obj);
			//   Object.keys(obj).forEach( (key, i) => {
			//     if ( typeof obj[key] === 'object' ) {
			//       constantize( obj[key] );
			//     }
			//   });
			// };
}
// 顶层对象(window对象)
function clickme6(){
	// 1、ES5之中，顶层对象的属性与全局变量是等价的
		// window.a = 1;
		// console.log(a);//1
		// b = 3;
		// console.log(window.b);//3
	// 2、ES6一方面规定，为了保持兼容性，var命令和function命令声明的全局变量，依旧是顶层对象的属性；
	// 另一方面规定，let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性
		a = 1;
		// 如果在Node的REPL环境，可以写成global.a
		// 或者采用通用方法，写成this.a
		console.log(window.a); //1

		let b = 2;
		console.log(window.b); //undefined
}