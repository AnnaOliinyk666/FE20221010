// 31.10.2022


// 1)
// Подсчёт количества свойств объекта
// Напишите функцию count(obj), которая возвращает количество свойств объекта:


let user = {
   name: 'John',
   age: 30,
   salary: 1000
};
console.log( count(user) ); // 2

function count(obj) {
    let count = 0;
    for (const key in obj) {
        count+=1;
    }
    return count;
}




// 2)
// Максимальная зарплата
// У нас есть объект salaries с зарплатами:


// let salaries = {
//    "John": 100,
//    "Pete": 300,
//    "Mary": 250
// };


function topSalary(salaries) {

    let topSal=0;
    let nameTop;
    for (let salary of Object.values(salaries)) {
        for (let name of Object.keys(salaries)) {
            if (topSal<salary) {
                topSal = salary;
                nameTop = name;
                return nameTop + " " + topSal; 
              }
            
        }
      
    }
    return null;
  }
  
  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  let salaries2 = {};
  
  alert( topSalary(salaries) ); 
  alert( topSalary(salaries2) ); 

// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.


// Если объект salaries пустой, то нужно вернуть null.


