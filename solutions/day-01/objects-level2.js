const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};
// Find the person who has many skills in the users object.
console.log("Most skilled user:");
let maxSkills = 0;
let maxSkilledName = "";
for (let name in users) {
  userSkills = users[name].skills.length;
  if (userSkills > maxSkills) {
    maxSkills = userSkills;
    maxSkilledName = name;
  }
}
console.log(maxSkilledName);

// Count logged in users,count users having greater than equal to 50 points from the following object.
let nOnline = 0;
let nMatch = 0;
for (let name in users) {
  if (users[name].isLoggedIn) nOnline++;
  if (users[name].points > 50) nMatch++;
}
console.log(`${nOnline} online and ${nMatch} have more than 50 points.`);

// Find people who are MERN stack developer from the users object
const mernRequirements = ["MongoDB", "Express", "React", "Node"];
console.log("MERN Developers:");
for (let name in users) {
  if (mernRequirements.every((skill) => users[name].skills.includes(skill))) {
    console.log(name);
  }
}

// Set your name in the users object without modifying the original users object
const jonas = {
  email: "jonas.email@example.com",
  skills: ["HTML", "CSS", "JavaScript", "PHP", "Python", "SQL", "MongoDB"],
  age: 30,
  isLoggedIn: true,
  points: 60,
};
const updatedUsers = {
  ...users,
  Jonas: jonas,
};

// Get all keys or properties of users object
console.log(Object.keys(users));

// Get all the values of users object
console.log(Object.values(users));
