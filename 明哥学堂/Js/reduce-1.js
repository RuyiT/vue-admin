/*
 * @Description: 
 * @Author: v_renjuyuan
 * @Date: 2020-04-08 15:13:38
 * @LastEditor: yrj_888@163.com
 * @LastEditTime: 2020-04-08 19:14:24
 * @FilePath: \hrc:\Users\v_renjuyuan\Documents\WeChat Files\fkdtd888\FileStorage\File\2020-04\aa.js
 */
// 有一个数组：
let nubmers = [1, 2, 3, 4]

// 有一个初始值：
let initialValue = 100

// 需求：请实现一个方法，这个方法接收一个数组（必传）和一个初始值（可选）：
//   功能1：如果没有传初始值，请返回 一个新的数组，数组中每个元素 是 numbers 中 元素的平方；
//   功能2：如果有传初始值，请返回一个数字，这个数字是 numbers 数组中所有元素 和 初始值 加起来的 总和。

// 比如这样：
/**
 * @param { Array } arr 数组
 * @param { Number } initialValue 初始值
 * @return { Number } 结果
 */
function test3(arr, initialValue) {
  let array
  if(typeof(initialValue) === 'undefined') {
    array = arr.reduce((acc, atr) => {
      acc.push(atr*atr)
      return acc
    },[])
  } else {
    array = arr.reduce((acc, atr) => {
      return acc + atr
    },initialValue)
  }
  return array
  // 请开演...

}
console.log(test3(nubmers, initialValue))
console.log(test3(nubmers))
// 请实现一个方法，这个方法接收一个数组，一个函数（callback)
// 请遍历传进来的这个数组，去调用传进来的这个callback，数组的length是多少（数组里面有多少个元素），就调用多少次callback
// 并且调用callback的时候需要传两个参数给它，一个是当前的元素，一个是当前的下标
/**
 * @param {Aarray} arr 数组
 * @param {Function} callback
 */

 // --------------------------------------------
// 他妈的需求又改了：
// 又需要实现一个方法，这个方法同样接收一个数组，一个函数（callback），
// 请遍历传进来的这个数组，去调用传进来的这个callback，数组的length是多少（数组里面有多少个元素），就调用多少次callback
// 并且调用callback的时候需要传3个参数给它，一个是当前的元素，一个是当前下标，一个是传进来的数组（每次都arr原封不动的传给callback）
// 但是，调用者传进来的callback会有返回值，所以需要你把这些返回值 放到一个数组里面，并且这个数组 最终作为你写的函数 的返回值
let num = 0
 function test2(arr, callback) {
    let a = []
    for(let i = 0; i < arr.length; i++) {
      if(callback(arr[i], i, arr)) {
        a.push(arr[i])
      }
    }
    return a
 }


 let b = test2([1,3,5],function(item, index, arr){
  //  console.log('当前元素：' + item + ';当前下标' + index)
   return item > num
 })
 console.log(b)