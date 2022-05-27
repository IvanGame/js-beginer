'use strict'

function amount(a, b) {
    let sum = a + b;
    return sum
}

function difference(a, b) {
    let dif = a - b;
    return dif
}

function multiply(a, b) {
    let mult = a * b;
    return mult
}

function divide(a, b) {
    let div = a / b;
    return div
}

let a = Number(prompt('Введите первое число')), b = Number(prompt('Введите второе число'));

let check = +prompt('Выберите желаемую операцию. 1. сложение 2. вычитание 3. умножение 4. деление');

if (check == 1) {
    alert('Сумма чисел равна = ' + amount(a, b));
} else if (check == 2) {
    alert('Разность чисел равна = ' + difference(a, b));
} else if (check == 3) {
    alert('Произведение чисел равна = ' + multiply(a, b));
} else if (check == 4) {
    alert('Частное чисел равна = ' + divide(a, b));
} else {
    alert('Вы ввели НЕ существующую операцию')
}