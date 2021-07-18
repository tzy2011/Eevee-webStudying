let str = `abc aaa asde`
console.log(str.replaceAll(/a/g, '2')); // 2bc 222 2sde
// console.log(str.replaceAll(/a/,'2')); //报错 String.prototype.replaceAll called with a non-global RegExp argument
//replaceAll必须是全局，确保替换一定是替换所有