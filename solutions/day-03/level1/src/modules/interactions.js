export function signUp(username, email, password, users) {
  for (let user of users) {
    if (user.email === email) {
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
export function signIn(email, password, users) {
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
export function rateProduct(userId, productId, newRating, products) {
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
export function averageRating(productId, products) {
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
export function likeProduct(userId, productId, products) {
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
