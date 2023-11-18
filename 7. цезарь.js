function cesar(str, shift, action) 
{
  if (typeof str !== 'string' || typeof shift !== 'number' || (action !== 'encode' && action !== 'decode')) 
  {
    return "Некорректные входные данные.";
  }

  const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
  const strArray = str.split('');

  const resultArray = strArray.map(char => 
    {
    const isUpperCase = char === char.toUpperCase();
    const lowercaseChar = char.toLowerCase();

    if (alphabet.includes(lowercaseChar)) 
    {
      let index = alphabet.indexOf(lowercaseChar);
      if (action === 'encode') {
        index = (index + shift) % alphabet.length;
      } 
      else 
      {
        index = (index - shift + alphabet.length) % alphabet.length;
      }

      const shiftedChar = isUpperCase ? alphabet[index].toUpperCase() : alphabet[index];
      return shiftedChar;
    } 
    else 
    {
      return char;
    }
  });

  return resultArray.join('');
}

const messageToEncode = "эзтыхз фзъзъз";
const decodedMessage = cesar(messageToEncode, 8, 'decode');
console.log(decodedMessage);
