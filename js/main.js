//ll programma dovrà chiedere all’utente il numero di chilometri
//e l’età
//e dovrà calcolare il prezzo totale del viaggio.
//Il prezzo del biglietto è definito in base ai km (0.21 €cent al km)
//ma c’è uno sconto del 20% per i minorenni
//e del 40% per gli over 65
var km = prompt ("inserisca il numero di chilometri che dovrà percorrere");

console.log(km);

var eta = prompt ("inserisca la sua età");

console.log(eta);

var prezzo = km * 0,21;

console.log(prezzo);

var sconto;


if (eta < 18) {
  sconto = (prezzo / 100) * 20;
  prezzo -= sconto;


} else if (eta > 65){
  sconto = (prezzo / 100) * 40;
  prezzo -=  sconto;
}

document.mioid('h1').innerHTML = 'Il costo del tuo biglietto è: 'prezzo + ' euro;';
