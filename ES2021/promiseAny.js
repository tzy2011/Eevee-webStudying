/**
 * promise.any([])
 * 假设s1,s2都坏了，s3成功了数据就是来自s3的，如果都是好的那么谁的数据先传回来就是谁的
 * 
 * 
 * 【注意】和promise.race([])的区别{
 *      promise.any([]) ：以第一个成功的为准(失败不管)
 *      promise.race([])：以第一个完成的为准(只以时间为准，如果最快返回的那个失败了，那么哪怕后面的成功了也不会有结果)
 * }
 */
(async ()=>{
    // await Promise.any([
    //     request('//s1.abc.com/data'),
    //     request('//s2.abc.com/data'),
    //     request('//s3.abc.com/data')
    // ])
    
    let data = await Promise.any([
        new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve(9)
            },500)
        }),
        new Promise((resolve,reject) => {
            setTimeout(() => {
                // resolve(12)
                reject()
            },200)
        })
    ])
    console.log(data); //resolve(12) -> data是12 ,因为下面的定时器先返回数据
    //reject() -> data是9 因为下面的失败了只有上面的返回数据

    let data1 = await Promise.race([
        new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve(9)
            },500)
        }),
        new Promise((resolve,reject) => {
            setTimeout(() => {
                // resolve(12)
                reject()
            },200)
        })
    ])
    console.log(data1);//报错：test1.html:81 Uncaught (in promise) undefined 因为下面的快但是失败了race就不管了
})()