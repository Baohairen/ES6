// 1、函数参数的默认值
    function log(x,y = 'world'){   
        // let y = 2;//error ,参数变量是默认声明的，所以不能用let或const再次声明
        // y = 'lala';
        // console.log(x,y);//hello lala
    }
    log('hello');// hello world
    log('hello','China');// hello China
    log('hello',''); // hello
    //function foo(x,x,y=1){}//error,使用参数默认值，函数不能有同名参数
     
    // 函数的length属性--返回没有指定默认值的参数个数
    /*
    console.log((function (a){}).length);//1
    console.log((function (a = 5){}).length);//0
    console.log((function (a,b,c = 5){}).length);//2
    */
// 2、rest参数（...变量名）--获取函数的多余参数
    function add(...values){
        let sum = 0;
        for(var val of values){
            sum += val;
        }
        // console.log(sum) ;
    }
    add(2,5,3);//10
    // rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错
    // function f(a,...b,c){}//error
    // 函数的length属性，不包括 rest 参数
    /*
    (function(a) {}).length ; // 1
    (function(...a) {}).length;  // 0
    (function(a, ...b) {}).length;  // 1
    */ 
// 3、只要函数参数使用了默认值、解构赋值、或者扩展运算符，那么函数内部就不能显式设定为严格模式，否则会报错
    // 报错
    // function doSomething(a, b = a) {
    //     'use strict';
    //     // code
    // }
// 4、name属性--返回该函数的函数名
    function foo(){
        // console.log(foo.name);
    }
    foo();//foo
// 5、箭头函数(=>)
    var f = v =>v     
    /*等同于*/
    var f = function(v){
        return v;
    }
    // 1)如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分
    var f = () => 5;
    // 等同于
    var f = function () { return 5 };
    
    var sum = (num1, num2) => num1 + num2;
    // 等同于
    var sum = function(num1, num2) {
      return num1 + num2;
    };
    // 2)如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回
    var sum = (num1, num2) => { return num1 + num2; }
    // 3)如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则报错
    // 报错
    // let getTempItem = id => { id: id, name: "Temp" };

    // 不报错
    let getTempItem = id => ({ id: id, name: "Temp" });
// 6、双冒号运算符（::）--左边是一个对象，右边是一个函数，将左边的对象绑定到右边的函数上面
    // foo::bar; 
    // 等同于
    // bar.bind(foo);

    // foo::bar(...arguments);
    //  等同于
    //  bar.apply(foo,arguments);
//7、尾递归，（递归：函数调用自身）
//8、函数参数的尾逗号