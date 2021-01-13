// const monthOfBirth = prompt("In which month were you born?");
// if (monthOfBirth === null) {
//     console.log("You didn't enter a month");
// } else {
//     const month = monthOfBirth.toLowerCase();
//     switch (month) {
//         case 'may':
//         case 'march':
//         case 'april':
//             console.log('You were born in spring');
//             break;
    
//         case 'december':
//         case 'january':
//         case 'february':
//             console.log('You were born in winter');
//             break;
    
//         case 'june':
//         case 'july':
//         case 'august':
//             console.log('You were born in summer');
//             break;
    
//         case 'september':
//         case 'october':
//         case 'november':
//             console.log('You were born in autumn');
//             break;
    
//         default:
//             console.log('You entered incorrect data');
//     }
// }


// function findLongestWord(string) {
 
//     const array = string.split(' ');
//     console.log (array);
//   let biggest = 0;
//     let wordLength = 0;
//     let longWord = 0;
//   for (let i = 0; i < array.length; i += 1){
//       wordLength = array[i].length;
//       console.log(wordLength);
//   if (wordLength > biggest) {
//       biggest = wordLength;
//       longWord = array[i];
//   }
//     }
//     console.log('The longest: ',biggest, longWord);
//   return longWord;
// }

// findLongestWord('The quick brown fox jumped over the lazy dog');



// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Пиши код ниже этой строки
//   let integer = min;
//   while (integer <= max) {
//     console.log(integer);
//     numbers.push(integer);
//     console.log('Array: ',numbers);
//     integer += 1;
//   }
//   // Пиши код выше этой строки
//   return numbers;
  
// }

// createArrayOfNumbers(29, 34);

// function digPow(n, p) {
//   const arrayOfSymbols = (n.toString()).split('');
//   let summ = 0;

//   for (let symbol of arrayOfSymbols) {    
//      summ += Math.pow(Number(symbol), p);
//     p += 1;
//   }

//   const result = (summ / n)%1 > 0? -1 : summ / n;
 
//     console.log(result);
  
// }

// function findEvenIndex(arr)
// {
//   let sumLeft = 0;
//   let sumRight = 0;

//   for (let i = 1; i < arr.length; i += 1){
//     sumRight += arr[i];
//   }

//   if (sumRight !== 0) {
  
//     for (let i = 1; i < arr.length; i += 1) {
//       sumRight -= arr[i];
//       sumLeft += arr[i-1];

//       if (sumRight === sumLeft) {
//         console.log(i);
//         return i;     
//       }
//     }
//         console.log(-1);
//         return -1;
// }
//   console.log(0);
//   return 0;
// }





function rot13(message){
  // const absLowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  // const absUpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const abc = [['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'], ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']];

  const arrOfLetters = message.split('');
  // console.table(arrOfLetters);

  for (let letter of arrOfLetters) {
    for (let i = 0; i < 26; i += 1){
      for (let j = 0; j < 26; j += 1){
        console.table(letter);
        if (letter === abc[i][j]) {
          console.log(letter,'-Это буква');
        } else { console.log(letter, '-Не буква');}
      }       
           }
    console.log(letter === letter.toUpperCase());

    
}

}

// rot13("test");
rot13("Artur");
// rot13("Yana_30_Vovk666");

