/*
 * @Description: hello world
 * @Author: 姚有明
 * @Date: 2020-01-07 16:53:58
 * @LastEditTime : 2020-01-07 17:55:13
 * @LastEditors  : 姚有明
 */
let obj = {
  zhangsan: {
    sex: 1,
    age: 18
  },
  lisi: {
    sex: 1,
    age: 30
  },
  wangmazi: {
    sex: 1,
    age: 88
  },
  zhanggui: {
    sex: 2,
    age: 20
  }
}

// 传统的遍历对象方法
// for (let key in obj) {
//   console.log(key)
//   console.log(obj[key])
// }

// 使用Object.keys()让对象可以使用数组的方法
// 场景一：过滤出obj中sex === 2的元素
// 传统
let result = {}
for (let key in obj) {
  if (obj[key].sex === 2) {
    result[key] = obj[key]
  }
}
console.log(result)

// Object.keys()
let result1 = {}
Object.keys(obj).forEach(key => {
  if (obj[key].sex === 2) {
    result1[key] = obj[key]
  }
})
console.log(result1)

// 到这里你会发现，妈的，还不如使用for...in，那么别慌，我们继续往下
// 场景二：统计一下obj里面，女生有多少人（sex === 2就表示女生）
// 传统
let total = 0
for (let key in obj) {
  if (obj[key].sex === 2) {
    total++
  }
}
console.log(total)

// Object.keys()
let total1 = Object.keys(obj).filter(key => obj[key].sex === 2).length
console.log(total1)

// 哦豁，好像是有点区别了，稳住，我们继续往下
// 场景三：判断一下obj里面是不是都是男生
// 传统
let flag = true // 先给个默认值，表示全是男生
for (let key in obj) {
  if (obj[key].sex === 2) { // 这里判断，假如有一个是女生，就修改flag
    flag = false
  }
}
console.log(flag) // 打印这里你会发现，妈的就因为张贵一个臭女人，害的flag变成了false

// 然后请骚等，我们想想，这个场景如果是数组的话，是不是首先一定会想起Array.prototype.some和Array.prototype.every，好，继续往下
// 插个嘴：
  // Array.prototype.some() 接收一个函数，返回一个布尔值，只要数组中有一个元素调用这个函数返回true，some就返回true
  // Array.prototype.every() 接收一个函数，返回一个布尔值，只有数组中的所有元素调用这个函数返回true，every才返回true
// 好，继续，Object.keys()
let flag1 = !(Object.keys(obj).some(key => obj[key].sex === 2)) // 只要有一个女的就返回true
let flag2 = Object.keys(obj).every(key => obj[key].sex === 1) // 必须全是男的才返回true
console.log(flag1)
console.log(flag2)

// map（略）

// 好了，最后，我们再回头看看场景一可不可以这样：
let result2 = Object.keys(obj).reduce((acc, key) => {
  if (obj[key].sex === 2) {
    acc[key] = obj[key]
  }
  return acc
}, {})
console.log(result2)

// 或者这样：
let result3 = Object.keys(obj).filter(key => obj[key].sex === 2).reduce((acc, key) => (acc[key] = obj[key]) && acc, {})
console.log(result3)

// Sa You La La !!!

