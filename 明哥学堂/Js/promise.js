/*
 * @Description: 请注意：如果要运行这个文件，需要注释掉第42行以后的内容
 * @Author: 姚有明
 * @Date: 2019-12-17 10:17:47
 * @LastEditTime: 2019-12-17 10:49:40
 * @LastEditors: 姚有明
 */

// 先解释一下promise最基本的用法
// 假如我们现在要使用promise发起一个ajax请求
// new Promise 的时候，接收一个函数，这个函数需要两个形参，两个形参又是函数
// resolve：一般是表示成功回调
// reject：表示失败回调

let flag = true

let test = new Promise(function (resolve, reject) {
    setTimeout(() => {
        if (flag) resolve('成功')
        else reject('失败')
    }, 1000)
})

// test.then的时候，又需要传入一个回调函数，回调函数的形参，就是你在promise中resolve传的值
// 也就是说这里的data就是第19行resolve传入的'成功'
test
    .then(data => {
        console.log(data)
    })

    // test.catch的时候，又需要传入一个回调函数，回调函数的形参，就是你在promise中reject传的值
    // 也就是说这里的err就是第20行reject传入的'失败'
    // 当然，一个promise只能返回一种状态，意思就是执行了resolve，就不会执行reject
    // 也就是说，执行了.then，就不会执行.catch
    .catch(err => {
        console.log(err)
    })

// 所以，当第15行的flag为true的时候，进入第19行，然后执行resolve，把'成功'传入，然后到第27行，执行.then
//     当第15行的flag为false的时候，进入第20行，然后执行reject，把'失败'传入，然后到第35行，执行.catch

// 如果上面明白了，那么我们现在来用一段伪代码模拟一个接口请求
let ajaxRequest = new Promise((resolve, reject) => {
    // 开始请求接口，假装我们用的是axios
    axios.get('https://www.baidu.com')
        // 这里表示接口请求成功，那么我们应该把请求到的data用resolve传递给我们new的这个Promise的.then
        .then(data => {
            resolve(data)
        })
        // 这里表示接口请求失败，那么我们应该把错误信息err用reject传递给我们new的这个Promise的.catch
        .catch(err => {
            reject(err)
        })
})

ajaxRequest.then(data => {
    // 所以这里的data就是第48行传给我们的，请求到的接口的数据
    console.log(data)
}).catch(error => {
    // 那么这里的error就是第52行传给我们的，接口返回的错误信息
    console.log(error)
})

