// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.


let user = {};
user.name = 'john';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;
console.log(user);



// Проверка на пустоту
// Напишите функцию isEmpty(obj), которая возвращает true, 
// если у объекта нет свойств, иначе false.

// Должно работать так:

// let isEmpty2 = obj =>{
//     for (const key in obj) {
//         // console.log(key);
//         return false;
//     }
//     return true;
// }

let schedule = {};
console.log( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
console.log( isEmpty(schedule) ); // false


function isEmpty(obj) {
    for (const key in obj) {
        // console.log(key);
        return false;
    }
    return true;
}



let helpers = {
     isEmpty : obj => {
        for (const key in obj) {
            // console.log(key);
            return false;
        }
        return true;
     }
};

console.log(helpers.isEmpty(schedule));
console.log(helpers.isEmpty({}));