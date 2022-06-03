'use strict'

//es5
function ProductEs5(name, price) {
    this.name = name;
    this.price = price;
}

ProductEs5.prototype.make25PercentDiscount = function () {
    console.log(this.price - (this.price / 100 * 25))
};

let objProductEs5 = new ProductEs5('Картошка', 200);
console.log(objProductEs5);
objProductEs5.make25PercentDiscount()

//es6
class ProductEs6 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        console.log(this.price - (this.price / 100 * 25))
    }
}

let objProductEs6 = new ProductEs6('Картошка', 200);
console.log(objProductEs6);
objProductEs6.make25PercentDiscount()