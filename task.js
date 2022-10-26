//заполните массив 10ю символами "х" с помощью циклов.

// let arr1 = [];
// let str = "x";
// for (let i =0; i<10; i++){
//     arr1.push(str);
// }
// console.log(arr1);// ["x","x","x","x","x","x","x","x","x","x"]

//функция принимает что пушнуть и сколько раз и возвращать массив

// function array(what,count){
//     let arrayNew = [];
//     for(let i = 0; i<count;i++){
//         arrayNew.push(what);
//     }
//     return arrayNew;
// }

// console.log(array("john", 5));

// В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31/12/2025'.

// let date = "2025-12-31";

// function reformatDate(str) {
//   return str.split("-").reverse().join("/");
// }
// console.log(reformatDate(date));

//  Дана переменная str, в которой хранится какой-либо текст.
// Реализуйте обрезание длинного текста по следующему принципу: если количество символов этого текста больше заданного в переменной n,
// то в переменную result запишем первые n символов строки str и добавим в конец троеточие '...'.
// В противном случае в переменную result запишем содержимое переменной str.
// let str =
//   "Good morning. We have such a good wather today! and maybe we can go in park?";
// let cutStr = function (str, max) {
//   if (str.lenght <= max) {
//     return str;
//   }
//   return str.slice(0, max) + "...";
// };

// console.log(cutStr(str, 150));
// console.log(cutStr(str, 10));




// let shortingString = function (string, max) {
//   if (string.length <= max) {
//     return string;
//   }
//   return string.slice(0, max) + "...";
// };
// console.log(shortingString(str, 20));
// console.log(shortingString(str, 150));


/// 26.10.2022


// отфильторвываем массив что бы удалить из него определенные елементы

let someArr = ['ttt','fff',555,true, false,undefined,null,0,5,61,1];

function withoutArr2(array, ...deleteData) {
  let filtered = [...array];

  deleteData.forEach((deleteItem)=>{
    filtered = filtered.filter(
      (item)=> item !== deleteItem
    );
  });

  // for (let i = 0; i < deleteData.length; i++) {
  //   const element = deleteData[i];
  //   filtered = filtered.filter(
  //     (item) => item !== element
  //   );
  // }
  
  return filtered;
}

console.log(withoutArr2(someArr,null,5,1,false,555));


