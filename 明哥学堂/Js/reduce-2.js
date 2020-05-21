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
function test(arr, initialValue) {

  // 请开演...
  // 如果没有没有传初始值，返回一个数组，并且这个数组里面的元素是传进来的数组中元素的平方
  if (!initialValue) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
      newArr.push(arr[i] * arr[i])
    }
    return newArr
  } else {
    // 如果传了初始值，返回一个 Number，这个 Number 是数组中所有元素的 和 + 初始值
    let result = initialValue
    for (let i = 0; i < arr.length; i++) {
      result += arr[i]
    }
    return result
  }

}

// -------------------------------------------
// 现在需求改了:
// 请再实现一个方法，这个方法接收一个数组，一个函数(callback)，
// 请遍历传进来的这个数组，去调用传进来的这个callback，数组的length是多少（数组里面有多少个元素），就调用多少次callback
// 并且调用callback的时候需要传2个参数给它，一个是当前当前的元素，一个是当前下标
/**
 * @param { Array } arr 数组
 * @param { Function } callback
 */
function test2(arr, callback) {


}
// 以上方法的测试代码：
test([1, 3, 5], function(item, index) {
  // 如果你上面方法写的没有问题的话，这个函数会打印3次：
  // 依次：
  //    当前元素：1；当前下标：0
  //    当前元素：3；当前下标：1
  //    当前元素：5；当前下标：2
  console.log('当前元素：' + item + '；当前下标：' + index)
})
