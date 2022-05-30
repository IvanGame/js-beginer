'use strict'

for (let i = 0; i < 11; i++) {
    if (i % 2 == 0 && i != 0) {
        console.log(i + ' - четное число');
    } else if (i == 0) {
        console.log(i + ' - это ноль')
    } else {
        console.log(i + ' - нечетное число')
    }
}