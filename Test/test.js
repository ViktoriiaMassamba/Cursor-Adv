 /*ВВОДНОЕ ЗАНЯТИЕ */
       /*console.log ('hello');

        let userFirstName = 'Ivan';
        let userLastName = 'Ivanov';
        let fullName = userFirstName + ' ' + userLastName;

        console.log (fullName);

        let shoppingList = ['milk', 'eggs'];
        
        shoppingList 

        let userInput = prompt ('What is your name and age');
        let data = userInput.split(',');

        console.log(data);
        let name = data [0];

        arrFromString = 'a, b, c' .split(',');

        arrFromString = 'abc' .split(',');

        let arr = [1, 2, 3]

        let animals = ['pigs', 'goats', 'sheep'];

        let count = animals.push('cows');
        console.log(count);

        console.log(animals);

        animals.push('chickens', 'cats', 'dogs');
        console.log(animals);*/

       /* let  a = 'a';
        let  b = 'a';
        b ='b'

        //console.log(a);
        //console.log(b);

        let ihor = {name: 'ihor'};
        let vasyl = ihor;
        vasyl.name = 'vasyl';

        console.log(ihor);
        console.log(vasyl);*/

      /*  function fixName(name) {
            let newName = name.substing(0, 1).toUpperCase () + name.substing(1).toLowerCase();
            return newName;
        }

        let userNeme = 'ihOR';

        let fixedName = fixName(userNeme);

        console.log(fixedName);
-------------------------- */
      /*  let age = 20;

        if (age < 18) {
            console.log('You are no grown'); /*если меньше 18 значение, то покажется You are no grow., если больше 18, то в консоле ничего не покажет
        }
        
-------------------------- */
      
    /* let age = 66;

        if (age === 66) {
            console.log('You are no grown'); 
        }/*можем проверить юзеру 66? если другое число ничего не показывает, если 66, то показывает текст 
        -------------------------- */
        
        /*let age = 66;

        if (age < 66) /* все что в скобках приводим к булевому типу {
            console.log('You are no grown'); 
        } else {
            console.log('Cool');
        }
        -------------------------- */

       /* let age;

        if (age) {
            console.log('You are no grown'); 
        } else {
            console.log('No age');
        }
         можем проверить ввел ли пользователь ссвой возраст, если нет то выдаст No age?
         если присвоим возраст, то условие выполнится и покажет You are no grown

        Значения равнst false === 0, undefined, null, '', NaN

         -------------------------- */

        /* Пример: для квадратного корня, фунция будет взвращать квадратный корень из какого числа, 
         Если корень меньше нуля, то мы не можем достать корень из нуля, и показывает You are no grown
         Если получается вычислить, то в консоле показывает результат

        function getSqrt(number) {
            if (number < 0) {
                return 'You are no grown';
            } else {
                return Math.sqrt(number);                         
            }
        }

            console.log( getSqrt(25));
        -------------------------- */

        /*Пример: возвращать числа в диапозоне, т. е нужно проверить есть ли число в диапозоне

        function exceptNumber(number) {
            let result;
            if (number > 100) {
                result = 'Number is fine';
            } else if (number < 50) {
                result = 'Number is less than 200';
            } else {
                result = 'not allowed number';
            }

            return result;
        }
        
        console.log(exceptNumber(20)); 


        function exceptNumber(number) {
            let result;
            if (number === 100) {
                result = 'Number is 100';
            } else if (number > 100) {   
                result = 'Number is fine';
            } else if (number < 50) {
                result = 'Number is less than 200';
            } else {
                result = 'not allowed number';
            }

            return result;
        }
        
        console.log(exceptNumber(100)); /*

        в таком случае выполняется всегда одно условие

        -------------------------- */

       /* switch - это условный переключатель 

      let name = ''; - если здесь пробел то в консоле No nam
      
       switch (name) {
        default:
            console.log('No name');
       }

       let name = 'Ihor'; - если Ihor, то в консоле  тоже No namе, т.к нет совпадений
      
      switch (name) {
       default:
           console.log('No name');
      } 
           
    let name = 'Olena'; /*- происходит строгое сравнение совпадений
        
    switch (name) {
        case 'Olena':
            console.log('Hello Olena');
            break;
        case 'Ihor':
            console.log('Hello Ihor');
            break;  обязательно break чтобы код не пошел дальше 
        default:
           console.log('No name');
    }

    let number = 1; - происходит строгое сравнение совпадений
        
    switch (number) {
        case 1: если здесь указать стринговок значение '1', то результат будет No name 
            console.log('one');
              break;
        default:
             console.log('No name');
    } 
    
    let number = 1; - проверяем есть ли число приравненое к 1
        
    switch (number) { 
        case 1: 
            console.log('one');
        case 2: 
            console.log('two');
            break;
        default:
            console.log('Wrong number');
    }    

    let number = 2; - проверяем есть ли число приравненое к 1 2 3
    switch (number) {        
        case 1:
        case 2: 
        case 3: 
            console.log('1 or 2 or 3');
                break;
            default:
                console.log('Wrong number');
        } 

        function getDay(number) { - определяем по числу день недели
            switch(number) {
                case 1:
                    return 'Monday';
                case 1:
                    return 'Tuesday';
                case 1:
                    return 'Wendsday';
                default:
                return 'Wendsday';'Wrong number'
            }
        } 
        console.log(getDay (2));  
        
        TRENARY OPERATOR 

        let a  = 100;
        let b = 20
        let result = b > a ? 'b bigger' : 'a bigger';
        console.log('result: ', result);

        Пример: как обращаться к пользователям, если один пользователь то users, если много users 
        let userAccount = 10;
        let userWord = userAmount > 1? 'users' : 'user';
        console.log('Hello ' + userWord);

        или через функцию 

        function getUserWord(amount) {
            return amount > 1? 'users' : 'user'
        }

        console.log('Hello ' + getUserWord(10));


        INCREMENT /  DECREMENT 

        let number = 10;
        number = number + 1;
        console.log('number: ', number);

        сокращенный вариант => 
        
        let number = 10;
        number++;  также можно и  -- 
        console.log('number: ', number); 

        let number = 1;
        console.log('number: ', number++); результат 1, т.к сначала выводим 1, а потом наш увеличивается

        console.log('number: ', number); результат 2, number увеличился после

        console.log('number: ', ++number); результат 2, сначало увеличиваем number, а потом используем увеличеный


       ============= LOOP FOR =====================

        for (let i = 1; i <= 5; i++) { -обязательно ; после каждого условия, т.к это показывает, что условие завершено
            console.log('Присел');
            console.log('Встал');
            console.log(i);
        } 

        function sumEven(number) { функция должна считать все непарные числа 
            let result = 0;
            for (let n = 1; n <= number; n += 2) { 
                result += n;
        }
        return result;
    }

    console.log( sumEven(5) );  результат 9 т.е 1+2=3+2=5+2=7+2=9 

    function sumEven(number) { 
            let result = 0;
            for (let n = 1; n <= number; n++) { 
                result += n % 2 === 0 ? 0 :n;
        }
        return result;
    }

    console.log( sumEven(100) ); 

    function countLetter(string, letter) { функция подсчета количества определных букв, символов
        let counter = 0;

        for (let i = 0; i < string.length; i++) {
            if  (string[i].toLowerCase() === letter.toLowerCase()) { .toLowerCase -приводим все буквы к нижнему регистру
                counter++;
            }
        }

        return counter;
    }

    console.log( countLetter('Hello hhh my friend', 'h') );

    !!!! при ошибке в коде появляется бесконечный цикл


    ============= Scope - Область видимости { то что в скобках} ===================== 

    { let a = 10
    
    }

    ============= Типичные задачи с Array ===================== 
               // ********* forEach ********** ничего не возвращает, результат undefined (значение которому ничего не присвоено)
                                               его задача итерировать массив Метод forEach ничего не возвращает, его используют только для перебора, как более «элегантный» вариант, чем обычный цикл for.

    let users = ['Ihor', 'Olesya', 'Ira', 'Nazar'];

    for (let i = 0; i < users.length; i++) {
       // console.log( users[i] );
    }

    //тот же самый вариант но через forEach

    users.forEach(function(name, i, arr) {
        console.log( name );
    })

    //имя и порядковый номер

    users.forEach(function(name, i, arr) {
        console.log( name + ': ' + i );
    })

    //или же проще

    users.forEach(function(name) {
        console.log( name );
    })


  /********* map ********** перебирает (итерирует) элементы и возвращает их в новый массив
  Метод «arr.filter(callback[, thisArg])» используется для фильтрации массива через функцию.
Он создаёт новый массив, в который войдут только те элементы arr, для которых вызов callback(item, i, arr) возвратит true.
  


    let users = ['Ihor', 'Olesya', 'Ira', 'Nazar'];

    let result = users.map(function(name) {
        console.log( name );
        return name.length;
    })
  
    
/*  ********* filter ********** Метод «arr.filter(callback[, thisArg])» используется для фильтрации массива через функцию.

Он создаёт новый массив, в который войдут только те элементы arr, для которых вызов callback(item, i, arr) возвратит true. 
Фильтр возращает нам массим, но не с результатов запроса, проверяя какое-то условие и по этому условию или добавляет в новый массив или нет
если резултат true то попадает в новый массив. если нет, то нет 
исходный массив  users:  (4) ['Ihor', 'Olesya', 'Ira', 'Nazar']
а результат которые меньше 5 букв result:  (2) ['Ihor', 'Ira']

    let users = ['Ihor', 'Olesya', 'Ira', 'Nazar'];  
    let result = users.filter(function(name) {
        return name.length < 5;
    });
    
    console.log('users: ', users);
    console.log('result: ', result);
    

или 

    let users = ['Ihor', 'Olesya', 'Ira', 'Nazar'];  
    let result = users.filter(function(name) {
        if (name.length <5) {
            return true;
        } else if (name === 'Nazar') {
            return true;
        } else {
            return false;
        }
    });

    console.log('users: ', users);
    console.log('result: ', result);
    
    users:  (4) ['Ihor', 'Olesya', 'Ira', 'Nazar']
    result:  (3) ['Ihor', 'Ira', 'Nazar'] 

    let users = [
        { name: 'Ihor', id: 445, age: 5 },
        { name: 'Olesya', id: 546, age: 43 },
        { name: 'Ira', id: 667, age: 12},
        { name: 'Nazar', id: 224, age: 8},
    ];

    let result = users.filter(function(user) {
        return user.age >10;
    });
        
    console.log('users: ', users);
    console.log('result: ', result);

    result: (2) [{…}, {…}]
    0: {name: 'Olesya', id: 546, age: 43}
    1: {name: 'Ira', id: 667, age: 12}
    length: 2
    [[Prototype]]: Array(0)


    ********* filter **********  функция будет применяться к каждому юзеру пока 
    функция не исполнится 

    let result = users.find(function(user) {
        return user.id === 667;
    });

    let newUser = {...result};
    delete newUser.age; делаем копию нашего резкльтата и удаляем возраст

    console.log('newUser: ', newUser); 
    console.log('result: ', result);

    //result:  {name: 'Ira', id: 667, age: 12} */
