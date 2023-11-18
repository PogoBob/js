function gcd(a, b) 
{
  if (b === 0) 
  {
    return a;
  } 
  else 
  {
    return gcd(b, a % b);
  }
}


const num1 = 48;
const num2 = 8;
const result = gcd(num1, num2);
console.log(result); 
