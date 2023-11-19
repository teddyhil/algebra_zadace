// Zadatak 1

var x, xx;
x = "Prva varijabla";

const y = "Konstanta ipsilon";

let z;
z = "Let it z";

let zz = true;

console.log(x, xx, y, z, zz);

// Zadatak 2

let populacijaHR, populacijaSLO;
populacijaHR = 3871833; //38

let polaPopulacijeHR = populacijaHR / 2;
console.log(polaPopulacijeHR);

populacijaHR++;
console.log(populacijaHR, polaPopulacijeHR);

populacijaSLO = 1964036;
console.log(populacijaHR > populacijaSLO);

// Zadatak 3

let MarkoHeight1, MarkoWeight1, MarkoWeight2, MarkoHeight2;

MarkoWeight1 = 78;
MarkoHeight1 = 1.69;

MarkoWeight2 = 95;
MarkoHeight2 = 1.88;

let JosipHeight1, JosipWeight1, JosipHeight2, JosipWeight2;

JosipWeight1 = 92;
JosipHeight1 = 1.95;

JosipHeight2 = 1.76;
JosipWeight2 = 85;

let bmiMarko1, bmiJosip1, bmiMarko2, bmiJosip2;
bmiMarko1 = MarkoWeight1 / MarkoHeight1 ** 2;
bmiMarko2 = MarkoWeight2 / MarkoHeight2 ** 2;

let bmiMarko = (bmiMarko1 + bmiMarko2) / 2;

bmiJosip1 = JosipWeight1 / JosipHeight1 ** 2;
bmiJosip2 = JosipWeight2 / JosipHeight2 ** 2;

let bmiJosip = (bmiJosip1 + bmiJosip2) / 2;

console.log(bmiMarko > bmiJosip);

// Zadatak 4

const country = "Democratic Republic of the Congo";
const continent = "Africa";
let population = 95890000;

let templateCountry = `The ${country} is a country located in ${continent}, with a population of ${population}.`;

console.log(templateCountry);

// Zadatak 5

/* let firstNumber = Math.floor(Math.random() * 100) + 1;
console.log(firstNumber);

let secondNumber = Math.floor(Math.random() * 50) + 1;
console.log(secondNumber);

let sumOfTwo = firstNumber + secondNumber;
let diffOfTwo = firstNumber - secondNumber;

let suma = `The sum of ${firstNumber} and ${secondNumber} is ${sumOfTwo}`;
let razlika = `The difference of ${firstNumber} and ${secondNumber} is ${diffOfTwo}`; */

const a = Math.floor(Math.random() * 100 + 1);
const b = Math.floor(Math.random() * 50 + 1);

console.log(a, b);

const suma = a + b;
const razlika = a - b;

console.log(`Suma je ${suma}, a razlika ${razlika}`);
