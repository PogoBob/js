function minDigit(x) 
{
  if (x < 0) 
  {
    return "Число должно быть неотрицательным.";
  }

  const numStr = x.toString();

  let min = 9;

  for (let i = 0; i < numStr.length; i++) {
    const digit = parseInt(numStr[i]);
    if (digit < min) {
      min = digit;
    }
  }

  return min;
}

const number = 31513530414;
const result = minDigit(number);
console.log(result);