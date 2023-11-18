function fibb(n) {
  if (n < 0 || n > 1000) 
  {
    return "Значение n должно быть в диапазоне от 0 до 1000 включительно.";
  }

  if (n === 0) 
  {
    return 0;
  } 
  else if (n === 1) 
  {
    return 1;
  } 
  else 
  {
    return fibb(n - 1) + fibb(n - 2);
  }
}

const fibonacciNumber = fibb(8);
console.log(fibonacciNumber); 
