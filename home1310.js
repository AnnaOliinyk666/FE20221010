// First level: Напишите функцию, которая будет проверять тип данных (typeof someValue) и если
// это будет строка, то проверять сколько в ней символов, возвращать (return) результат (количество символов в строке - число).


// Количество символов в строке можно узнать применив к строке свойство length через точку. Например выражение 'Hello'.length вернет число 5, если вы вызовите его через консоль, аналогично и для переменной, которая содержит строку. Например:


// let someString = 'Hello';
// console.log(someString.length) // 5


// если это значение присланное в функцию будет число, то его нужно переводить в строку (String(someValue)) и возвращать из функции количество символов в этой преобразованной из числа строке.


// если это значение присланное в функцию будет boolean - true или false, то его нужно переводить в строку (String(someValue)) и возвращать из функции количество символов в этой преобразованном из boolean значения строке.


// если тип данных не строка и не число и не boolean, то функция должена вернуть строку  'неверный тип данных'

function chekTypeOfSome (someValue){ 
    if (typeof someValue === 'undefined'){
        return 'неверный тип данных'
    } else {
    return String(someValue).length;
}
}
console.log(chekTypeOfSome ('Hello'));
console.log(chekTypeOfSome (27));
console.log(chekTypeOfSome (2<3));
console.log(chekTypeOfSome (null));
console.log(chekTypeOfSome ());


// Second level: Реализуйте функцию из первой задачи во всех трех синтаксисах функций - декларативно, как выражение и как стрелочную функцию.
let chekTypeOfSome2=function  (someValue){ 
    if (typeof someValue === 'undefined'){
        return 'неверный тип данных'
    } else {
    
    return String(someValue).length;
}
}
console.log(chekTypeOfSome2 ('Hello'));
console.log(chekTypeOfSome2 (27));
console.log(chekTypeOfSome2 (2<3));
console.log(chekTypeOfSome2 (null));
console.log(chekTypeOfSome2 ());

const chekTypeOfSome3=(someValue)=>{ 
    
    return typeof someValue === 'undefined'
     ? ( 'неверный тип данных') 
     : (String(someValue).length);
}

console.log(chekTypeOfSome3 ('Hello'));
console.log(chekTypeOfSome3 (27));
console.log(chekTypeOfSome3 (2<3));
console.log(chekTypeOfSome3 (null));
console.log(chekTypeOfSome3 ());


// Прокомментируйте аргументированно почему на Ваш взгляд один из способов описания функции предпочтительнее.


// Я думаю что нельзя сказать что один из способов описания предпочтительней другого. На мой взгляд это напрямую зависит от задачи.