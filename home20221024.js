// First level: 1. Напишите следующую функцию, которая принимает некий массив данных.

// если в массиве только строковый тип данных, то функция должна находить самую длинную строку и возвращать массив из двух элементов - эту строку и её индекс исходном массиве

// если в массиве только цифры, то функция должна находить самую большую цифру и возвращать массив из двух элементов - из этой цифры и её индекса в исходном массиве

// во всех остальных случаях (если там другие типы данных или же они смешаны), то функция должна возвращать массив из двух элементов - первый это строка 'неверный тип данных в массиве', а второй элемент это общая длина массива.

let arr1 = ["привет", true, 65];
let arr2 = [3, [], false];
let arr3 = ["js", "java", "script", "redButton"];
let arr4 = [1, 8, 12, 5];

function stringLong(arr) {
  let strLong = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (String(arr[i]).length > strLong) {
      strLong = String(arr[i]).length;
      count = i;
    }
  }
  return [strLong, count];
}

function numberMax(arr) {
  let numMax = arr[0];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > numMax) {
      numMax = arr[i];
      count = i;
    }
  }
  return [numMax, count];
}

// console.log(numberMax(arr4));
// console.log(stringLong(arr3));

function otherType(arr) {
  return ["неверный тип данных в массиве", arr.length];
}

// console.log(otherType(arr2));

function arrString(arr) {
  let status = true;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "string") {
      status = false;
    }
  }

  return status;
}

function arrNumbers(arr) {
  let statusNum = true;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      statusNum = false;
    }
  }

  return statusNum;
}

function result(arr) {
  if (arrString(arr)) {
    return stringLong(arr);
  } else if (arrNumbers(arr)) {
    return numberMax(arr);
  } else {
    return otherType(arr);
  }
}
console.log(result(arr4));

// (Необязательная задача) Напишите функцию которая будет принимать три массива с любыми данными и объединять их в один, новый массив и возвращать его. В зависимости от типа данных вы должны упорядочить данные. Сначала добавляйте только строки, затем цифры, затем булевы значения, все остальные значения могут быть в произвольном порядке добавлены далее.

// Пример как должна работать функция.
// let result toHardThreeOrder(['привет', true, 65],[3, [], false], ['js', 'java', 'script', 'redButton'])
// console.log(result)// ['привет', js', 'java', 'script', 'redButton', 3, 65, true, false, []]

function task2 (arr1,arr2,arr3) {
    let arrConcat = arr1.concat(arr2, arr3);
let arrStr = [];
let arrNum = [];
let arrBoolean = [];
let arrMix = [];

arrConcat.forEach((element) => {
  if (typeof element === "number") {
    arrNum.push(element);
  } else if (typeof element === "string") {
    arrStr.push(element);
  } else if (typeof element === "boolean") {
    arrBoolean.push(element);
  } else {
    arrMix.push(element);
  }
});
let result = arrStr.concat(arrNum, arrBoolean, arrMix);
return result;
}

console.log(task2(arr1,arr2,arr3));
