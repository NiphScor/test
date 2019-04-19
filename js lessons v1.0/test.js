'use strict';

let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

console.log(money);
console.log(time);

let appData = {
    money: money,
    timeData: time, 
    optionalExpenses: '', 
    income: '', 
    savings: false};

console.log(appData);

let target1 = prompt("Введите обязательную статью расходов в этом месяце");
let priceTarget1 = prompt("Во сколько обойдется?");

let expenses = {};
expenses[target1] = priceTarget1;

console.log(expenses);

alert('Ваш допустимый бюджет на день: ' + (money - expenses[target1])/30);