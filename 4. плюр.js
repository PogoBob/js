function pluralizeRecords(n) 
{
  if (n < 0) 
  {
    return "Значение должно быть неотрицательным.";
  }

  let recordsForm;

  if (n % 10 === 1 && n % 100 !== 11) 
  {
    recordsForm = "запись";
  } 
  else if ((n % 10 >= 2 && n % 10 <= 4) && (n % 100 < 10 || n % 100 >= 20)) 
  {
    recordsForm = "записи";
  } 
  else 
  {
    recordsForm = "записей";
  }

  return `В результате выполнения запроса было найдено ${n} ${recordsForm}`;
}

const resultCount = 2008;
const resultString = pluralizeRecords(resultCount);
console.log(resultString); 
