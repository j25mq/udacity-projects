let products = [];
let imac = {
    name: "iMac",
    price: 1299,
    quantity: 0,
    productId: 100,
    image: "images/imac.jpg",
};
let ipad = {
    name: "iPad",
    price: 599,
    quantity: 0,
    productId: 101,
    image: "images/ipad.jpg",
};
let macMini {
    name: "Mac Mini",
    price: 699,
    quantity: 0,
    productId: 102,
    image: "images/mac-mini.jpg",
}; 
let macBook {
    name: "MacBook",
    price: 1199,
    quantity: 0,
    productId: 103,
    image: "images/macbook.jpg",
};

products.push(imac, ipad, macMini, macBook);

/* Declare an empty array named cart to hold the items in the cart */
let cart = [];

/* Decalre an empty array named totalPaid to set the amount to 0 */
let totalPaid = 0;

/* Create a helper function getProductByIdFromList that takes in the productId and productList as arguments
  - should be added to the addProductToCart, increaseQuantity, and decreaseQuantity functions
*/

function getProductByIdFromList(productId, productList) {
  return productList.find((product) => product.productId === productId);
};

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

function addProductToCart(productId) {
  let product = getProductByIdFromList(productId, products);
  product.quantity += 1;
  if (!cart.includes(product)) {
      cart.push(product);
  };
};

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

function increaseQuantity(productId) {
  let product = getProductByIdFromList(productId, products);
  product.quantity += 1;
};

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

function decreaseQuantity(productId) {
  let product = getProductByIdFromList(productId, products);
  product.quantity -= 1;
  if (product.quantity <= 0) {
    removeProductFromCart(product.productId);
  };
};

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart(productId) {
  let product = getProductByIdFromList(productId, products);
  product.quantity = 0;
  index = cart.indexOf(product);
  cart.splice(index, 1);
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
