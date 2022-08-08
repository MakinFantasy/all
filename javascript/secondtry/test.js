productOne = {id: '1001', name: 'One', description: 'testOne', sizes: '25 * 25 * 25', 'price': 5000, available: true};
productTwo = {id: '1002', name: 'Two', description: 'testTwo', sizes: '30 * 30 * 30', 'price': 6000, available: true};
productThree = {id: '1003', name: 'Three', description: 'testThree', sizes: '35 * 35 * 35', price: 7000, available: false};
productFour = {id: '1004', name: 'Four', description: 'testFour', sizes: '40 * 40 * 40', price: 8000, available: true};
productFive = {id: '1005', name: 'Five', description: 'testFive', sizes: '50 * 50 * 50', price: 10000, available: false};
productBasketOne = {id: '001', name: 'basketFirst', description: 'inTrashOne', sizes: '13 * 13 * 13', 'price': 13000, available: false};
productBasketTwo = {id: '002', name: 'basketSecond', description: 'inTrashTwo', sizes: '17 * 17 * 17', 'price': 17000, available: false};
let products = {1: productOne, 2: productTwo, 3: productThree, 4: productFour, 5: productFive};
Object.basket = {1: productBasketOne, 2: productBasketTwo};
let test = {}


function basketOne (num) {
    console.log('basket:')
    console.log(basket);
    delete basket[num];
    console.log('basket:')
    console.log(basket);
}

// basketOne(1);

let summ = 0;
for (let i = 1, len = Object.keys(Object.basket).length; i <= len; i++) {
    summ += Object.basket[i].price;
}


// console.log(Object.basket[1].price)
console.log(summ);

for (let i = 1; i <= 10; i++) {
    test[i] = i;
}
console.log(test);