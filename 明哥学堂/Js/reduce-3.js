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
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i)
  }
}
// 以上方法的测试代码：
test2([1, 3, 5], function (item, index) {
  // 如果你上面方法写的没有问题的话，这个函数会打印3次：
  // 依次：
  //    当前元素：1；当前下标：0
  //    当前元素：3；当前下标：1
  //    当前元素：5；当前下标：2
  console.log('当前元素：' + item + '；当前下标：' + index)
})

// --------------------------------------------
// 他妈的需求又改了：
// 又需要实现一个方法，这个方法同样接收一个数组，一个函数（callback），
// 请遍历传进来的这个数组，去调用传进来的这个callback，数组的length是多少（数组里面有多少个元素），就调用多少次callback
// 并且调用callback的时候需要传3个参数给它，一个是当前的元素，一个是当前下标，一个是传进来的数组（每次都arr原封不动的传给callback）
// 但是，调用者传进来的callback会有返回值，所以需要你把这些返回值 放到一个数组里面，并且这个数组 最终作为你写的函数 的返回值
/**
 * @param { Array } arr 数组
 * @param { Function } callback 回调函数
 * @return { Array } 结果
 */
function test3(arr, callback) {
  let results = []

  // 你需要在这里遍历arr，依次执行callback，并且callback有返回值，你需要把返回值 push 到 results 数组中。
  for (let i = 0; i < arr.length; i++) {
    results.push(callback(arr[i], i, arr))
  }

  return results
}

// test3的测试代码：
let test3Result = test3([1, 3, 5], function (item, index, arr) {
  return item * 2
})
console.log(test3Result) // 期望输出：[ 2, 6, 10 ]

// -------------------------------------------
// 然后，需求又改了，同样需要写一个方法，这个方法接收一个数组（必传），一个回调函数（必传），一个初始值（可选），
// 请遍历传进来的这个数组，去调用传进来的这个callback（调用次数：如果传入了初始值，那么调用的次数 = 数组的length，如果没传，那么调用的次数 = 数组的length - 1），
// 调用这个回调函数的时候，你需要传 4 个参数给他，第二个参数是当前的元素，第三个是当前的下标，第四个是把数组原封不动的传过去
// 接下来说说要传给回调函数 的 第一个 参数：
  // 如果调用者提供了初始值（initialValue），那么遍历数组，从下标0开始执行回调函数，并且把 initialValue 作为第一次执行回调函数的第一个参数，
  // 如果调用者没有提供初始值（initialValue），那么遍历数组，从下标1开始执行回调函数，并且把 数组的 第 0 个元素 作为第一次执行回调函数的第一个参数，
  // 除了第一次调用，后面每次调用回调函数，第一个参数，是上一次回调函数的返回值。
// 然后你需要把回调函数最后一次执行的返回值，作为你自己的返回值。

/**
 * @param { Array } arr 数组
 * @param { Function } callback 回调函数
 * @param { Any } initialValue 初始值
 */
function test4(arr, callback, initialValue) {
  // 首先你需要定义一个 result 变量，表示你最终的返回值
  let result = null

  // 你需要根据 initialValue 判断你需要从数组的什么位置开始遍历，并且传什么参数给 callback
  if (initialValue !== undefined) {
    // 有初始值的情况，先 把 initialValue 赋值给 result
    result = initialValue
    // 然后从数组第0个元素开始遍历
    for (let i = 0; i < arr.length; i++) {
      // 这种赋值性质的代码，js引擎会先计算等号右边，把最终的结果赋值给等号左边
      // 思考一下下面这句代码做了什么？
      result = callback(result, arr[i], i, arr)
    }
  } else {
    // 如果没有初始值，那么，吧数组的第0个元素赋值给 result，
    result = arr[0]
    // 然后从数组的第1个元素开始遍历
    for (let i = 1; i < arr.length; i++) {
      result = callback(result, arr[i], i, arr)
    }
  }

  // 将 result 返回
  return result
}