function clickme1(){
		// ES5
		var a = [];
		// for(var i = 0;i<10;i++){
		for(let i = 0;i<10;i++){	 //var定义的变量溢出，循环使用，let变量只在其作用域内生效
			a[i]=function(){
				$('#result1').val(i);
			}
			a[0]();
		}
		a[6]();        //10(var)   6(let) 
		// 闭包
		// var n = 999;
		// function f2(){
		// 	let n = 888;
		// 	alert(n);
		// }
		// return f2();
}
function clickme2(){		
	// ES6
	// one time
	// var a = [];
	// for(let i = 0;i<10;i++){
	// 	console.log(i); 
	// 	a[i]=function(){
	// 		$('#result2').val(i);
	// 	}
	// }
	// a[6]();
	// second time
	for (let i = 0; i < 3; i++) {
	  let i = 'abc';
	  console.log(i);
	}
}
// 不存在变量提升
function clickme3(){
	console.log(foo);//undefined
	var foo = 2;
	console.log(bar);//Uncaught ReferenceError: bar is not defined
	let bar = 3;
}
// 暂时性死区
function clickme4(){
	// 只要块级作用域内存在let命令，其所声明的变量就绑定这个区域，不再受外部的影响	
	// var tmp = 123;
	// if (true) {
	// 	tmp = 'abc',
	// 	let tmp;//Uncaught SyntaxError: Unexpected identifier(编译报错)
	// }
	// 代码块中，let声明的变量在let声明之前使用，无论什么操作，都会报错
	if (true) {
		// TDZ开始
		// tmp = 'abc'; // ReferenceError
		// console.log(tmp); // ReferenceError
		// let tmp;//TDZ结束
		// console.log(tmp);// undefined
		// tmp = 122;
		// console.log(tmp);//122
	}

	// typeof x; // ReferenceError
	// let x;
	// y在赋给x时，还未声明
	// function bar(x = y,y = 2){
	// 	console.log([x,y]);
	// }
	// bar();//报错
	// x在赋给y时， 已声明
	// function bar(x = 2,y = x){
	// 	console.log([x,y]);
	// }
	// bar();//[2,2]
}
// 块级作用域
function clickme5(){
	// ES5 只有全局作用域和函数作用域，没有块级作用域，这带来很多不合理的场景
	//1、 内层变量可能会覆盖外层变量。
		// var tmp = new Date();
		// function f(){
		// 	console.log(tmp);
		// 	if(false){ //尽管此段代码为false，并未执行if语句，if里定义的变量还是会影响外层变量
		// 		var tmp = 'hello';
		// 		// console.log('s');
		// 	}
		// } 
		// f();//undefined

	// 2、用来计数的循环变量泄露为全局变量。
		// var s = 'hello';
		// for(var i = 0;i < s.length;i++){
		// 	console.log(s[i]);
		// }
		// console.log(i);

	// 外层代码块不受内层代码块的影响。如果两次都使用var定义变量n，最后输出的值才是10。
		// f1();
		// function f1(){
		// 	let n = 3;
		// 	if(true){
		// 		let n = 10;
		// 	}
		// 	console.log(n);//3
		// }

	// ES6 允许块级作用域的任意嵌套
	// 1、外层作用域无法读取内层作用域的变量
		// {{{{
		// 	{let a = 'hello'}
		// 	console.log(a);
		// }}}}//Uncaught ReferenceError: a is not defined

	// 2、在内层作用域可以定义外层作用域的同名变量
		// {{{{
		// 	let a = 'dd';
		// 	{let a = 'hello'}
		// 	console.log(a);
		// }}}}

	// 3、块级作用域的出现，实际上使得获得广泛应用的立即执行函数表达式（IIFE）不再必要了。
		// 1)IIFE写法
			// (function(){
			// 	var tmp = .....;
			// 	...
			// }())
		// 2)块级作用域写法
			// {
			//   let tmp = ...;
			//   ...
			// }

		// do表达式
			// 1、本质上，块级作用域是一个语句，将多个操作封装在一起，有返回值
				// {
				// 	let t;
				// 	t = t*t+1;
				// }
				
			// 2、在块级作用域之前加上do，使它变为do表达式，使得块级作用域可以返回值
				// let x = do{
				// 	let t = 1;
				// 	t*t+1;
				// }
				// console.log(x);
}