/*
 * @Description: 
 * @Author: 姚有明
 * @Date: 2020-04-08 09:43:48
 * @LastEditTime: 2020-04-08 11:18:12
 * @LastEditors: 姚有明
 */
let numbers = [1, 2, 3, 4]

// reduce 方法描述：

  // 为数组的每一个元素执行一个reducer（也就是我们调用的时候传的回调函数）方法（升序执行），把每次执行的结果（返回值）汇总成单个值，最终返回。

// 带着这个描述，我们来实现为数组 numbers 求和：
let sum = numbers.reduce((acc, crt) => {
  return acc + crt
})
console.log(sum)

// 因为没有提供初始值（也就是调用reduce的第二个参数），所以上面函数的执行顺序是：
  // 1. 直接将数组的第一个元素作为 acc（accumulator）累加器，
  // 2. 将数组的第二个元素作为 crt（currentValue）当前值，
  //    此时 acc = 1， crt = 2，那么：返回值 = 3
  // 3. 回调函数返回了一个结果（acc + crt），当前 reducer 执行完毕，reduce 会把这个结果当作执行下一次回调函数（reducer）的第一个参数（acc），
  //    此时 acc = 3， crt = 3，那么：返回值 = 6
  // 4. 一直循环第3步，直到数组的最后一个元素（numbers中的最后一个元素 为 4），
  //    此时 acc = 6， crt = 4，那么：返回值 = 10
  // 5. 当数组的所有元素都执行结束以后，reduce 会把 最后一次 reducer 的返回值，作为自己的返回值。
  //    所以 此时 sum = 10

// -----------------------------------------------------------

let members = [
  { name: 'aaa', age: 18 },
  { name: 'bbb', age: 19 },
  { name: 'ccc', age: 18 },
  { name: 'ddd', age: 20 },
]
// 有了上面的求和，那么我们再来试试为数组 members 中的 age 求和（这时候，就涉及到了 reduce 的第二个参数：初始值（initialValue））：
let ageSum = members.reduce((acc, crt) => {
  // 注意：这里一定要清楚，acc 是什么数据类型，crt 又是什么数据类型：
    // acc 就是一个累加器，与数组中的元素没有半毛钱关系
    // crt 才是执行 reducer 的当前值
  return acc += crt.age
}, 0) 
console.log(ageSum)

// 因为这里提供了初始值（initialValue），所以上面函数的执行顺序是：
  // 1. 将初始值作为第一次执行 reducer 的 acc（accumulator）累加器，
  // 2. 将数组的第一个元素作为 crt（currentValue）当前值，
  //    此时 acc = 0， crt = {name: 'aaa', age: 18}，返回值 = 0 + crt.age = 0 + 18 = 18
  // 3. 将 18 作为 下一次 reducer 的 acc，
  //    此时 acc = 18， crt = {name: 'bbb', age: 19}，返回值 = 18 + crt.age = 18 + 19 = 37
  // 4. 。。。
  // 5. 当数组的所有元素都执行结束以后，reduce 会把 最后一次 reducer 的返回值，作为自己的返回值。

// ------------------------------------------------------------

// 于是：问题来了，倔强的我们，并不单纯使用 reduce 求和，我们还想要实现一点复杂的逻辑，充分展示 reduce 的高逼格，比如：filter
// 我们想要把 members 中 年龄 === 18 的元素过滤出来放到一个新的数组，怎么办呢？
let result = members.reduce((acc, crt) => {
  // return crt.age === 18 && acc.push(crt) // 一定注意，这个方法绝对不行，理由是：
  // 1. 短路运算符（与/或）：
  //    与：如果 && 前面的表达式成立，会继续计算 && 后面的表达式的结果，如果 && 前面的表达式成立，会直接返回 false
  //    或：如果 || 前面的表达式成立，会直接返回 true，如果前面的表达式不成立，才会继续计算 || 后面的表达式的结果
  // 所以：
  //    假如当前元素的 age === 18 不成立，那么：return crt.age === 18 && acc.push(crt) 就等价于 return false；
  //    那么假如当前元素的 age === 18 成立，那么：return crt.age === 18 && acc.push(crt) 就等价于 return acc.push(crt)，看上去似乎并没有什么问题；
  // 那么：请你再思考一个问题：
  //    数组 的 push 和 unshift 的返回值是什么？

  // 所以，正确的写法是：1. 先将符合条件的元素 push 到 acc（累加器）中，然后再把 acc 返回
  if (crt.age === 18) {
    acc.push(crt)
  }

  return acc

}, []) // 初始值的作用：当我们期望 reduce 返回的数据类型 和 reduce 实际返回的数据类型不一致时，可以通过指定初始值来指定 最终返回值的数据类型。
console.log(result)


