// temperature in kelvin scale
const kelvin = 293;

//changing kelvin to celsius scale
const celsius = kelvin - 273;

//relationship between fahrenheit and celsius scale
let fahrenheit = celsius *(9/5) + 32;

//to get integer value
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

//relationship between newton scale and celsius scale
let newton = celsius*(33/100);

newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);

