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
/* Declare an empty array named cart to hold the items in the cart */
let cart = [];
let balance = 0;
let totalPaid = 0;

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

function addProductToCart(product) {
  let product = getProductByIdFromList(productId, products);
  if (getProductByIdFromList(productId, productList)) {
    if (cart.includes(products[0])) {
      products[0].quantity += 1;
    } else {
      cart.push(products[0]);
      products[0].quantity += 1;
    }
  }
  else if (getProductByIdFromList(productId, productList)) {
    if (cart.includes(products[1])) {
      products[1].quantity += 1;
    } else {
      cart.push(products[1]);
      products[1].quantity += 1;
    }
  }
  else if (getProductByIdFromList(productId, productList)) {
    if (cart.includes(products[2])) {
      products[2].quantity += 1;
    } else {
      cart.push(products[2]);
      products[2].quantity += 1;
    }
  }
  else if (getProductByIdFromList(productId, productList)) {
    if (cart.includes(products[3])) {
      products[3].quantity += 1;
    } else {
      cart.push(products[3]);
      products[3].quantity += 1;
    }
  }
};


/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

function increaseQuantity(product) {
  if (getProductByIdFromList(productId, productList)) {
    products[0].quantity += 1;
  }
  else if (getProductByIdFromList(productId, productList)) {
    products[1].quantity += 1;
  }
  else if (getProductByIdFromList(productId, productList)) {
    products[2].quantity += 1;
  }
  else if (getProductByIdFromList(productId, productList)) {
    products[3].quantity += 1;
  }
};

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

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

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart(product) {
  if (getProductByIdFromList(productId, productList)) {
    for (let index = 0; index < cart.length; index++) {
      if (cart[index] === products[0]) {
        cart.splice(index, 1);
        sum -= (products[0].price * products[0].quantity);
      }
    }
    products[0].quantity = 0;
  }
  else if (getProductByIdFromList(productId, productList)) {
    for (let index = 0; index < cart.length; index++) {
      if (cart[index] === products[1]) {
        cart.splice(index, 1);
        sum -= (products[1].price * products[1].quantity);
      }
    }
    products[1].quantity = 0;
  }
  else if (getProductByIdFromList(productId, productList)) {
    for (let index = 0; index < cart.length; index++) {
      if (cart[index] === products[2]) {
        cart.splice(index, 1);
        sum -= (products[2].price * products[2].quantity);
      }
    }
    products[2].quantity = 0;
  }
  else if (getProductByIdFromList(productId, productList)) {
    for (let index = 0; index < cart.length; index++) {
      if (cart[index] === products[3]) {
        cart.splice(index, 1);
        sum -= (products[3].price * products[3].quantity);
      }
    }
    products[3].quantity = 0;
  }
};

/* Create a helper function getProductByIdFromList that takes in the productId and productList as arguments
  - should be added to the addProductToCart, increaseQuantity, and decreaseQuantity functions
*/

function getProductByIdFromList(productId, productList) {
  return productList.find((product) => product.productId === productId);
};

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/

function cartTotal() {
  let sum = 0;
  for (let index = 0; index < cart.length; index++) {
    sum += cart[index].price;
  }
  return sum;
};

/* Create a function called emptyCart that empties the products from the cart */

function emptyCart() {
  cart = [];
  cart.splice(0, cart.length);
};

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/

function pay(amount) {
  totalPaid += amount;
  cash_returned = totalPaid - cartTotal();
  if (cash_returned > 0) {
    totalPaid = 0;
    return cash_returned;
  }
  return totalPaid - cartTotal();
};

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

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
