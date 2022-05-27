'use strict'
/**
 * Функция складывает 2 чилса
 *
 * @param {Number} arg1 первое число
 * @param {Number} arg2 второе число
 * @return {Number} возвращает сумму чисел
 */
function amount(arg1, arg2) {
    let sum = arg1 + arg2;
    return sum
}

/**
 * Функция вычитает 2 чилса
 *
 * @param {Number} arg1 первое число
 * @param {Number} arg2 второе число
 * @return {Number} возвращает разность чисел
 */
function difference(arg1, arg2) {
    let dif = arg1 - arg2;
    return dif
}

/**
 * Функция умножает 2 чилса
 *
 * @param {Number} arg1 первое число
 * @param {Number} arg2 второе число
 * @return {Number} возвращает произведние чисел
 */
function multiply(arg1, arg2) {
    let mult = arg1 * arg2;
    return mult
}

/**
 * Функция делит 2 чилса
 *
 * @param {Number} arg1 первое число
 * @param {Number} arg2 второе число
 * @return {Number} возвращает частное чисел
 */
function divide(arg1, arg2) {
    let div = arg1 / arg2;
    return div
}

let arg1 = Number(prompt('Введите первое число')), arg2 = Number(prompt('Введите второе число'));

let operation = prompt('Выберите желаемую операцию. 1. сложение 2. вычитание 3. умножение 4. деление');

mathOperation(arg1, arg2, operation);

/**

 * Функция опередялет тип операции и вызывает соответствующую функцию
 *
 * @param {Number} arg1
 * @param {Number} arg2
 * @param {string} operation
 */

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '1':
            alert('Сумма чисел равна = ' + amount(arg1, arg2));
            break

        case '2':
            alert('Разность чисел равна = ' + difference(arg1, arg2));
            break

        case '3':
            alert('Произведение чисел равна = ' + multiply(arg1, arg2));
            break

        case '4':
            alert('Частное чисел равна = ' + divide(arg1, arg2));
    }
}