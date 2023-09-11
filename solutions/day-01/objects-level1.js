// Create an empty object called dog
let dog = {};

// Print the the dog object on the console
console.log(dog);

// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = "Kalinka";
dog.legs = 4;
dog.color = "brown";
dog.age = 1;
dog.bark = function () {
  return "woof woof";
};

//Get name, legs, color, age and bark value from the dog object
console.log("Name:", dog.name);
console.log("Legs:", dog.legs);
console.log("Color:", dog.color);
console.log("Age:", dog.age);
console.log("Bark:", dog.bark());

// Set new properties for the dog object: breed, getDogInfo
dog.breed = "Labrador";
dog.getDogInfo = function () {
  return `${this.name} is a ${this.color} ${this.breed} with ${
    this.legs
  } legs. She is ${this.age} years old and says ${this.bark()}.`;
};

// Print the dog's information using the getDogInfo method
console.log(dog.getDogInfo());
