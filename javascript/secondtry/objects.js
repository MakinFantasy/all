productOne = {id: '1001', name: 'One', description: 'testOne', sizes: '25 * 25 * 25', price: 5000, available: true};
productTwo = {id: '1002', name: 'Two', description: 'testTwo', sizes: '30 * 30 * 30', price: 6000, available: true};
productThree = {id: '1003', name: 'Three', description: 'testThree', sizes: '35 * 35 * 35', price: 7000, available: false};
productFour = {id: '1004', name: 'Four', description: 'testFour', sizes: '40 * 40 * 40', price: 8000, available: true};
productFive = {id: '1005', name: 'Five', description: 'testFive', sizes: '50 * 50 * 50', price: 10000, available: false};
productBasketOne = {id: '001', name: 'basketFirst', description: 'inTrashOne', sizes: '13 * 13 * 13', price: 13000, available: false};
productBasketTwo = {id: '002', name: 'basketSecond', description: 'inTrashTwo', sizes: '17 * 17 * 17', price: 17000, available: false};
let products = {1: productOne, 2: productTwo, 3: productThree, 4: productFour, 5: productFive};
Object.basket = {1: productBasketOne, 2: productBasketTwo};

// console.log(products);
// console.log(basket);
// console.log(products['first']);



function basketAdd (number) {
    console.log('Products:');
    console.log(products);
    console.log('Basket:');
    console.log(Object.basket);
    Object.basket[number] = products[number];
    delete products[number];
    console.log('Basket:');
    console.log(Object.basket);
    console.log('Products:');
    console.log(products);
}

function basketDeleteItem(num) {
    console.log('Basket:');
    console.log(Object.basket)
    delete Object.basket[num];
    console.log('Basket:');
    console.log(Object.basket)
}

function basketClear () {
    console.log('Basket:');
    console.log(Object.basket);
    for (let i in Object.basket) {
        if (Object.basket.hasOwnProperty(i)) {
            delete Object.basket[i];
        }
    }
    console.log('Basket:');
    console.log(Object.basket);
}

function totalAmountAndSumm () {
    let totalAmount = Object.keys(Object.basket).length;
    let totalSumm = 0;
    for (let i = 1, len = Object.keys(Object.basket).length; i <= len; i++) {
        if (Object.basket.hasOwnProperty(i)) {
            totalSumm += Object.basket[i].price;
        }
        totalSumm += Object.basket[i].price;
    }
    console.log('Total amount is ' + totalAmount);
    console.log('Total summ is ' + totalSumm);
}

console.log(basketAdd(process.argv[2]));
totalAmountAndSumm();
basketDeleteItem(2);
totalAmountAndSumm();
basketClear();
