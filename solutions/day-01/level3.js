/*
Exercise: Level 3
The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]  - Sort the array and find the min and max age - Find the median age(one middle item or two middle items divided by two) - Find the average age(all items divided by number of items) - Find the range of the ages(max minus min) - Compare the value of (min - average) and (max - average), use abs() method*/
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
let len = ages.length;
let min = ages[0];
let max = ages[len-1];
let med = len%2?(ages[Math.floor(len/2)]+ages[Math.ceil(len/2)])/2:ages[len/2];
let avg = ages.reduce((x,y) => {return x+y})/len;
let range = max - min;
let miAvg = Math.abs(min-avg)
let maAvg = Math.abs(max-avg)
console.log(min, max, med, avg, range, miAvg, maAvg)

//1.Slice the first ten countries from the countries array
let firstCountries = countries.slice(0, 10);
console.log(firstCountries)
//Find the middle country(ies) in the countries array
len = countries.length
let middle = len%2?[countries[Math.floor(len/2)]].concat([countries[Math.ceil(len/2)]]):countries[len/2];
console.log(middle)
//Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
let first = countries.splice(0, Math.ceil(len/2));
console.log(first, countries)