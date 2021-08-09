/**
 * 单例模式：
 * 一个构造函数一生只能有一个实例，不管new多少次，都是一个实例
 * 应用：自定义弹出层
 * 
 * 单例模式的核心代码
 *      let instance = null
 *      function singleton() {
 *          if(!instance)
 *          instance = 实例对象
 *          return instance
 * }
 */

function Person() {
    this.name = 'Eevee'
}

const p1 = new Person()
const p2 = new Person()

console.log(p1, p2);
console.log(p1 == p2); // false

let instance = null

function singleton() {
    if (!instance) {
        instance = new Person()
    }
    return instance
}

// 使用singleton创建实例
const p3 = singleton()
const p4 = singleton()

console.log(p3, p4);
console.log(p3 === p4); // true

console.log('--------------单例模式改造------------------');



const PersonE = (function () {
    // 为了保存构造函数，也写进闭包里
    // 真实函数体
    function PersonE(age, sex) {
        this.name = 'yibu'
        this.age = age
        this.sex = sex
    }

    // class PersonV {
    //     constructor(name, age) {
    //         //构造器中的this指向实例对象
    //         this.name = name
    //         this.age = age
    //     }
    //     //一般方法
    //     speak() {
    //         //speak方法放在哪里？在类的原型对象上，是提供给实例用的
    //         console.log(`我叫${this.name}，我的年龄是${this.age}`);
    //     }
    // }

    PersonE.prototype.saySeTu = function () {
        console.log('来点色图');
    }

    // 闭包延长生命周期，这个变量在一个不会被销毁的函数执行空间里面，所以会一直存在
    let instance = null

    // 全局变量接收的函数
    return function (...arg) {
        if (!instance) {
            instance = new PersonE(...arg)
        }
        return instance
    }
})()

// new 可加可不加
const p5 = new PersonE(24, '男')
const p6 = new PersonE(20, 'nv') // 不会执行了，依然会生成24，男 

console.log(p5, p6);
p6.saySeTu();
console.log(p5 === p6);