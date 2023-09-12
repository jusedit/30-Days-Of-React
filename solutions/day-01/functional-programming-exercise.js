const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
// Print the price of each product using forEach

products.forEach(({ price }) => console.log(price));

// Print the product items as follows using forEach
/*
The price of banana is 3 euros.
The price of mango is 6 euros.
The price of potato is unknown.
The price of avocado is 8 euros.
The price of coffee is 10 euros.
The price of tea is unknown.
*/

products.forEach(({ product, price }) =>
  console.log(
    "The price of " +
      product +
      " is " +
      (typeof price == "number" ? price + " euros." : "unknown.")
  )
);

// Calculate the sum of all the prices using forEach
let sum = 0;
products.forEach(({ price }) =>
  typeof price == "number" ? (sum += price) : false
);
console.log(sum);

// Create an array of prices using map and store it in a variable prices
let prices = products.map(({ price }) => price);
console.log(prices);

// Filter products with prices
let productWithPrices = products.filter(
  ({ price }) => typeof price == "number"
);
console.log(productWithPrices);

// Use method chaining to get the sum of the prices(map, filter, reduce)
let chainedSum = products
  .map(({ price }) => price)
  .filter((price) => typeof price == "number")
  .reduce((acc, curr) => acc + curr);
console.log(chainedSum);

// Calculate the sum of all the prices using reduce only

let reducedSum = products.reduce(
  (acc, { price }) => acc + (typeof price == "number" ? price : 0),
  0
);
console.log(reducedSum);

// Find the first product which doesn't have a price value

let firstWithoutPrice = products.find(({ price }) => typeof price != "number");
console.log(firstWithoutPrice);

// Find the index of the first product which does not have price value

let firstIndexWithoutPrice = products.findIndex(
  ({ price }) => typeof price != "number"
);
console.log(firstIndexWithoutPrice);

// Check if some products do not have a price value

let someHavePrice = products.some(({ price }) => typeof price == "number");
console.log(someHavePrice);

// Check if all the products have price value

let allHavePrice = products.every(({ price }) => typeof price == "number");
console.log(allHavePrice);

// Explain the difference between forEach, map, filter and reduce

// forEach loops the elements of an array and gives access to item and index.
// map loops the elements of an array and returns a modified array.
// filter loops an array and returns only elements that match a condition.
// reduce loops an array and returns single, reduced value extracted from the elements.

// Explain the difference between filter, find and findIndex

// filter loops an array and returns only elements that match a condition.
// find loops an array and returns the first elements that matches a condition.
// find loops an array and returns the index of the first elements that matches a condition.

// Explain the difference between some and every

// some checks if some elements in the array match a condition.
// every checks if all elements in the array match a condition.
