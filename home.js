//First level: Выведите чётные числа в консоль
// При помощи цикла for выведите чётные числа от 2 до 10.
// Для проверки на чётность используйте оператор получения остатка от деления % - if (i % 2 == 0)

function numbers (numA,numB){
    for(numA;numA<=numB;numA++){
        if(numA%2==0){
            console.log(numA);
        }
    }
}
numbers(2,10);

// Second level: Перепишите код, заменив цикл for на while, без изменения поведения цикла.

function numbers2 (numA,numB){
    while(numA<=numB){
        if(numA%2==0){
            console.log(numA);
        }
        numA++
    }
}
numbers2(2,10);




