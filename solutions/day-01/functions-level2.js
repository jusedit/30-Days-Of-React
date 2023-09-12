// Quadratic equation is calculated as follows: ax2 + bx + c = 0.
// Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
function solveQuadratic(a = 0, b = 0, c = 0) {
  // x = (-b ± √(b² - 4ac)) / (2a)
  let disc = b * b - 4 * a * c;
  if (a == 0) {
    let x = a;
    return { x };
  } else if (disc > 0) {
    let x1 = (-b + Math.sqrt(disc)) / (2 * a);
    let x2 = (-b - Math.sqrt(disc)) / (2 * a);
    return { x1, x2 };
  } else if (disc === 0) {
    let x = -b / (2 * a);
    return { x };
  } else {
    return {};
  }
}

console.log(solveQuadratic()); // {0}
console.log(solveQuadratic(1, 4, 4)); // {-2}
console.log(solveQuadratic(1, -1, -2)); // {2, -1}
console.log(solveQuadratic(1, 7, 12)); // {-3, -4}
console.log(solveQuadratic(1, 0, -4)); //{2, -2}
console.log(solveQuadratic(1, -1, 0)); //{1, 0}

// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(array) {
  for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
  }
}

printArray([1, 2, 3, 4]);

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  console.log(`${day}/${month}/${year} ${hours}:${minutes}`);
}

showDateTime();

// Declare a function name swapValues. This function swaps value of x to y.
function swapValues(x, y) {
  let temp = x;
  x = y;
  y = temp;
  console.log(`x => ${x}, y => ${y}`);
}

swapValues(3, 4); // x => 4, y=>3
swapValues(4, 5); // x = 5, y = 4

// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(array) {
  const reversed = [];
  for (let index = array.length - 1; index >= 0; index--) {
    reversed.push(array[index]);
  }
  return reversed;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
//[5, 4, 3, 2, 1]
console.log(reverseArray(["A", "B", "C"]));
//['C', 'B', 'A']

// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray(array) {
  const capitalizedarray = [];
  for (let index = 0; index < array.length; index++) {
    capitalizedarray.push(array[index].toUpperCase());
  }
  return capitalizedarray;
}

console.log(capitalizeArray(["abba", "usa"]));

// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem(item, array) {
  const newArray = [...array];
  newArray.push(item);
  return newArray;
}
// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem(index, array) {
  const newArray = [...array];
  newArray.splice(index, 1);
  return newArray;
}

let items = ["a", "b"];
console.log(addItem("c", items));
console.log(removeItem(0, items));
// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
function evensAndOdds(int) {
  let evens = 0;
  let odds = 0;
  for (let num = 0; num <= int; num++) {
    if (num % 2 == 0) {
      evens++;
    } else {
      odds++;
    }
  }
  console.log(`evens: ${evens}, odds: ${odds}`);
}
evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.

// Write a function which takes any number of arguments and return the sum of the arguments
const sum = (...args) => args.reduce((sum, cur) => sum + cur);

console.log(sum(1, 2, 3)); // -> 6
console.log(sum(1, 2, 3, 4)); // -> 10

// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
function userIdGenerator() {
  let id = "";
  let characters = "abcdefghijklmnopqrstuvw";
  let numbers = "0123456789";
  for (let len = 0; len <= 7; len++) {
    let typeSeed = Math.random();
    let charSeed = Math.random();
    if (typeSeed < 0.66) {
      let char = characters.charAt(Math.round(charSeed * characters.length));
      if (typeSeed < 0.33) char = char.toLocaleUpperCase();
      id += char;
    } else {
      id += numbers.charAt(Math.round(charSeed * numbers.length));
    }
  }
  return id;
}
console.log(userIdGenerator());
// 41XTDbE
