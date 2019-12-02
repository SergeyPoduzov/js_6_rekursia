/*
4. Написать функцию вычисляющую факториал числа с использованием рекурсии.
Факториал числа - это число, умноженное на себя минус один, затем на себя 
минус два и так далее, до единицы. Обозначается n!
Определение факториала можно записать как: n! = n * (n - 1) * (n - 2) * ...*1

*/


//цикл ввода количества выводимых слов и проверка введены цифры или буквы
let num
let check=true;
let str;
while (check){

    str = prompt("Введите число для вычесления факториала этого числа: ");
    //проверка - нет ли в строке - не числовых значений
    if (isNaN(str) == false){
        num=parseInt(str,10)
        break;
    }
    
    else{
        alert("В строке присутствуют текстовые символы, введите еще раз количество генерируем слов цифрами ");
        continue;

    }
}

function factorial(x){
    if (x<=1) return 1;
    else return (x * factorial(x-1));
}

document.write("Факториал числа " + num + " = " + factorial(num))