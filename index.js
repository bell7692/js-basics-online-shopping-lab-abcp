var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * (100 - 1) + 1);
  var itemObject = {};
  itemObject[item] = price;
  cart.push(itemObject);
 console.log(`${item} has been added to your cart.`);
 return cart; 
}


function viewCart() {
  // write your code here
  if (cart[item].length === 0) {
    return "Your shopping cart is empty."
  }
  else if (cart[item].length ===1) {
  for (var i = 0; i < cart.length; i++) {
    for (var n = 0; n <cart[i].length; n++){
    return `In your cart, you have ${cart[i]} at $${cart[i][n]}.`; 
  }
}
}
}

function total() {

}

function removeFromCart(item) {
  // write your code here

}

function placeOrder(cardNumber) {
  // write your code here
}

