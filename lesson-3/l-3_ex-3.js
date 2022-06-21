'use strict'

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

function getDiscount(product, i) {
    let productDiscount = products[i].price - (products[i].price / 100 * 15);
    console.log('Изначальная цена - ' + products[i].price + '. ' + 'Ваша цена со скидкой - ' + productDiscount);
}

products.forEach(getDiscount);