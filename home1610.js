//Напишите цикл for, который выводит числа в консоль от 0 до 10.

for (let i =0; i<=10;i++){
    console.log(i);
  }

  //Напишите функцию, get_hypotenuse, которая в качестве аргумента принимает два числа (длины катетов) и возвращает гипотенузу.

  function get_hypotenuse (a,b){
    if (a!=0 && b!=0){
    let hypotenuse = ((a*a)+(b*b));
    return Math.sqrt(hypotenuse);
    } else {
        return 'Длинна катета не может равнятся 0'
    }
  }

  console.log(get_hypotenuse(12,7));
  console.log(get_hypotenuse(1,0));