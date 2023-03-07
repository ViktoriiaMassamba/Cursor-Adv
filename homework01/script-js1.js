let priceMilk = 15.678;
let priceFish = 123.965;
let priceFruits = 90.2345;
console.log(priceMilk, priceFish, priceFruits);

let maxPrice = Math.max(priceMilk, priceFish, priceFruits);
console.log("Максимальне число ", (maxPrice));

let minPrice = Math.min(priceMilk, priceFish, priceFruits);
console.log("Мінімальне число ", (minPrice));

let sumPrice = priceMilk + priceFish + priceFruits;
console.log("Вартість всіх товарів:", sumPrice);

let priceFloor = Math.floor(priceMilk) + Math.floor(priceFish) + Math.floor(priceFruits);
console.log("Вартість без копійок:", priceFloor);

let sumHundred = Math.round(sumPrice*100)/100;
console.log("Сумма округлена до сотень:", (sumHundred));

//let sumFloor = Boolean(priceFloor2%);
//console.log("булеве значення сум:", priceFloor);

function evenOdd(priceFloor) {
    return priceFloor % 2 === 0 ? "Odd" : "Even"
}

console.log("Булеве значення сум:", evenOdd(3));
console.log("Булеве значення сум:", evenOdd(2));

let cash = 500;
console.log("Решта від 500:", cash - sumHundred);

let averagePrice = (sumPrice/3);
let averagePrice_Tenths = averagePrice.toFixed(2);
console.log("Середнє значення цін, округлене:", averagePrice_Tenths);

const saleRandom = Math.random().toFixed(2);
console.log ("Випадкова знижка:", saleRandom);

const saleRandPerc  = (Math.random()).toFixed(2);
console.log ("Випадкова знижка у відсотках:", `${saleRandom * 100} %`);

const saleRandCash = (sumPrice * saleRandom).toFixed(2);
console.log ("Випадкова знижка у грошах:", saleRandCash);

let sumSale = (sumPrice - (sumPrice * saleRandom)) .toFixed(2);
console.log("Вартість зі знижкою:", sumSale);

const costPrice = (sumPrice / 2).toFixed(2);
console.log("Собівартість:", costPrice);

let netProfit = (costPrice - (saleRandom * 100)).toFixed(2);
console.log("Чистий прибуток:", netProfit);

console.log("Максимальне число:", (maxPrice)+ ' ' + "Вартість всіх товарів:", sumPrice +
' ' + "Вартість без копійок:", priceFloor + ' ' + "Сумма округлена до сотень:", (sumHundred)+ ' ' + "Булеве значення сум:", evenOdd(3) +
' ' + "Решта від 500:", cash - sumHundred + ' ' + "Середнє значення цін, округлене:", averagePrice_Tenths + ' ' + "Випадкова знижка:", saleRandom +
' ' + "Вартість зі знижкою:", sumSale + ' ' + "Собівартість:", costPrice + ' ' + "Чистий прибуток:", netProfit );