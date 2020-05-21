/*
 * @Description: 箭头函数
 * @Author: 姚有明
 * @Date: 2020-01-16 14:37:44
 * @LastEditTime : 2020-01-17 11:34:53
 * @LastEditors  : 姚有明
 */
// 关于箭头函数：
let a = () => {
  let num = 1
  return num
}

console.log('函数a调用的结果：', a())

// 箭头函数简写：
// 1. 当箭头函数有且仅有一个形参的时候，包裹形参的小括号可以省略
let b = (x) => {
  return x
}

// 上面的函数等价于：
let c = x => {
  return x
}

console.log('函数b调用的结果：', b(10))
console.log('函数c调用的结果：', c(20))

// 当一个箭头只有返回值的时候，包裹函数体的大括号可以省略
let d = x => {
  return x
}

// 上面的函数等价于：
let e = x => x

console.log('函数d执行的结果：', d(30))
console.log('函数e执行的结果：', e(40))

// --------------------------------------------------
// 有一个问题：如果一个箭头函数里面要返回一个对象，应该怎么返回？
let f = () => {
  return {
    name: 'zhangsan'
  }
}
console.log('函数f执行的结果：', f())

// 如果简写成这样，那么恭喜你，凉了
let g = () => {
  name: 'lisi'
}

console.log('函数g执行的结果：', g()) // 这里会打印 undefined

// 上面的g函数之所以返回 undefined，原因很简单，因为对象的大括号被当成包裹函数体的大括号，函数体没有返回值，所以返回值为undefined
// 如果箭头函数要返回一个对象，正确的写法应该是：
let h = () => ({
  name: 'wangmazi'
})

console.log('函数h执行的结果：', h())

// --------------------------------------------------
// 明白了上面的问题，我们再来看看Vue中的一些东西
// 我们都知道，Vue中，组件的data必须是一个函数，返回一个对象，这个我没试过，但是个人认为是可以以箭头函数形式简写的
// 还有就是组件中的props属性，我们会对每个props指定默认值，那我们就来全面的分析一下props
// export default {
//   props: {
//     msg: {
//       type: String,
//       // Vue官方明确规定：当type是基本数据类型（String、Number、Boolean）时，default直接是键值对
//       default: ''
//     },
//     list: {
//       type: Array,
//       // 然而Vue官方也明确规定，如果type是引用数据类型（Array、Object）时，default尽量是一个函数，然后返回一个对象或者数组
//       default: () => []
//       // 默认写法：default() { return [] }
//     },
//     obj: {
//       type: Object,
//       // 上面的数组是没有问题的，关于对象，上面的箭头函数已经说的很明白了，当然这里只是简写，如果不使用简写就不会有问题
//       default: () => ({})
//       // 默认写法：default() { return {} }
//     }
//   }
// }

let arr = [{age: 3}, {age: 1}, {age: 3}, {age: 2}, {age: 5}, {age: 4}]

// for (let i = 0; i < arr.length - 1; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i].age > arr[j].age) {
//       [arr[i], arr[j]] = [arr[j], arr[i]]
//     }
//   }
// }

let newArr = []
while (arr.length) {
  newArr.push(arr.splice(arr.indexOf(arr.filter(item => item.age === Math.min(...arr.map(item => item.age)))[0]), 1)[0])
}
console.log(newArr)
