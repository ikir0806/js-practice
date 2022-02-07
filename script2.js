const catalog = {
    1: {
        id: 1,
        title: 'shirt',
        price: 700,
    },
    2: {
        id: 2,
        title: 'jeans',
        price: 2000,
    },
    3: {
        id: 3,
        title: 'sneakers',
        price: 5000,
    }
}

const cart = {
    items: [
        {
            id: 1,
            quantity: 3
        },
        {
            id: 2,
            quantity: 1
        },
        {
            id: 3,
            quantity: 2
        }
    ],

    countTotalPrice() {
        let result = 0;

        for (let item of this.items) {
            result += catalog[item.id].price;
        }

        return result;
    },

    countTotalQuantity() {
        let result = 0;

        for (let item of this.items) {
            result += item.quantity;
        }

        return result;
    }
}

let m = cart.countTotalPrice();
let n = cart.countTotalQuantity();

let element = document.getElementById('cart');

if (n == 0) {
    element.innerHTML = 'Ваша корзина пуста';
} else {
    element.innerHTML = `В корзине: ${n} товаров на сумму ${m} рублей`;
}
document.body.appendChild(element);