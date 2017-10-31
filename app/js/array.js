// 1、扩展运算符(...)--将数组转为用逗号分隔的参数序列
    // console.log(...[1,2,3]);
    // 1)替代数组的apply方法
    // ES5的写法
    // function f(x,y,z){
    //     console.log(x,y,z);
    // }
    // var args = [0,1,2];
    // f(args);//[0,1,2] undefined undefined
    // f.apply(null,args);//0 1 2
    // ES6的写法
    // function f(x, y, z) {
    //     console.log(x,y,z);
    // }
    // let args = [0, 1, 2];
    // f(...args);//0 1 2
// 2、Array.from()--将两类对象转为真正的数组,只要是部署了Iterator接口的数据结构，Array.from都能将其转为数组。
    // let arrayLike = {
    //     '0':'a',
    //     '1':'b',
    //     '2':'c',
    //     length:3
    // };
    // ES5的写法
        // var arr1 = [].slice.call(arrayLike);
        // console.log(arr1);//['a','b','c']
    // ES6的写法
        // var arr2 = Array.from(arrayLike);
        // console.log(arr2);//['a','b','c']
    //NodeList对象
        // let ps = document.querySelectorAll('p');
        // console.log(ps);//[p,p,p]
        // Array.from(ps).forEach(function(p){
        //     console.log(p);//<p>2</p><p>3</p><p>1</p>
        // })
    // 如果参数为一个真正的数组，Array.from会返回一个一模一样的新数组
    Array.from([[1,2,3]]);//[1,2,3]
    // 将字符串转为数组，然后返回字符串的长度
    function countSymbols(string){
        console.log(Array.from(string).length);
    }
    // countSymbols('hello');
// 3、 Array.of()--将一组值，转换为数组,Array.of基本上可以用来替代Array()或new Array()，
    // 并且不存在由于参数不同而导致的重载。它的行为非常统一
    // console.log(Array.of(3,11,2));//[3,11,8]
    // console.log(Array.of(3));//[3]
    // console.log(Array.of(3).length);//1 
    // 因为参数个数的不同，会导致Array()的行为有差异。
    Array() // []
    Array(3) // [, , ,]
    Array(3, 11, 8) // [3, 11, 8]   
// 4、数组实例的copyWithin()--在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组
    // 使用此方法，会修改当前数组。
    // Array.prototype.copyWithin(target,start = 0,end = this.lenth)
                            // (1)     (2)     (3) 
    /*
    (1)target(必需):从该位置开始替换数据 
    (2)start（可选）：从该位置开始读取数据，默认为0。如果为负值，表示倒数
    (3)end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数
    */
    // [1,2,3,4,5].copyWithin(0,3);//[4,5,3,4,5]
// 5、数组实例的find()和findIndex()
    /*
    (1)find():找出第一个符合条件的数组成员，，若无，返回undefined
    (2)findIndex()）：返回第一个符合条件的数组成员的位置，若无符合条件的，返回-1
    */
    let ar1 = [1,4,-4,10].find((n)=>n<0);
    // console.log(ar1);//-4
    [1, 5, 10, 15].findIndex(function(value, index, arr) {
        return value > 9;
    }); // 2
// 6、数组实例的fill()--使用给定值，填充一个数组
    ['a','b','c'].fill(7);//[7,7,7]
    // fill方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。
    ['a', 'b', 'c'].fill(7, 1, 2)
    // ['a', 7, 'c']
// 7、数组实例的entries()-对数组键值对的遍历，keys()-对数组键名的遍历、values()-对数组键值的遍历
    for (let index of ['a', 'b'].keys()) {
        // console.log(index);
    }
    // 0
    // 1
    
    // for (let elem of ['a', 'b'].values()) {
        // console.log(elem);
    // }
    // 'a'
    // 'b'
    
    for (let [index, elem] of ['a', 'b'].entries()) {
        // console.log(index, elem);
    };
    // 0 "a"
    // 1 "b"
// 8、数组实例的 includes()-返回一个布尔值，表示某个数组是否包含给定的值，与字符串的includes方法类似
    [1, 2, 3].includes(2);     // true
    [1, 2, 3].includes(4);     // false
    // 该方法的第二个参数表示搜索的起始位置，默认为0
    [1, 2, 3].includes(3, 3);  // false
// 9、数组的空位