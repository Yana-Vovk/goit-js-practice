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


// var moveZeros = function (arr) {
//   // TODO: Program me
//   let counter =0;
//   const newArr = [];
//   for (const value of arr) {
//     if (value === 0) {
//       counter +=1;
//       continue;
//     } else {
//       newArr.push(value);
//     }
//   }
//   for (let i=0; i<counter; i+=1){
//     newArr.push(0);
//   }
//  console.log (newArr);
// }

// moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]);


// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Пиши код ниже этой строки
//   for (const key in salaries) {
//     // if (salaries.hasOwnProperty(key)){
//     // totalSalary += salaries.key;
//     console.log (salaries[key]);
//   }
//   // }
  
//   // Пиши код выше этой строки
//   console.log (totalSalary);
// }

// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });


// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Пиши код ниже этой строки
//   let result = 0;
//   for (const item of products){
//    if (item.name === productName){ 
//      result = item.price;
//      break;
//    } else {
//     result = null;
//      break;
//    }
//   }
//   // Пиши код выше этой строки
//   console.log(result);
// }

// // getProductPrice('Рада');
// getProductPrice('Захват');

// const atTheOldToad = {
//   potions: [
//     { name: 'Зелье скорости', price: 460 },
//     { name: 'Дыхание дракона', price: 780 },
//     { name: 'Каменная кожа', price: 520 },
//   ],
//   // Пиши код ниже этой строки
//   getPotions() {
//    console.table (this.potions);
//   },
//   addPotion(potionName) {
//     // for (const potion of this.potions) {
//     //   if (potion === potionName) {
//     //     console.log(`Зелье ${potionName} уже есть в инвентаре!`);
//     //     return;
//     //   }
//     if (this.potions.includes(potionName)) {
//      console.log(`Зелье ${potionName} уже есть в инвентаре!`); 
//     }
//     this.potions.push(potionName);
//     // }
//     // this.potions.push(potionName);
    
//     console.table (this.potions);
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1){
//       if (potionName === this.potions[i].name) {
//         this.potions.splice(i, 1);
//         console.table(this.potions);
//         return;
//       }
//     }
//     console.log (`Зелья ${potionName} нет в инвентаре!`);
    
//   },
//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i += 1) { 
//       if (oldName === this.potions[i].name) {
//         this.potions[i].name = newName;
//         console.table(this.potions);
//         return;
//       }
//     }
//       return `Зелья ${oldName} нет в инвентаре!`;
//   },
//   // Пиши код выше этой строки
// };

// atTheOldToad.getPotions();
// atTheOldToad.addPotion({ name: 'Невидимка', price: 620 });
// // atTheOldToad.removePotion('Зелье скорости');
// // atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф');


// Setup
// const collection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name']
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette']
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: []
//   },
//   5439: {
//     albumTitle: 'ABBA Gold'
//   }
// };

// // Only change code below this line
// function updateRecords(object, id, prop, value) {
//   for (const key in object) {
   
//     if (id.toString() === key) {

//       switch (prop) {
//         case 'albumTitle':
//           if (value === "") {
//             delete object[key].albumTitle;
//             break;
//           }
//           object[key].albumTitle = value;
//           break;
        
//         case 'artist':
//            if (value === "") {
//             delete object[key].artist;
//             break;
//           }
//           object[key].artist = value;
//           break;
        
//         case 'tracks':
//            if (value === "") {
//             delete object[key].tracks;
//             break;
//           }

//           if (object[key].hasOwnProperty('tracks')) {
//             object[key].tracks.push(value);
//             break;
//           }

//           object[key].tracks = [value];
//           break;                
//       }

      
//     } 
//   }
//   console.log (object);
//       return;
// }

// updateRecords(collection, 2468, "tracks", "Free");

// function makePizza(pizzaName, callback) {
//   console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
//   callback(pizzaName);
// }

// makePizza('Роял гранд', function deliverPizza(pizza) {
//   console.log(`Доставляем пиццу ${pizza}.`);
// });


// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// // Пиши код ниже этой строки
// function composeMessage(position) {
// return (`Готовим ${this.dish} для ${this.email}. Ваш заказ ${position+1}-й в очереди.`);
// }

// const messages = orders.map((item, index) => composeMessage.call(item, index));



// console.log(messages);



function StringBuilder (baseValue) {
this.value=baseValue;
}
StringBuilder.prototype.getValue = function(){
return this.value;
}
StringBuilder.prototype.padEnd = function(str){
this.value= `${this.value}${str}`;
}
StringBuilder.prototype.padStart = function(str){
this.value= `${str}${this.value}`;
}
StringBuilder.prototype.padBoth = function(str){
this.value= `${str}${this.value}${str}`;
}
// Пиши код выше этой строки
const builder = new StringBuilder('.');
console.log(builder.getValue()); // '.'
builder.padStart('^');
console.log(builder.getValue()); // '^.'
builder.padEnd('^');
console.log(builder.getValue()); // '^.^'
builder.padBoth('=');
console.log(builder.getValue()); // '=^.^='