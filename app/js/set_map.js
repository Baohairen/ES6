// 1、Set--构造函数，用来生成Set数据结构，类似数组，成员值唯一，无重复值
    const s = new Set();
    [2,3,4,5,4,5,2,3].forEach(x => s.add(x));
    for(let i of s){
        // console.log(i);//2 3 4 5
    }
    // Set函数初始化--可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数
    const set = new Set([1,2,3,4,4]);
    // console.log([...set]);//[1,2,3,4]

    const items = new Set([1,2,3,4,5,5,5,5,5]);
    // console.log(items.size);//5

    function divs () {
        return [...document.querySelectorAll('div')];
    }
    
    const set1 = new Set(divs());
    // console.log(set1.size); // 0

    /*
    Set实例的属性和方法
    1、属性
        1）Set.prototype.constructor：构造函数，默认就是Set函数。
        2）Set.prototype.size：返回Set实例的成员总数。
    2、操作方法
        1）add(value)：添加某个值，返回Set结构本身。
        2）delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
        3）has(value)：返回一个布尔值，表示该值是否为Set的成员。
        4）clear()：清除所有成员，没有返回值。
    3、遍历方法
        1）keys()：返回键名的遍历器
        2）values()：返回键值的遍历器
        3）entries()：返回键值对的遍历器,每次输出一个数组，它的两个成员完全相等
        4）forEach()：使用回调函数遍历每个成员,用于对每个成员执行某种操作，没有返回值
    */

    s.add(1).add(2).add(2);
    // 注意2被加入了两次
    
    s.size // 2
    
    s.has(1) // true
    s.has(2) // true
    s.has(3) // false
    
    // console.log(s.delete(2));//true
    s.has(2) // false
    // Set 结构keys方法和values方法的行为完全一致
    let set3 = new Set(['red','green','blue']);
    for(let item of set3.keys()){
        // console.log(item);
    }//red green blue
    for(let item of set3.values()){
        // console.log(item);
    }//red green blue
    for(let item of set3.entries()){
        // console.log(item);
    }
    // ["red", "red"]
    // ["green", "green"]
    // ["blue", "blue"]

    let set4 = new Set([1,4,9]);
    // set4.forEach((value,key) => console.log(key +':'+value));
    // 1:1
    // 4:4
    // 9:9
// 2、WeakSet-不重复值的集合，成员只能是对象
    const a = [[1,2],[3,4]];
    const ws = new WeakSet(a);
    // console.log(ws);//{[1,2],[3,4]}
// 3、Map
    const m = new Map();
    const o = {p:'hello world'};
    m.set(o,'content');//将对象o当作m的一个键，
    m.get(o);//'content' 读取这个键
    m.has(o);//true
    m.delete(o);//true
    m.has(o);//false
    // Map 也可以接受一个数组作为参数。该数组的成员是一个个表示键值对的数组
    const map = new Map([
        ['name', '张三'],
        ['title', 'Author']
    ]);
      
    map.size // 2
    map.has('name') // true
    map.get('name') // "张三"
    map.has('title') // true
    map.get('title') // "Author"
    /*
    1)size属性：返回Map结构的成员总数
    2）set(key,value):设置键名key对应的键值为value，然后返回整个 Map 结构
    3)get(key)--读取key对应的键值，如果找不到key，返回undefined
    4)has(key)
    5)delete(key)
    6)clear()
    */
    const m1 = new Map();
    
    m1.set('edition', 6)        // 键是字符串
    m1.set(262, 'standard')     // 键是数值
    m1.set(undefined, 'nah')    // 键是 undefined
    console.log(m1.get(262));//standard