'use strict'
const budget = Object.freeze( [
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});


const addexpense = function (state, limits, value, description, user = 'jonas') {
  const cleanUser =  user.toLowerCase();

  const getLimit =(user)=> spendingLimits[user] ? spendingLimits[user] : 0;

  if (value <= getLimit(cleanUser)) {
    //budget.push({ value: -value, description, user:cleanUser });
    return[...state, {value: -value, description, user:cleanUser}];
  }
};
addexpense(budget, spendingLimits, 10, 'Pizza 🍕');
addexpense(budget, spendingLimits, 100, 'Going to movies 🍿', 'Matilda');
addexpense(budget, spendingLimits, 200, 'Stuff', 'Jay');
console.log(budget);

const checkExpenses = function () {
  for (const entry of budget) {
    const limit = spendingLimits[entry.user] ? spendingLimits[entry.user] : 0;

    if (entry.value < -limit) {
      entry.flag = 'limit';
    }
  }
};
checkExpenses();

console.log(budget);

const logBigExpenses = function (limit) {
  let output = '';
  for (const el of budget) {
    if (el.value <= -limit) {
      output += el.description.slice(-2) + ' / '; // Emojis are 2 chars
    }
  }
  output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

logBigExpenses(1000);


