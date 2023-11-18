function getSortedArray(array, key) 
{
  if (!Array.isArray(array) || typeof key !== 'string') 
  {
    return "Некорректные входные данные.";
  }

  const newArray = [...array];

  newArray.sort((a, b) => 
  {
    const valueA = a[key];
    const valueB = b[key];

    if (typeof valueA === 'number' && typeof valueB === 'number') 
    {
      return valueA - valueB;
    } 
    else if (typeof valueA === 'string' && typeof valueB === 'string') 
    {
      return valueA.localeCompare(valueB);
    } 
    else 
    {
      return "Неверный тип данных для сравнения.";
    }
  });

  return JSON.stringify(newArray, null, 2);
}

const inputArray = 
[
  { name: 'John', age: 30 },
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 35 }
];

const sortedArray = getSortedArray(inputArray, 'age');
console.log(sortedArray);
