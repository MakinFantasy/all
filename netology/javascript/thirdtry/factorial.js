function factorialCalculate (n) {
    if (n === 1) {
        return n;
    }
    return n * factorialCalculate(n-1);
}
let res = factorialCalculate(10);
console.log(res);


const factorial = function calculateFactorial (n) {
   if (n == 1) {
       return n;
   }
   return n * calculateFactorial(n-1);
}

let result = parseInt(factorial(10, 10)); // я просто еблан, соре
console.log(result);
