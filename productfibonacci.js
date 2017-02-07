// Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

// F(n) * F(n+1) = prod.

// productFib(714) # should return [21, 34, true],
//                 # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

// productFib(800) # should return [34, 55, false], 
//                 # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55

function productFib(prod) {
  let fib1 = 0;
  let fib2 = 1;
  while (fib1 * fib2 < prod) {
    let temp = fib2;
    fib2 = fib1 + fib2;
    fib1 = temp;
  }
  return [fib1, fib2, prod === fib1 * fib2]
}