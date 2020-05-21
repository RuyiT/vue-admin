/*
 * @Description: map
 * @Author: 姚有明
 * @Date: 2019-12-05 18:04:36
 * @LastEditTime: 2019-12-05 18:11:22
 * @LastEditors: 姚有明
 */
Array.prototype.myMap = function(callback) {
    let result = []
    // 按照官方的说法，map会把每一个元素的执行结果，放到一个新的数组，也就是我们这里的result
    for (let i = 0; i < this.length; i++) {
        // result.push(callback(this[i], i, this)) // 这里的参数分别代表：当前元素，当前下标，源数组
        result.push('函数体返回的是item < 3 的 this[i]')
    }
    return result
}

let arr = [1, 2, 3, 4]
let a = arr.myMap(item => item * 2) // 注意：这里，每一个元素都有返回值
let b = arr.myMap(item => {
    // 注意，这里对于item >= 3的元素并没有返回，那么返回值默认就是undefined
    // 这就是刚刚久哥说的那个undefined是怎么来的
    if (item < 3) { 
        return item
    }
})

console.log(a)
console.log(b)
