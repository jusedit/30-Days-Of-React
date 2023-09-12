// Declare a function name userIdGeneratedByUser.
// It doesn’t take any parameter but it takes two inputs using prompt().
// One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
function userIdGeneratedByUser() {
  let length = 5; // prompt("User id length?");
  let amount = 5; // prompt("How many user ids?");
  let characters = "abcdefghijklmnopqrstuvw";
  let numbers = "0123456789";
  for (let n = 0; n < amount; n++) {
    let id = "";
    for (let len = 0; len <= length; len++) {
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
    console.log(id);
  }
}
userIdGeneratedByUser();
/* 
kcsy2
SMFYb
bWmeq
ZXOYh
2Rgxf
*/

// Write a function generateColors which can generate any number of hexa or rgb colors.
function generateColors(format, amount) {
  let output = [];
  for (var n = 0; n < amount; n++) {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    if (format == "rgb") {
      output.push(`rgb(${r},${g},${b})`);
    }
    if (format == "hexa") {
      output.push(`#${r.toString(16)}${g.toString(16)}${b.toString(16)}`);
    }
  }
  if (amount == 1) {
    return output[0];
  }
  return output;
}

console.log(generateColors("hexa", 3)); // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors("hexa", 1)); // '#b334ef'
console.log(generateColors("rgb", 3)); // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors("rgb", 1)); // 'rgb(33,79, 176)'

// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
function shuffleArray(array) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    let randomIndex = Math.round(Math.random() * array.length - 1);
    array.splice(randomIndex, 0, array.shift());
  }
  return array;
}
console.log(shuffleArray([1, 2, 3, 4, 5]));
console.log(shuffleArray([1, 2, 3, 4, 5]));
console.log(shuffleArray([1, 2, 3, 4, 5]));
console.log(shuffleArray([1, 2, 3, 4, 5]));

// Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
function factorial(number) {
  let out = 1;
  for (let f = 2; f <= number; f++) {
    out *= f;
  }
  return out;
}
console.log(factorial(4));

// Call your function isEmpty, it takes a parameter and it checks if it is empty or not
function isEmpty(p) {
  if (
    p === null ||
    p === undefined ||
    (typeof p == "string" && p.length == 0) ||
    (typeof p == "object" && Object.keys(p).length == 0) ||
    (Array.isArray(p) && p.length == 0)
  ) {
    return true;
  }
  return false;
}

console.log(isEmpty(""));
console.log(isEmpty("a"));
console.log(isEmpty([]));
console.log(isEmpty(["b"]));
console.log(isEmpty({}));
console.log(isEmpty({ c: 0 }));
console.log(isEmpty());

// Write a function called average, it takes an array parameter and returns the average of the items.
// Check if all the array items are number types. If not give return reasonable feedback.
function average(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] != "number" && isNaN(parseFloat(array[i]))) {
      return "Not all elements are numbers.";
    }
    sum += parseFloat(array[i]);
  }
  return sum / array.length;
}

console.log(average([1, 2, 3, 4, 5]));
console.log(average([1, "2", 3, 4, 5]));
console.log(average([1, "f", 3, 4, 5]));
