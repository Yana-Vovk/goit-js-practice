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





// function rot13(message){

//   const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

//   const abcs = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//   const ABCs = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

//   const arrOfLetters = message.split('');

//   let index = 0;

//   let newArr = [];

//   for (let letter of arrOfLetters) {
//          if (abc.includes (letter)) {
//             if (letter === letter.toUpperCase()) {
//               index = ABCs.indexOf(letter);
//               newArr.push(ABCs[index + 13]);
//             } else {
//               index = abcs.indexOf(letter);
//               newArr.push(abcs[index + 13]);       
//           }
//           } else {
//             newArr.push(letter);          
//         } 
//   }
//   const newLine = newArr.join('');
//   console.log(newLine);
//   return newLine;
// }

// rot13("test");
// rot13("Artur");
// rot13("Yana_30_Vovk666");
// rot13("vhjhjHJKlBB68hhHH/'hh");


// function toCamelCase(str) {
//   const arrOfWords = str.includes('-') ? str.split('-') : str.split('_');
//   const newArray = [];
//   newArray.push(arrOfWords[0]);

//   for (let i = 1; i < arrOfWords.length; i += 1) {
//    const arrOfLetters = arrOfWords[i].split('');
//     arrOfLetters.splice(0, 1, arrOfLetters[0].toUpperCase());
//     newArray.push(arrOfLetters.join(''));
//   }
//   console.log(newArray.join(''));
  
// }

// toCamelCase('mann_gegen_mann');
// toCamelCase('Ohne-dich');


var moveZeros = function (arr) {
  // TODO: Program me
  let counter =0;
  const newArr = [];
  for (const value of arr) {
    if (value === 0) {
      counter +=1;
      continue;
    } else {
      newArr.push(value);
    }
  }
  for (let i=0; i<counter; i+=1){
    newArr.push(0);
  }
 console.log (newArr);
}

moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]);