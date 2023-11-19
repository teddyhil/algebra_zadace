const masaMarko = 78;
const visinaMarko = 1.69;
const masaJosip = 92;
const visinaJosip = 1.95;

const bmiMarko = masaMarko / visinaMarko ** 2;
const bmiJosip = masaJosip / visinaJosip ** 2;
if (bmiMarko > bmiJosip) {
  console.log(
    `Markov bmi od ${bmiMarko} je veći od Josipovog bmi-a od ${bmiJosip}.`
  );
} else if (bmiMarko < bmiJosip) {
  console.log(
    `Josipov bmi od ${bmiJosip} je veći od Markovog bmi-a od ${bmiMarko}.`
  );
} else {
  console.log(`Markov i Josipov bmi su jednaki, ${bmiJosip}.`);
}

// Zadatak 2

const engleski = true;
const manjeOd50M = true;
const nijeOtok = true;
const hrvatska = false;

const uvjeti = hrvatska && engleski && manjeOd50M && nijeOtok;

if (uvjeti) {
  console.log(`Zemlja u kojoj želite živjeti je Hrvatska`);
} else {
  console.log(`Hrvatska nije zemlja u kojoj želite živjeti`);
}
