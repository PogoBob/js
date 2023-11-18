function pow(x, n) 
{
  if (n <= 0)
  {
    return "Степень должна быть натуральным числом больше нуля.";
  }
  let result = 1;
  for (let i = 0; i < n; i++)
  {
    result *= x;
  }

  return result;
}

const base = 2;
const exponent = 3;
const result = pow(base, exponent);
console.log(result);
