let cart = [];
let sum = 0;
let balance = 0;
let totalPaid = 0;

const products = [
  {
    name: "iMac",
    price: 1299,
    quantity: 0,
    productId: 100,
    image: "images/imac.jpg",
  },
  {
    name: "iPad",
    price: 599,
    quantity: 0,
    productId: 101,
    image: "images/ipad.jpg",
  }, 
  {
    name: "Mac Mini",
    price: 699,
    quantity: 0,
    productId: 102,
    image: "images/mac-mini.jpg",
  }, 
  {
    name: "MacBook",
    price: 1199,
    quantity: 0,
    productId: 103,
    image: "images/macbook.jpg",
  },
];

function addProductToCart(product) {
  if (product === products[0].productId) {
    if (cart.includes(products[0])) {
      products[0].quantity += 1;
    } else {
      cart.push(products[0]);
      products[0].quantity += 1;
    }
  }
  else if (product === products[1].productId) {
    if (cart.includes(products[1])) {
      products[1].quantity += 1;
    } else {
      cart.push(products[1]);
      products[1].quantity += 1;
    }
  }
  else if (product === products[2].productId) {
    if (cart.includes(products[2])) {
      products[2].quantity += 1;
    } else {
      cart.push(products[2]);
      products[2].quantity += 1;
    }
  }
  else if (product === products[3].productId) {
    if (cart.includes(products[3])) {
      products[3].quantity += 1;
    } else {
      cart.push(products[3]);
      products[3].quantity += 1;
    }
  }
};

function increaseQuantity(product) {
  if (product === products[0].productId) {
    products[0].quantity += 1;
  }
  else if (product === products[1].productId) {
    products[1].quantity += 1;
  }
  else if (product === products[2].productId) {
    products[2].quantity += 1;
  }
  else if (product === products[3].productId) {
    products[3].quantity += 1;
  }
};

function decreaseQuantity(product) {
  if ((product === products[0].productId) && (products[0].quantity > 0)) {
    products[0].quantity -= 1;
    sum -= products[0].price;
    for (let index = 0; index < cart.length; index++) {
      if (cart[index].quantity === 0) {
        cart.splice(index, 1);
      }
    }
  }
  else if ((product === products[1].productId) && (products[1].quantity > 0)) {
    products[1].quantity -= 1;
    sum -= products[1].price;
    for (let index = 0; index < cart.length; index++) {
      if (cart[index].quantity === 0) {
        cart.splice(index,1);
      }
    }
  }
  else if ((product === products[2].productId) && (products[2].quantity > 0)) {
    products[2].quantity -= 1;
    sum -= products[2].price;
    for (let index = 0; index < cart.length; index++) {
      if (cart[index].quantity === 0) {
        cart.splice(index, 1);
      }
    }
  }
  else if ((product === products[3].productId) && (products[3].quantity > 0)) {
    products[3].quantity -= 1;
    sum -= products[3].price;
    for (let index = 0; index < cart.length; index++) {
      if (cart[index].quantity === 0) {
        cart.splice(index, 1);
      }
    }
  }
};

function removeProductFromCart(product) {
  if (product === products[0].productId) {
    for (let index = 0; index < cart.length; index++) {
      if (cart[index] === products[0]) {
        cart.splice(index, 1);
        sum -= (products[0].price * products[0].quantity);
      }
    }
    products[0].quantity = 0;
  }
  else if (product === products[1].productId) {
    for (let index = 0; index < cart.length; index++) {
      if (cart[index] === products[1]) {
        cart.splice(index, 1);
        sum -= (products[1].price * products[1].quantity);
      }
    }
    products[1].quantity = 0;
  }
  else if (product === products[2].productId) {
    for (let index = 0; index < cart.length; index++) {
      if (cart[index] === products[2]) {
        cart.splice(index, 1);
        sum -= (products[2].price * products[2].quantity);
      }
    }
    products[2].quantity = 0;
  }
  else if (product === products[3].productId) {
    for (let index = 0; index < cart.length; index++) {
      if (cart[index] === products[3]) {
        cart.splice(index, 1);
        sum -= (products[3].price * products[3].quantity);
      }
    }
    products[3].quantity = 0;
  }
};

function cartTotal() {
  for (let index = 0; index < cart.length; index++) {
    sum += cart[index].price;
    return sum;
  }
  return sum;
};

function emptyCart() {
  cart = [];
};

function pay(amount) {
  totalPaid += amount;
  return totalPaid - cardTotal();
};

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
};
