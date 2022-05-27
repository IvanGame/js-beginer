'use strict'

let a = Number(prompt('Введите первое целочисленное число')), b = Number(prompt('Введите второе целочисоленное число'));

if ((a >= 0 && b >= 0) && a >= b) {
    let dif = a - b;
    alert('Разность чисел равна = ' + dif);
} else if ((a >= 0 && b >= 0) && a < b) {
    let dif = b - a;
    alert('Разность чисел равна = ' + dif);
} else if (a < 0 && b < 0) {
    let mult = a * b;
    alert('Произведение чисел равно = ' + mult);
} else if (a * b < 0) {
    let sum = a + b;
    alert('Сумма чисел равна = ' + sum)
}