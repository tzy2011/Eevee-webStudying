# Eevee-webStudying

### ES2021(ES12)
- replaceAll        校验作用
- 数字分隔符         书写比较长的数字的时候方便看
- 逻辑赋值运算符      方便
- Promise.any        同时进行多个异步操作，谁成功算谁，谁比较快算谁
- Intl               可以进行简单的全球化操作


### Mock.js
一种模拟后端接口的解决方案，能让我们提前调用模拟接口，完成前端开发
##### 在vue中使用Mock.js的步骤
- 1.定义接口，在接口中返回mock模拟的数据
- 2.在vue.config.js中配置devServer,在before属性中引入接口路由函数
  代码如下：
  ~~~JavaScript
  module.exports = {
    devServer: {
        // devServer在发送请求时，会先走到before指定的函数中进行处理，如果before中没有对应的接口路由，才会请求外网等
        before: require('./mock/index.js')
    }
  }
- 3.用axios调用接口获取数据
- 4.新建.env.development,定义环境变量MOCK=true/false
- 5.定义接口路由前，判断当前MOCK环境变量是否为true来控制调Mock的数据还是真实的接口来无缝切换
