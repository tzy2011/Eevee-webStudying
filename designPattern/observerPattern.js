/**
 * 观察者模式
 *  例子：监控
 *      在教室里的学生是被观察者
 *      监控背后的老师是观察者
 *      当被观察者发生了一些条件的时候，观察者就会触发技能
 * 
 * 观察者模式就是监控一个对象的状态，一旦状态发生变化，马上触发技能
 * =>需要两个构造函数来实现
 *      1.创建被观察者{
 *      需要有一个属性，自己的状态
 *      需要一个队列，记录都有谁观察者自己，数组[]
 *      需要一个方法，能设置自己的状态，当我需要改变的时候，能触发这个方法改变状态
 *      需要一个方法，添加观察者
 *      需要一个方法，删除观察者
 * }
 *      2.创建观察者{
 *      需要一个身份证明
 *      需要一个或多个技能
 * }
 */

class Observer {
    // 观察者构造函数
    constructor(name, fn = () => {}) {
        this.name = name
        this.fn = fn
    }
}

// 创建观察者
const Eevee = new Observer('LSP', (state) => {
    console.log(`来点${state}色图`);
})
const yibu = new Observer('NTR', () => {
    console.log(`牛头人`);
})

// 被观察者的构造函数
class Setu {
    constructor(state) {
        this.state = state
        // 数组用来保存观察我的人
        this.observers = []
    }

    // 设置自己的状态
    setState(val) {
        this.state = val

        // 需要把我的所有观察者的技能都触发
        // 遍历 this.observers 依次触发技能
        this.observers.forEach(item => {
            // 告诉观察者我改变了什么状态,同时触发观察者的技能
            item.fn(this.state)
        })
    }

    // 添加观察者
    addObserver(obs) {
        // 判断观察者是否存在，已经存在就不添加了
        this.observers = this.observers.filter(item =>item !== obs)
        this.observers.push(obs)
    }

    // 删除观察者
    delObserver(obs) {
        this.observers = this.observers.filter(item => item !== obs)
    }
}

const pmSeTu = new Setu('未看过')
//给被观察者添加观察者
pmSeTu.addObserver(Eevee)
pmSeTu.addObserver(yibu)
pmSeTu.addObserver(yibu)
pmSeTu.setState('PCR')
console.log(Eevee, yibu);
console.log(pmSeTu);