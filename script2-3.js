let cart = [
    ["shirt", 700],
    ["jeans", 2000],
];

countBasketPrice(cart);

function countBasketPrice(cart) {
    let price = 0;
    for (let i = 0; i < cart.length; i++) {
        price += cart[i][1];
    }
    console.log(price);
}