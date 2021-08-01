const Mock = require('mockjs')

//调用Mock方法，生成模拟数据
var data = Mock.mock({
    /**
     *   'name|rule' :value
     *   'name|min-max': string, // 通过重复string生成一个字符串，重复次数大于等于min，小于等于max
     *   'name|count': string //通过重复string生成一个字符串，重复次数等于count
     */
    'username|1-10': '*',
    // 生成一个数字类型
    'age|18-40': 0,
    /**
     * 数据占位符定义规范
     * @id(): 得到一个随机的id
     * @cname(): 随机生成中文名字
     * date('yyyy-MM-dd'): 随机生成日期
     * @paragraph(): 描述
     * @email(): 邮箱地址
     */
    id: '@id()',
    cname: '@cname()',
    date: '@date(yyyy-MM-dd)',
    title: '@paragraph()',
    email: '@email()'
})

console.log(data);

module.exports = function(app) {
    // 像node中的express框架
    //参数1：接口地址；参数2：服务器处理函数
    app.use('/api/userinfo'), (req,res) => {
        // 将模拟的数据转换成json格式返回浏览器
        res.json(data)
    }
}