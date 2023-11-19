"use strict";

/* Zadatak 1

Recimo da imamo 7900 lovaca u Hrvatskoj. Izračunaj koji postotak tih lovaca
dolazi iz Središnje hrvatske - nazovimo const brojLovaca1 (3840 lovaca), 
koliko iz Istre (brojLovaca2 = 500 lovaca) i koliko iz Dalmacije (brojLovaca3 = 1440 lovaca) */

const lovci = 7900;
const brojLovaca1 = 3840;
const brojLovaca2 = 500;
const brojLovaca3 = 1440;

function izracunajPostotak(manjiBroj, ukupanBroj) {
  return (manjiBroj / ukupanBroj) * 100;
}

console.log(izracunajPostotak(brojLovaca1, lovci));
console.log(izracunajPostotak(brojLovaca2, lovci));
console.log(izracunajPostotak(brojLovaca3, lovci));

/* Zadatak 2

Na svijetu ima 10000 profesionalnih igrača stolnog tenisa. Hrvatska ima 10,
Kina 3441 i USA 332. Izračunajte postotak tih igrača u odnosu na sve profesionalne igrače
i onda ih i ispišite, na način da definirate dvije funkcije, prvu koja će računati postotak
i drugu u koju ćemo ubaciti taj postotak i koja će imati 2 parametra - zemlja i populacija.
Nakon toga ispišite sve 3 vrijednosti koristeći rečenicu:
`${zemlja} ima ${populacija} stolnotenisača što je oko ${postotak}% svijeta`* */

const ukupnoIgraca = 10000;

const zemlja1 = "Hrvatska";
const zemlja2 = "Kina";
const zemlja3 = "SAD";

const igraciZemlja1 = 10;
const igraciZemlja2 = 3441;
const igraciZemlja3 = 332;

/* let postotak =  */

function stolniTenis(zemlja, populacija) {
  let postotak =
    Math.round(izracunajPostotak(populacija, ukupnoIgraca) * 100) / 100;
  console.log(
    `${zemlja} ima ${populacija} stolnotenisača, što je oko ${postotak}% svijeta.`
  );
}

stolniTenis(zemlja1, igraciZemlja1);
stolniTenis(zemlja2, igraciZemlja2);
stolniTenis(zemlja3, igraciZemlja3);

/* Zadatak 3

Imamo 2 tima, koji su igrali međusobno 6 puta. 
Želimo izračunati prosjek golova u svih 6 utakmica za svaku ekipu koristeći arrow funkciju. 
Tim pobjeđuje jedino ako ima duplo više golova od drugog tima u odnosu prosječnih golova.
Napravite arrow funkciju kako bi napravili kalkulaciju prosjeka. 
Napravite funkciju koja uzima prosjek ekipa i ispisuje pobjednika u konzoli skupa 
sa ispisom prosjeka golova obje ekipe npr. Real je u prosjeku zabio 4 gola, a Barcelona 1.
Možete iskoristi if-else petlju kako bi složili ispis. */

/* primjer 1: 
Barca : 2, 3, 1, 3, 4, 7
Real : 1, 4, 1, 5, 0, 5
primjer 2: 
Barca: 1, 2, 1, 1, 3, 5
Real : 1, 1, 3, 0, 2, 4
 */

const Barca = "FC Barcelona";
const Real = "Real Madrid";

const prosjek = (
  utakmica1,
  utakmica2,
  utakmica3,
  utakmica4,
  utakmica5,
  utakmica6
) =>
  (utakmica1 + utakmica2 + utakmica3 + utakmica4 + utakmica5 + utakmica6) / 6;

const prosjekBarca1 = prosjek(2, 3, 1, 3, 4, 7);
const prosjekReal1 = prosjek(1, 4, 1, 5, 0, 5);

const prosjekBarca2 = prosjek(1, 2, 1, 1, 3, 5);
const prosjekReal2 = prosjek(1, 1, 3, 0, 2, 4);

function checkWinner(prosjekBarca, prosjekReal) {
  if (prosjekBarca >= prosjekReal * 2) {
    console.log(
      `${Barca} je pobjednik s prosjekom broja golova od ${prosjekBarca}, dok je ${Real} imao prosjek od ${prosjekReal}.`
    );
  } else if (prosjekReal >= prosjekBarca * 2) {
    console.log(
      `${Real} je pobjednik s prosjekom broja golova od ${prosjekReal}, dok je ${Barca} imala prosjek od ${prosjekBarca}.`
    );
  } else {
    console.log(`Niti jedan klub nije pobjednik po zadanim parametrima.`);
  }
}

checkWinner(prosjekBarca1, prosjekReal1);
checkWinner(prosjekBarca2, prosjekReal2);
