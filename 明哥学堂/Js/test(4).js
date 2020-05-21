/*
 * @Description: 
 * @Author: 姚有明
 * @Date: 2019-12-18 18:21:09
 * @LastEditTime : 2019-12-18 18:23:46
 * @LastEditors  : 姚有明
 */
const a = 1
const b = 'hello world'
const c = [1, 2, 3]
const d = {name: 'd'}

// 下面这4种方式，在node中会报错，因为const是声明常量的，不允许改变
// a = 2
// b = 'hello'
// c = [100, 200, 300]
// d = {name: 'wang8'}

// 但是这样改，是没有问题的
c.push(88888)
d.age = 888

console.log(a)
console.log(b)
console.log(c)
console.log(d)
