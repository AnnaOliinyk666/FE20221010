// First level:     1)
//         Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

//     То есть дефисы удаляются, а все слова после них получают заглавную букву.

//     Примеры:

//     camelize("background-color") == 'backgroundColor';
//     camelize("list-style-image") == 'listStyleImage';
//     camelize("-webkit-transition") == 'WebkitTransition';
//     P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.

function camelize(str) {
    return str
      .split('-') 
      .map(
        (word, i) => i == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); 
  }
console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

// 2)
//     Задача: написать функцию, принимающую массив чисел
//     и возвращающую сумму всех его положительных элементов и отрицательных
//     чисел отдельно в виде нового массива

//     например функция принимает как аргумент следующий массив
//     arr = [1, -2, 3, 4, -9, 6]

//     и должна вернуть [14, -11]

let arr = [1, -2, 3, 4, -9, 6];
let sumPostiv=0;
let sumNegative=-0;
let newArr = [];
let sum = function(arr){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]<0) {
        sumNegative+=arr[i];
        } else {
            sumPostiv+=arr[i];
        }  
    }
    newArr.unshift(sumNegative);
    newArr.unshift(sumPostiv);
    
    
    return newArr;
    
}

console.log(sum(arr));

//// let arr = function([1, -2, 3, 4, -9, 6]);
// let arr = sumPositiveElement([]);
// let arr = sumNegativeElement([]);

// let sum = function(arrNumbers) {
//   let positive = 0;
//   let negative = 0;
//   for (let i = 0; i < arrNumbers.length; i++) {
//       const element = arrNumbers[i];
//       if (element<0)  {
//          negative+=element
//       }  else {
//           positive+=element
//       }
//   }
//   return [negative,positive]
// }
// console.log(sum([1, -2, 3, 4, -9, 6]))


// let sumPosAndNeg = function(arrNumbers) {
//   let positive = sumWithStatus(arrNumbers,'+');
//   let negative = sumWithStatus(arrNumbers,'-');
//   return [negative,positive]
// }

// let sumWithStatus = function(arrNumbers, status) {
//   let sum = 0;
//   for (let i = 0; i < arrNumbers.length; i++) {
//     const element = arrNumbers[i];
//     if (status === '-' && element<0) {
//       sum+=element
//     }
//     if (status === '+' && element>0) {
//       sum+=element
//     }
//   }
//   return sum;
// }

// console.log(sumPosAndNeg([1, -2, 3, 4, -9, 6]));
