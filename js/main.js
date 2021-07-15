/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

var chilometri = prompt("inserire il numero di km che vuole percorrere");
var eta = prompt("Inserire età passeggero")
var prezzo = chilometri * 0.21;

console.log(chilometri * 0.21);

var minorenne = eta < 18;
var maturo = eta > 65;

if (eta < 18)
{
    prezzo = prezzo * 0.8;
}
else if (eta > 65)
{
    prezzo = prezzo * 0.6;
}

document.getElementById("prezzo").innerHTML = prezzo;






