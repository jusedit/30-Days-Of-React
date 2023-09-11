/** Create an object literal called personAccount. 
It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. 
Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
*/
const personAccount = {
  firstName: "Pablo",
  lastName: "Mueller",
  incomes: [],
  expenses: [],
  totalIncome: function () {
    let total = 0;
    for (const income of this.incomes) {
      total += income.amount;
    }
    return total;
  },
  totalExpense: function () {
    let total = 0;
    for (const expense of this.expenses) {
      total += expense.amount;
    }
    return total;
  },
  addIncome: function (description, amount) {
    this.incomes.push({ description: description, amount: amount });
  },
  addExpense: function (description, amount) {
    this.expenses.push({ description: description, amount: amount });
  },
  accountBalance: function () {
    return this.totalIncome() - this.totalExpense();
  },
  accountInfo: function () {
    return `${this.firstName} ${
      this.lastName
    } has a total income of ${this.totalIncome()} and expenses of ${this.totalExpense()}. the account balance is ${this.accountBalance()}.`;
  },
};
// Example usage:
personAccount.addIncome("Salary", 5000);
personAccount.addIncome("Freelance", 1000);
personAccount.addExpense("Rent", 1500);
personAccount.addExpense("Utilities", 300);
console.log(personAccount.accountInfo());

// **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];
// Imagine you are getting the above users collection from a MongoDB database.
// a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
function signUp(username, email, password) {
  for (user of users) {
    if (user.email == email) {
      return "Account already exists.";
    }
  }
  const newUser = {
    _id: null,
    username: username,
    email: email,
    password: password,
    createdAt: new Date().toLocaleString("en-US"),
    isLoggedIn: false,
  };
  users.push(newUser);
  return "Account created!";
}
console.log(signUp("admin", "admin@mail.io", "123secure"));
console.log(signUp("admin", "admin@mail.io", "123secure"));
// b. Create a function called signIn which allows user to sign in to the application
function signIn(email, password) {
  for (let id in users) {
    const user = users[id];
    if (user.email == email) {
      if (user.password != password) {
        return "Password invalid.";
      } else {
        users[id].isLoggedIn = true;
        return "Login success.";
      }
    }
  }
  return "Invalid User.";
}
console.log(signIn("admin@mail.io", "123securre"));
console.log(signIn("admin@mail.io", "123secure"));
// The products array has three elements and each of them has six properties.
// a. Create a function called rateProduct which rates the product
function rateProduct(userId, productId, newRating) {
  for (let id in products) {
    let product = products[id];
    if (productId == product._id) {
      for (let ratingId in product.ratings) {
        let rating = product.ratings[ratingId];
        if (userId == rating.userId) {
          products[id].ratings[ratingId].rate = newRating;
          return "Rating updated!";
        }
      }
      products[id].ratings.push({ userId: userId, rate: newRating });
      return "Rating added!";
    }
  }
  return "Product not found!";
}
console.log(rateProduct("fg12cy", "hedfcg", 4));
console.log(rateProduct("eefamr", "hedfcg", 1));
// b. Create a function called averageRating which calculate the average rating of a product
function averageRating(productId) {
  for (let product of products) {
    if (productId === product._id) {
      if (product.ratings.length === 0) {
        return "No ratings yet for this product.";
      }
      let sum = product.ratings.reduce((acc, curr) => acc + curr.rate, 0);
      return sum / product.ratings.length;
    }
  }
  return "Product not found!";
}

console.log(averageRating("hedfcg"));
console.log(averageRating("nonexistent_id"));
console.log(averageRating("aegfal"));

// Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
function likeProduct(userId, productId) {
  for (let id in products) {
    let product = products[id];
    if (productId == product._id) {
      let index = product.likes.indexOf(userId);
      if (index != -1) {
        product.likes.splice(index, 1);
        return "Like removed";
      } else {
        product.likes.push(userId);
        return "Like added";
      }
    }
  }
  return "Product not found!";
}
console.log(likeProduct("fg12cy", "hedfcg"));
console.log(likeProduct("fg12cy", "hedfcg"));
