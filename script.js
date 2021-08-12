'use strict';

///////////////////////////////////////////////////////////////////
//Exporting and Importing in ES6 Module

//Option 1
/*
import {
  addToCart,
  totalPrice as price,
  totalQuantity,
} from './shoppingCart.js';
*/

//Option 2

import * as ShoppingCart from './shoppingCart.js';
/*
console.log('Importing module');
ShoppingCart.addToCart('Bread', 5);
console.log(ShoppingCart.price, ShoppingCart.totalQuantity);
*/

//option 3 - import default
/*
import add from './shoppingCart.js';

add('milk', 3);
*/

//Mix of all - don't do that.
/*
import add, { addToCart, totalPrice as price } from './shoppingCart.js';
*/

/*
add('milk', 5);
add('Bread', 7);
add('Strawberi', 2);
add('Eggs', 1);

import { addToCart as add, cart } from './shoppingCart.js';

console.log(cart);
*/

//The Module Pattern - the old way
/*
const ShoppingCart2 = (function () {
  const cart = [];
  const ShippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = (product, quantity) => {
    cart.push(product, quantity);
    console.log(`${quantity} ${product} added to the cart`);
  };

  const orderStock = (product, quantity) => {
    cart.push(product, quantity);
    console.log(`${quantity} ${product} orderd from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
console.log(ShoppingCart2.cart);
console.log(ShoppingCart2.ShippingCost);
*/

// CommonJS Modules
//expoet
/*
export.addToCart = (product, quantity) => {
   cart.push(product, quantity);
   console.log(`${quantity} ${product} added to the cart`);
 };

 //import
 const {addToCart} = require('./shoppingCart/js');
 */
/*
import cloneDeep from './node_modules/lodash-es/cloneWith.js';
*/
//import cloneDeep from 'lodash-es';
import cloneDeep from 'lodash';

const state = {
  cart: [
    { product: 'Bread', quantity: 5 },
    { product: 'Piiza', quantity: 4 },
  ],
  user: { loggedIn: true },
};

const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateDeepClone);
console.log(state);

if (module.hot) {
  module.hot.accept();
}
