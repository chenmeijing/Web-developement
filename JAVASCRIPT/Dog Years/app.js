//setting my age
const myAge = 22;
//seeting two early years
let earlyYears = 2;

earlyYears*=10.5;
//get the latter year by substrating 2 from age
let laterYears = myAge - 2;
//to calculate the number of dog years 
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);
// human age in dog years

let myAgeInDogYears = earlyYears + laterYears;
//changing name to lower case 
let myName = 'Stephanie Chen'.toLowerCase(); 

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);