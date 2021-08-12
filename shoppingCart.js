console.log('Exporting module');

const shippingCost = 10;
export const cart = [];

export let addToCart = (product, quantity) => {
  cart.push(product, quantity);
  console.log(`${quantity} ${product} added to the cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity };

export default addToCart = (product, quantity) => {
  cart.push(product, quantity);
  console.log(`${quantity} ${product} added to the cart`);
};
//
