// Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }
  get getName() {
    return this.name;
  }
  get getAge() {
    return this.age;
  }
  get getColor() {
    return this.color;
  }
  get getLegs() {
    return this.legs;
  }
  set setName(v) {
    this.name = v;
  }
  set setAge(v) {
    this.age = v;
  }
  set setColor(v) {
    this.color = v;
  }
  set setLegs(v) {
    this.legs = v;
  }
  getAnimalInfo() {
    let info = `${this.name} is ${this.age} years old. He is ${this.color} and has ${this.legs} legs.`;
    return info;
  }
}
let animal = new Animal("Kalinka", 1, "brown", 4);
animal.setAge = 1.2;
console.log(animal.getAnimalInfo());

// Create a Dog and Cat child class from the Animal Class.
// Override the method you create in Animal class
class Dog extends Animal {
  bark() {
    return `${this.name}: wuff wuff`;
  }
  getAnimalInfo() {
    let info = `${this.name} is a dog and is ${this.age} years old. He is ${this.color} and has ${this.legs} legs.`;
    return info;
  }
}
class Cat extends Animal {
  purr() {
    return `${this.name}: r-r-r-r-r`;
  }
  getAnimalInfo() {
    let info = `${this.name} is a cat and is ${this.age} years old. He is ${this.color} and has ${this.legs} legs.`;
    return info;
  }
}
let dog = new Dog("Kalinka", 1, "brown", 4);
console.log(dog.bark());
console.log(dog.getAnimalInfo());
let cat = new Cat("Alpha", 3, "grey", 4);
console.log(cat.purr());
console.log(cat.getAnimalInfo());
