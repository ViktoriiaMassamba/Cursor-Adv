/* 28.02.2023 - N1 Змінні та типи*

    const a = 16;
    const b = 4;
    console.log(a % b) результат остаток 0, т.к при делении 16 / 4 получается 4 целых еденицы
    
    const a = false;
    console.log(Number(a)) результат 0

    const a = true;
    console.log(Number(a)) результат 1

    const a = undefined;
    console.log( isNaN(a) ) проверяет наша переменная числового значения или нет

    ********* Math **********
    -------  floor  ------  метод всегда округляет в меньшую сторону и возвращает наибольшее целое число, меньшее или равное заданному числу.

    const a = 3.8;
    console.log(Math.floor(a) ) результат 3 
     
    -------  ceil  ------  метод всегда округляет в большую сторону и возвращает наибольшее целое число, меньшее или равное заданному числу. 

    const a = 3.8;
    console.log(Math.ceil(a) ) результат 4 

    -------  round  ------ округляет математически 

    const a = 3.1;
    console.log(Math.ceil(a) ) результат 3 

    const a = 3.8;
    console.log(Math.ceil(a) ) результат 4 

    const num = 3.69;
    console.log( num.toFixed( fractionDigits: 1) )  результат 3,7 - округляет значение после запятой до задоного количества знаков

    const num = 0.1 + 0.2;
    console.log( num ) результат 0,3000000000 

    const num = 0.1 + 0.2;
    console.log( num == 0.3 ) результат false

    /*const num = 0.1 + 0.2;
    console.log( num === 0.3 ) результат false

== сравниваем только значения наших переменных, к примеру num
=== сравниваем и значение и тип наших переменных, т.е и num, и числа 

    const num = (0.1 + 0.2) ;
    console.log( parseFloat(string:"234.34px") ) результат 234.34  Функция parseFloat преобразует строку в число с плавающей точкой.
    Функция parseInt() принимает строку в качестве аргумента и возвращает целое число

    const name = "this is our string"
    console.log(name.toUpperCase()) результат THIS SI OUR STRING все символы с большой буквы

    const name = "This Is Our String"
    console.log(name.toLowerCase()) результат this is our string все символы с маленькой буквы
    
    const name = "This Is Our String"
    console.log( name.indexOf("a")) результат -1 т.к такой буквы нет в предложениее

    const name = "This Is Our String"
    console.log( name.indexOf(5)) результат -1 т.к 5 символ припадает на пробел*/
    

    const dogName = "Morty";
    const dogAge = 11;
    const result = `this is ${dogName}'s food`;
    const result2 = "this is "+ dogName + "`s food";
    const result3 = `this is ${dogAge > 10 ? "old dog" : "young dog"}`; /*условие если собаке больше 10 лет, то old dog, если меньше то сработает операция young dog
    
            if (dogAge > 10) {
                "old dog"
            } else {
                "young dog"
            } */

    console.log(result);
    console.log(result2);
    console.log(result3);