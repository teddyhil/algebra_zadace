// Zadatak 1 (stolni tenis - zadaća 16.11., dodani objekti)

function izracunajPostotak(manjiBroj, ukupanBroj) {
  return (manjiBroj / ukupanBroj) * 100;
}

const ukupnoIgraca = 10000;

const zemlja1 = {
  imeZemlje: "Hrvatska",
  brojIgraca: 10,
};
const zemlja2 = {
  imeZemlje: "Kina",
  brojIgraca: 3441,
};
const zemlja3 = {
  imeZemlje: "SAD",
  brojIgraca: 332,
};

function stolniTenis(zemlja, populacija) {
  let postotak =
    Math.round(izracunajPostotak(populacija, ukupnoIgraca) * 100) / 100;
  console.log(
    `${zemlja} ima ${populacija} stolnotenisača, što je oko ${postotak}% svijeta.`
  );
}

stolniTenis(zemlja1.imeZemlje, zemlja1.brojIgraca);
stolniTenis(zemlja2.imeZemlje, zemlja2.brojIgraca);
stolniTenis(zemlja3.imeZemlje, zemlja3.brojIgraca);

/* Zadatak 2

Joža želi izraditi jednostavan kalkulator za napojnice. U njegovoj zemlji uobičajeno je
dati 15% za napojnicu ako je račun između 50 i 300. Ako je vrijednost drugačija onda je
napojnica 20%..
Vaš zadatak je izračunati napojnicu ovisno o veličini računa. Napravi funkciju koja će računati napojnicu.*/

function calculateTip(receipt) {
  if (receipt >= 50 && receipt <= 300) {
    return receipt * 0.15;
  } else {
    return receipt * 0.2;
  }
}

///Napravite Listu koja će koristiti testne podatke dolje.

const receiptList = [125, 555, 44];

/* Napravite listu napojnice koja će sadržavati vrijednosti napojnice za svaki račun, vrijednosti koje ste
dobili koristeći funkciju za izračun napojnica. */

const tipList = [
  calculateTip(receiptList[0]),
  calculateTip(receiptList[1]),
  calculateTip(receiptList[2]),
];

console.log(receiptList, tipList);

/* Napravi listu sa ukupnim iznosima, znači račun + napojnica (total).

Tip : svaka lista treba vrijednosti na svakom polju i svaka vrijednost može biti return vrijednost funkcije.
Ne možete samo nazvati funkciju sa vrijednostima liste. Stoga ne spremajte vrijednosti napojnice u posebne
varijable prvo nego direktno u novu listu

testni podaci:

račun 125
račun 555
račun 44 */

const newList = [
  receiptList[0] + calculateTip(receiptList[0]),
  receiptList[1] + calculateTip(receiptList[1]),
  receiptList[2] + calculateTip(receiptList[2]),
];

console.log(newList);
