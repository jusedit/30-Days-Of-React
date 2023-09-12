// Declare a function fullName and it takes firstName, lastName as a parameter and it returns your full - name.
const fullName = (firstName, lastName) => `${firstName} ${lastName}`;

console.log(fullName("Jon", "Doe"));

// Declare a function addNumbers and it takes two two parameters and it returns sum.
const addNumbers = (a, b) => a + b;

console.log(addNumbers(1, 10));

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates _areaOfCircle
const areaOfCircle = (r) => Math.PI * r * r;

console.log(areaOfCircle(10));

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32.
// Write a function which convert oC to oF convertCelciusToFahrenheit.
const convertCelciusToFahrenheit = (oC) => (oC * 9) / 5 + 32;

console.log(convertCelciusToFahrenheit(30));

// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2.
// Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.
// Check if a person is underweight, normal, overweight or obese based the information given below.
// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more
const calculateBmi = (weight, height) => weight / (height * height);
const calculateWeightClass = (bmi) =>
  bmi < 18.5
    ? "Underweight"
    : bmi < 24.9
    ? "Normal weight"
    : bmi < 29.9
    ? "Overweight"
    : "Obese";

let bmi = calculateBmi(82, 1.82);

let weightClass = calculateWeightClass(bmi);
console.log(bmi, weightClass);

// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month) {
  const Autumn = ["September", "October", "November"];
  const Winter = ["December", "January", "February"];
  const Spring = ["March", "April", "May"];
  const Summer = ["June", "July", "August"];

  if (Autumn.includes(month)) {
    return "Autumn";
  } else if (Winter.includes(month)) {
    return "Winter";
  } else if (Spring.includes(month)) {
    return "Spring";
  } else if (Summer.includes(month)) {
    return "Summer";
  }
}

console.log(checkSeason("October"));
