// 变量的结构赋值
function clickme7(){
	// 变量的解构赋值的基本用法
	// let [x,y] = [1,2];
	// console.log(x,y);
	// “模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值
	// let [a,[b],d] = [1,[2,3],4];
	// console.log(a,b,d);
	// 如果等号的右边不是数组（或者严格地说，不是可遍历的结构，参见《Iterator》一章），那么将会报错。
	// let [foo] = 1;//报错

	// let [x, y, ...z] = ['a'];
	// console.log(z);  //  结果为[]

	//???
	// function* fibs(){
	// 	let a = 0;
	// 	let b = 1;
	// 	white(true){
	// 		yield a;
	// 		[a,b] = [b,a+b];
	// 	}
	// }
	// let[first,second,third,fourth,fifth,sixth] = fibs();
	// sixth
	// console.log(sixth);
	//???
}
// 对象的解构赋值
function clickme8(){
	// let {foo,bar} = {foo : 'aaa',bar : 'bbb'};
	// console.log(foo,bar);

	// let {foo:baz} = {foo : 'aaa',bar : 'bbb'};
	// console.log(baz);

	// let obj = {first:'hello',last:'world'};
	// let {first:f,last:l} = obj;
	// console.log(f,l);

	// 嵌套
	let obj = {p : ['hello',{y : 'world'}]};
	// let{p : [x,{y}]} = obj;
	let {p,p:[x,{y}]} = obj;
	console.log(p);
 }
// 闭包
// function f1(){
// 	var n = 999;
// 	nAdd = function(){		
// 		n+=1;
// 		console.log(n);
// 	}
// 	function f2(){
// 		alert(n);
// 	}
// 	// return f2;
// 	return nAdd;
// }
// var result = f1();
// result();
// nAdd();
// result();

// var name = "The sunny";
// var object = {
// 	name:"my object",
// 	getNameFunc:function(){
// 		return function(){
// 			return this.name;
// 		}
// 	}
// }
// alert(object.getNameFunc()());

// function outerFun(){
// 	var a = 0;
// 	console.log('1:'+a);
// }
// var a = 4;
// outerFun();
// console.log('2:'+a);

// let [foo = true] = [];
// console.log(foo)
// let [x,y = ''] = ['a',undefined];
// console.log(x,y);
// let [x = 1] = [null];
// console.log(x);

// function f(){
// 	console.log('aa');
// }
// let [x = f()] = [undefined];
// console.log(typeof f);
// f();

// let x;
// if([1][0] === undefined){
// 	x = f();
// }else{
// 	x = [1][0];
// }
// 数值和布尔值的解构赋值
// let {toString : s} = 123;
// console.log(s);
// let {toString : s} = true;
// s === Boolean.prototype.toString;
// console.log(typeof s);
// let num = [[1,2],[3,4]].map(([a,b])=>a+b);
// console.log(num);
// function move({x,y} = {x:0,y:0}){
// 	return [x,y];
// }
// console.log(move({x:3}));
// let x = 1;
// let y = 2;
// [x,y] = [y,x];
// console.log([x,y]);
// const map = new Map();
// map.set('first','hello');
// map.set('second','world');
// for(let [key,value] of map){
// 	console.log(key+' is '+value);
// }
// for(let [,value] of map){
// 		console.log(value);
// 	}