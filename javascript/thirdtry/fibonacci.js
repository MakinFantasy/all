function fibo (n) {
    // if (!fibo._cache) {
    //     fibo._cache = [0, 1];
    // }
    // if (fibo._cache[n] === undefined) {
    //     fibo._cache[n] = fibo(n - 1) + fibo(n - 2);
    // }
    // return fibo._cache[n];

    if (n < 2) {
        return n;
    }
    let num1=0, num2=1;
    for (let i=2; i <= n; i++) {
        num1 += num2;
        num2 = num1- num2;
    }
    return num1 + num2;
}

// for (let i=1; i <= 10; i++) {
//     console.log(i, fibo(i));
// }

console.log(fibo(process.argv[2]));