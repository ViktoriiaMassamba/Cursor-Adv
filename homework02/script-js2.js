let numberN = prompt ('Ввести число N');
console.log(numberN); 

let numberM = prompt ('Ввести число M');
console.log(numberM); 


//* Ціле чи не ціле число *//
if (isInteger = numberN % 1 == 0) {
    console.log('Целые числа');
}
else {
    console.log("Нецелые числа");
}

if (isInteger = numberM % 1 == 0) {
    console.log('Целые числа');
}
else {
    console.log("Нецелые числа");
}

let trueFalse = confirm('Пропускать четные числа?')
alert( trueFalse );

let sumNumber = numberN + numberM;
console.log("Cума чисел:", sumNumber);

for (let i = numberN; i <= numberM; i++) {
    if (i % 2 == 0) {//Четные числа проверять 
      if(trueFalse === false) {// Применяем только нечетные
        sumNumber += i;
      }
   } else { 
    sumNumber += i; //Нечетные числа. Применяем
   } 
 }

