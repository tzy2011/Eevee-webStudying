 //对列表进行格式化
const list = ['a','b','Eevee','yibu']
console.log(new Intl.ListFormat('zh').format(list));//a、b、Eevee和yibu
console.log(new Intl.ListFormat('en-GB').format(list));//a, b, Eevee and yibu



 let oDate = new Date();
 console.log(new Intl.DateTimeFormat('zh').format(oDate));// 2021/7/18
 console.log(new Intl.DateTimeFormat('en-GB').format(oDate));// 18/07/2021

