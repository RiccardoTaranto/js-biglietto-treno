
let km = prompt("Quanti Km devi percorrere?");
let age = prompt("Quanti anni hai?");

km = parseFloat(km);
age = parseInt(age);
//il numero di chilometri che vuole percorrere e l'età del passeggero//

const prezzoPerKm = 0.21;
let prezzoTotale = km * prezzoPerKm;
//il prezzo del biglietto è definito in base ai km (0.21 € al km)//

if (age < 18) {
    prezzoTotale = prezzoTotale - (prezzoTotale * 0.2);
    //va applicato uno sconto del 20% per i minorenni//
} else if (age > 65) {
    prezzoTotale = prezzoTotale - (prezzoTotale * 0.4);
    //va applicato uno sconto del 40% per gli over 65//
}

let prezzoFinale = prezzoTotale.toFixed(2);

console.log("Il prezzo del biglietto è: €" + prezzoFinale);

