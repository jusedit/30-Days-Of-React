let age = 20;//parseInt(prompt("Enter your age:"));
if(age >= 18){
	console.log("You are old enough to drive.")
}else{
	console.log("You are left with "+(18-age)+" years to drive.")
}
let myAge = 25;
let yourAge = 20;//parseInt(prompt("Enter your age"));
if(myAge > yourAge){
console.log("I am "+(myAge-yourAge)+" years older than you");
}else if(yourAge > myAge){
console.log("You are "+(yourAge-myAge)+" years older than me");
}else{
console.log("We are the same age.");
}
// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways
let a = 4
let b = 3
// using if else
if(a > b){
    console.log(a.toString()+" is greater than "+b.toString());
}else{
    console.log(b.toString()+" is greater than "+a.toString());
}
// ternary operator.
console.log((a>b?a:b).toString()+" is greater than "+(a>b?b:a).toString());