let currencySymbol = '$';

function drawProducts() {
    let productList = document.querySelector('.products');
    let productItems = '';
    products.forEach((element) => {
        productItems += `
            <div data-productId='${element.productId}'>
                <img src='${element.image}'>
                <h3>${element.name}</h3>
                <p>price: ${currencySymbol}${element.price}</p>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        `;
    });
    productList.innerHTML = productItems;
}

function drawCart() {
    let cartList = document.querySelector('.cart');
    let cartItems = '';
    cart.forEach((element) => {
        let itemTotal = element.price * element.quantity;

        cartItems += `
            <div data-productId='${element.productId}'>
                <h3>${element.name}</h3>
                <p>price: ${currencySymbol}${element.price}</p>
                <p>quantity: ${element.quantity}</p>
                <p>total: ${currencySymbol}${itemTotal}</p>
                <button class="qup">+</button>
                <button class="qdown">-</button>
                <button class="remove">remove</button>
            </div>
        `;
    });
    cart.length
        ? (cartList.innerHTML = cartItems)
        : (cartList.innerHTML = 'Cart Empty');
}

// Draws checkout
function drawCheckout() {
    let checkout = document.querySelector('.cart-total');
    checkout.innerHTML = '';
    let cartSum = cartTotal();
    let div = document.createElement('div');
    div.innerHTML = `<p>Cart Total: ${currencySymbol}${cartSum}`;
    checkout.append(div);
}

drawProducts();
drawCart();
drawCheckout();

document.querySelector('.products').addEventListener('click', (e) => {
    let productId = e.target.parentNode.getAttribute('data-productId');
    productId *= 1;
    addProductToCart(productId);
    drawCart();
    drawCheckout();
});

document.querySelector('.cart').addEventListener('click', (e) => {
    function runCartFunction(fn) {
        let productId = e.target.parentNode.getAttribute('data-productId');
        productId *= 1;
        for (let i = cart.length - 1; i > -1; i--) {
            if (cart[i].productId === productId) {
                let productId = cart[i].productId;
                fn(productId);
            }
        }
        drawCart();
        drawCheckout();
    }

    if (e.target.classList.contains('remove')) {
        runCartFunction(removeProductFromCart);
    } else if (e.target.classList.contains('qup')) {
        runCartFunction(increaseQuantity);
    } else if (e.target.classList.contains('qdown')) {
        runCartFunction(decreaseQuantity);
    }
});

document.querySelector('.pay').addEventListener('click', (e) => {
    e.preventDefault();
    let amount = document.querySelector('.received').value;
    amount *= 1;
    let cashReturn = pay(amount);
    let paymentSummary = document.querySelector('.pay-summary');
    let div = document.createElement('div');
    if (cashReturn >= 0) {
        div.innerHTML = `
            <p>Cash Received: ${currencySymbol}${amount}</p>
            <p>Cash Returned: ${currencySymbol}${cashReturn}</p>
            <p>Thank you!</p>
        `;
    } else {
        document.querySelector('.received').value = '';
        div.innerHTML = `
            <p>Cash Received: ${currencySymbol}${amount}</p>
            <p>Remaining Balance: ${cashReturn}$</p>
            <p>Please pay additional amount.</p>
            <hr/>
        `;
    }
    paymentSummary.append(div);
});

function dropCart(){
    let shoppingCart = document.querySelector('.empty-btn');
    let div = document.createElement("button");
    div.classList.add("empty");
    div.innerHTML =`Empty Cart`;
    shoppingCart.append(div);
}

dropCart();

document.querySelector('.empty-btn').addEventListener('click', (e) => {
    if (e.target.classList.contains('empty')){
        emptyCart();
        drawCart();
        drawCheckout();
    }
})

function currencyBuilder(){
    let currencyPicker = document.querySelector('.currency-selector');
    let select = document.createElement("select");
    select.classList.add("currency-select");
    select.innerHTML = `<option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="YEN">YEN</option>`;
    currencyPicker.append(select);
}

currencyBuilder();

document.querySelector('.currency-select').addEventListener('change', function handleChange(event) {
    switch(event.target.value){
        case 'EUR':
            currencySymbol = '€';
            break;
        case 'YEN':
            currencySymbol = '¥';
            break;
        default:
            currencySymbol = '$';
            break;
     }

    currency(event.target.value);
    drawProducts();
    drawCart();
    drawCheckout();
});
