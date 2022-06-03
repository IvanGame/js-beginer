'use strict'

// alert('Количество едениц ' + a % 10);
// alert("Количество десятков " + Math.floor(a / 10) % 10);
// alert("Количество сотен " + Math.floor(a / 100) % 10);

function Divide(number, units, tens, hundereds) {
    this.units = units;
    this.tens = tens;
    this.hundereds = hundereds;
}

Divide.prototype.divideNumber = function () {
    let number = +prompt("Введите число")
    if (!Number.isInteger(number) || (number > 999 || number < 0)) {
        console.log('Вы ввели некорректное число');
        return console.log({});
    } else {
        this.units = number % 10;
        this.tens = Math.floor(number / 10) % 10;
        this.hundereds = Math.floor(number / 100) % 10;
        console.log(objDivide);
    }

}

let objDivide = new Divide();
objDivide.divideNumber();