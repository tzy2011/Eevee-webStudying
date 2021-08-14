/**
 * 策略模式
 * 
 * 场景：
 * 一个问题匹配多个解决方案，不一定用到哪个解决方案
 * 而且有可能随时增加多个方案
 * 
 * 实现步骤：
 * 1.多种方案以闭包的形式保存起来，对外留一个接口可以添加和减少
 * 2.留下添加折扣和删除折扣的接口
 * 
 * 例子：购物车结算
 *      有好多种折扣计算方式
 */

// 接收价格和折扣种类参数
//↓if else 太多，一旦要新增条件得改源代码

// function calcPrice(price, type) {
//     if (type === '100_10') {
//         price -= 30
//     } else if (type === '200_25') {
//         price -= 25
//     } ...

//     return price
// }
// const res = calcPrice(320, '100_10')

// 策略模式
const calcPriceOut = (function() {

    const sale = {
        '100_10': function(price) {return price -= 10},
        '200-25': function(price) {return price -= 25},
        '80%': function(price) {return price *= 0.8}
    }

    // 这个被return出去的函数，才是calcPrice本体
    function calcPriceIn(price, type) {
        console.log(price,type);
        /**
         * 判断对象里有没有这个折扣类型
         * 如果有就执行
         * 没有就告诉他没有这个折扣类型
         */
        if (!sale[type]) {
            return '没有这个折扣'
        }
        // 找到sale里面指定的那个函数执行计算结果，返回给外面
        const result = sale[type](price)
        return result
    }

    //把函数当做一个对象，向里面添加成员
    calcPriceIn.add = function(type, fn) {
        // 用来添加折扣类型

        //判断折扣是否存在
        if (sale[type]) {
            return '该折扣已经存在'
        } else {
            sale[type] = fn
            return '添加成功'
        }
    }

    // 删除折扣
    calcPriceIn.del = function (type) {
        delete sale[type]
    }

    return calcPriceIn
})()

const res = calcPriceOut(320, '100_10')
const res1 = calcPriceOut.add('100_50',function(price) {return price -= 50})
console.log(res1);
console.log(res);