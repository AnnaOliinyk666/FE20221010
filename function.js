// function someChange (параметры через запятую){
//     тело функции
// }

// function showGreeting (message,number){
//     console.log (message,number);
// }

// showGreeting('Hello',500);

//callback - вызов функции  в фунции
// function showInCns (callback, number){
//     const mathResult = callback(number);
//     console.log(mathResult);
// }
// function squer (number){
//     return number*number;
// }
// function negative (number){
//     return number/number;
// }

// showInCns(squer,10);
// showInCns(negative,10);

//String
// let str ='Hello';
// console.log(
//     str[0].toLocaleLowerCase,
//     str[1].toLocaleUpperCase,
//     str.length
// )

//Array
// let fruits =[
//     "apple",
//     "orange",
//     "plumb"
// ];
// console.log(fruits);
// let count=fruits.length;
// let apple = fruits[0];
// fruits[2] = 'grape';
// console.log(fruits);

//можно завернуть разные типы данных - функции, числа, булеаны, массивы и их можно смешивать
// console.log (arr[1][2][1])- обращение к массиву в массиве к конкретному значению
// console.log (arr[3]()) - вызов функции в массиве

//push добавляет элемент в конец массива
// fruits.push('plumb');
// console.log(fruits);

//pop delete last element in array

// fruits.pop();
// console.log(fruits);

// shift delete first element in array
// unshift add element on begining of array

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]) ;
// }

// let fruits2 = [
//     "apples",
//     "orange",
//     "plumbs"
// ];
// let shopingCard = fruits2;
// shopingCard.push("banana");

// 3) напишите функцию, которая
// принимает как аргумент массив
// и возвращает сумму всех чисел, которые в нем есть
// или если чисел нет, то возвращает ноль

// let sum = function (arr) {
//   let result = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == "number") {
//       result += Number(arr[i]);
//     } else if (typeof arr[i] === "string") {
//       result += String(arr[i]).length;
//     }
//   }
//   return result;
// };
// let arr1 = [1, 8, 10, 15];
// let arr2 = [1, 8];
// let arr3 = [0];
// let arr4 = ["hello", 12, "my", "20"];
// console.log(sum(arr1));
// console.log(sum(arr2));
// console.log(sum(arr3));
// console.log(sum(arr4));

let sumArrNumbers = function (arr) {
  let acamulate = 0;
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    let arrElement = arr[i];

    if (!isNaN(Number(arrElement))) {
      acamulate += Number(arrElement);
      counter++;
    }
  }

  return [`summary-${acamulate}`, `lenght-${arr.length}`, counter];
};

let arr1 = [1, 2, "3", "Vasia", 3];

console.log(sumArrNumbers(arr1));

// console.log(typeof Number('3') === 'number')

// console.log(Number('3'));
// console.log(Number('Vasia'));




// Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. 
 // Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. 
 // Функция должна возвращать true или false.

 function inArray(text,arrNew){
    for (let i = 0; i < arrNew.length; i++) {
        let element = arrNew[i];
        
        if(element===text){
            return  true;
        } 
        
    }
    return false;
 }

 let arrayNew = ['home', 'dance', 'party']
 let textNew = 'dance';
 let textNew2 = 'dance155';

 console.log(inArray(textNew,arrayNew));
 console.log(inArray(textNew2,arrayNew));