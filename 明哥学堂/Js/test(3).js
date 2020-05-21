// 1. 首先，这是一个函数表达式赋值给了 factorial，也就意味着你再第二行后面的任意位置可以调用factorial
var factorial = function fac(n) {

    // return n < 2 ? 1 : n * fac(n - 1) // 2. 这句代码给你翻译一下
    if (n < 2) {
        return 1
    } else {
        return n * fac(n - 1)
    }

    // 3. 那么接下来，把3换成n
    if (3 < 2) {
        return 1
    } else {
        // 4. 很明显，3 不小于 2，执行第20行
        return 3 * fac(3 - 1) // 10. 那么，这里的fac(3 - 1)就是2，最后return 3 * 2
    }

    // 5. 接着展开fac(3 - 1)
    if (2 < 2) {
        return 1
    } else {
        // 6. 2 也不小于 2， 执行第27行
        return 2 * fac(2 - 1) // 9. 那么，这里的fac(2 - 1)就是1，然后return 2 * 1就是第16行fac(3 - 1)的结果
    }

    // 7. 再展开fac(2 - 1)
    if (1 < 2) {
        // 8. 1 小于2成立，return 1，好，现在请把代码从下往上看，这里的return 1就是第24行fac(2 - 1)的结果
        return 1
    } else {
        return 1 * fac(1 - 1)
    }
};

// 如果要运行，请注释掉第12 - 33行
console.log(factorial(3));
