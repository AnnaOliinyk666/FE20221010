// 1)
// Напишите функцию, которая поверхностно сравнивает два объекта.



// Ожидаемый результат: True если объекты идентичны, false если объекты разные ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true


const data = { a: 1, b: 1 };
const data2 = { a: 1, b: 1 };
const data3 = { a: 1, b: 2 };
const data4 = { a: 2, b: 1 };

function isEqual(obj, obj2) {
    
    for (let key in obj){
        for (let key2 in obj2){
        if (obj[key]!==obj2[key2]) {
            return false;
        } 
        }
    }
   return true
}
console.log(isEqual(data, data2)); // true
console.log(isEqual(data, data3)); // false
console.log(isEqual(data, data4));

// 2)
// Напишите функцию, которая поверхностно находит пересечения объектов и возвращает объект пересечений.


const data5 = { a: 1, b: 2 };
const data6 = { c: 1, b: 2 };
const data7 = { c: 3, b: 4 };
const data8 = { c: 3, b: 4 };


function intersection(obj,obj2) {
  let newObj = {};
    for (let[key] of Object.entries(obj)) {
    if (obj[key]===obj2[key]) {
      newObj = {
        ... newObj,
        [key]: obj[key]
      }
    }
    } 
  return newObj;
}


// Я ее конечно решила но так и не поняла почему оно работает... Само получилось...

console.log(intersection(data5, data6));
console.log(intersection(data6, data7)); 
console.log(intersection(data8, data7)); 

