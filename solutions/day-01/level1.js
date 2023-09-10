// Declare an empty array;
let empty = [];
// Declare an array with more than 5 number of elements
let array = [1,2,3,4,5,6,7];
// Find the length of your array
let len = array.length;
console.log(len)
// Get the first item, the middle item and the last item of the array
console.log(array[0], array[Math.floor(len/2)], array[len-1])
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = [,"A", 1.2, 1, [], true];
len = mixedDataTypes.length;
console.log(len)
// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".split(", ");
// Print the array using console.log()
console.log(itCompanies);
// Print the number of companies in the array
len = itCompanies.length;
console.log(len);
//Print the first company, middle and last company
console.log(itCompanies[0], itCompanies[Math.floor(len/2)], itCompanies[len-1])
// Print out each company
for(var i = 0; i < len; i++){
	console.log(itCompanies[i]);
}
// Change each company name to uppercase one by one and print them out
let itCompaniesUpper = itCompanies.map((v) => {return v.toUpperCase()});
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let last = itCompanies.pop();
let sentence = itCompanies.join(", ")+" and "+last;
console.log(sentence)
// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let ind = itCompanies.indexOf("Headbook");
if(ind != -1){
	console.log(itCompanies[ind]);
}else{
	console.log("company is not found");
}
// Filter out companies which have more than one 'o' without the filter method
let filtered = [];
for(var c in itCompanies){
	if((itCompanies[c].match(/o/gi) || []).length < 2){
  	filtered.push(itCompanies[c]);
  }
}
console.log(filtered)
// Sort the array using sort() method
itCompanies.sort()
// Reverse the array using reverse() method
itCompanies.reverse()
console.log(itCompanies)
// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0,3))
// Slice out the last 3 companies from the array
console.log(itCompanies.slice(len-4,len-1))
// Slice out the middle IT company or companies from the array
len = itCompanies.length;
console.log(itCompanies.slice(len-Math.floor(len/2)-1,len-Math.floor(len/2)+(len%2?0:1)))
// Remove the first IT company from the array
itCompanies.shift()
console.log(itCompanies)
// Remove the middle IT company or companies from the array
len = itCompanies.length;
itCompanies.splice(Math.floor(len/2)-1, 1+(len%2))
console.log(itCompanies)
// Remove the last IT company from the array
len = itCompanies.length;
itCompanies.splice(len-1, 1)
console.log(itCompanies)
// Remove all IT companies
itCompanies.splice(0)
console.log(itCompanies)
