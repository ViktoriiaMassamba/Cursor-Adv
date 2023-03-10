/*const age = prompt('скільки вам років?', ' ')
console.log(age.trim())
trim -  удаляет пробельные символы с начала и конца строки. 

Запрос всегда будет применять одно из условий по прорядку
и привести к булевому значению.
К false  будет приравниваться 0, null, undefined, NaN, ' ', false 

if (age) {
    //...
}{
    console.log('Ви не ввели вік')
}

if (умова age > 60) {
    console.log  или alert('Вам забагато років!')
} else if ( age > 18) {
    console.log  alert если не выводить в консоль ('Ви повнолітні')
} else {
    console.log('Вам замало років!')
}

*******    ТРИНАРНЫЙ ОПЕРАТОР  *********

const isAccessAllowed = age > 18 ? true :false
const isAccessAllowed = age > 18 ? 'yes' : 'no'
const isAccessAllowed = age > 18 ? 'yes' : age == ? 'it is not possible' : 'no'
console.log(isAccessAllowed)


switch сравнивает выражение со случаями, перечисленными внутри неё, а затем выполняет
 соответствующие инструкции.

switch(age) {
    case 18 + '':
        console.log('с полнолетием')
        break  - конец функции, если функция выполнена, то дальше не проверяется

    case '100':
        console.log('с юбилеем')
        break
    default:
        console.log('обычный возраст')
        break
}

если забыли, что prompt возвращает нам строку (все что в '18') 
и решили стравнивать с цифрами 18 в таком случае, условие не выполняется
100 сравнивается с цифрой 18, тоже не выполняется условие, даже если было 
строка '18' и тогда доходит до default и  выводит Обычный возраст

также если добавить к case сравнение else if, то оно сравнивает if с конкретным 
значение case

switch(age) {
    case 18 + '':
        console.log('с полнолетием')
        break  - конец функции, если функция выполнена, то дальше не проверяется
    case '50':
    case '100':
        console.log('с юбилеем')
        break
    default:
        console.log('обычный возраст')
        break
}

*******    УСЛОВНЫЕ ОПЕРАТОРы  *********

|| - или
&& - и
! -не 

console.log(true || false) /результат = true 
console.log(true || false || false) результат = true 
console.log(false || true) результат = true
console.log(true || true) результат = true 
console.log(false || false) результат = false 

console.log(false && false) результат = false 
console.log(true && false) результат = false 
console.log(false && true) результат = false 
console.log(true && true) результат = true 

console.log(1 || 0) /*результат = 1 


Проверяет слева на право, т. к это ИЛИ, то будет идти до первой правды
и дальше не идет проверять
console.log('test' || 0 || 35 || '') /*результат = test 

если  не станет Правдой, то идет дальше, т.к Правда, то дальше не проверяет 
console.log( 0 || 35 || '' || 'test' ) /*результат = 35 

const age = prompt('скільки вам років?', ' ')*/

const age = 21;

/*console.log (0 || 15 || alert('!!!') || 'test' )

if(age > 18 && age < 60) {
    console.log('вы в нашем клубе')
}

if(age < 18 || age > 60) {
    console.log('ваш возраст нам не подходит')
} - в результате пусто, т.к 21 не меньше 18 это false, проверяет дальше 
21 не больше 60, значит это false в итоге вся конструкция дает false поэтому 
выдает пусто 

const age = 62;
if(age < 18 || age > 60) {
    console.log('ваш возраст нам не подходит')
} - в результате ваш возраст нам не подходит т.к false || true результат = true*/

let numberN = prompt('введіть число N');
let numberM = prompt('введіть число M');
let trueOrFalse = confirm("true or false");
console.log(numberN);
console.log(numberM);
let sumNM = 0;

//якщо ввести не цифри, а інші
if (!isNaN(numberN) && !isNaN(numberM)) {
   if ((+numberN % 1 === 0 && +numberM % 1 === 0)) {
      console.log('Введено ціле число');
   for (let i = +numberN; i <= +numberM; i++) {
      if (trueOrFalse) {
      if (i % 2 === 0) {
         continue;
      }
      } 
      sumNM += i;
   }
   console.log(sumNM);
   document.writeln(`<h2>${sumNM}</h2>`);
   } else {
      console.log('введено неціле число');
      for (let i = +Math.floor(+numberN); i <= +Math.floor(+numberM); i++) {
      if (trueOrFalse) {
      if (i % 2 === 0) {
         continue;
      }
      } 
      sumNM += i;
      }
  
   document.writeln(`<h2>Введіть ціле число</h2>`);
   console.log(sumNM);
   document.writeln(`<h2>${sumNM}</h2>`);
   }
} else {
   alert('Памятай, ЧИСЛО, не РЯДОК!');
}

let b = parseInt('11,7088787')
console.log(b);
