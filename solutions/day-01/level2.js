const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ];
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ];
  // First remove all the punctuations and change the string to array and count the number of words in the array
  let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
  let words = text.replaceAll(/([^A-z ]*)/g, "").split(" "); 
  console.log(words)
  console.log(words.length)
  /*
  In the following shopping cart add, remove, edit items
  
  add 'Meat' in the beginning of your shopping cart if it has not been already added
  add Sugar at the end of you shopping cart if it has not been already added
  remove 'Honey' if you are allergic to honey
  modify Tea to 'Green Tea'
  
  */
  const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
  if(shoppingCart.indexOf("Meat") == -1)
      shoppingCart.unshift("Meat");
  if(shoppingCart.indexOf("Sugar") == -1)
      shoppingCart.push("Sugar");
  let allergic = true;
  if(allergic){
      let pos = shoppingCart.indexOf("Honey");
    shoppingCart.splice(pos, 1);
  }
  let pos = shoppingCart.indexOf("Tea");
  shoppingCart[pos] = "Green Tea";
  console.log(shoppingCart)
  // In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
  let country = "Ethiopia"
  if(countries.includes(country)){
      console.log(country.toUpperCase());
  }else{
      countries.push(country);
  }
  // In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
  let webTech = "Sass"
  if(webTechs.includes(webTech)){
      console.log('Sass is a CSS preprocess');
  }else{
      webTechs.push(webTech);
    console.log(webTechs);
  }
  // Concatenate the following two variables and store it in a fullStack variable.
  const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
  const backEnd = ['Node', 'Express', 'MongoDB']
  let fullStack = frontEnd.concat(backEnd);
  console.log(fullStack)