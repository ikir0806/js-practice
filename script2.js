let product1 = {
    title: 'shirt',
    price: 700
};

let product2 = {
    title: 'jeans',
    price: 2000
}

let cart = {
    product1: product1,
    product2: product2,
}

countBasketPrice(cart);

function countBasketPrice(object) {
    let price = 0;
    for (const key in object) {
        price += object[key].price;
    }
    console.log(price);
}