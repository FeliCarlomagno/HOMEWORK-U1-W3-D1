/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
  const area = l1 * l2;
  return area;
}
area(4, 6);

const areaRettangolo = area(4, 6);
console.log("area del mio rettangolo: ", areaRettangolo);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(x, y) {
  let somma = x + y;
  let somma2 = somma * 3;
  if (x === y) {
    console.log("i numeri sono uguali: ", somma2);
  } else if (x !== y) {
    console.log("i numeri sono diversi: ", somma);
  }

  return { somma: somma, somma2: somma2 };
}

const sommaXeY = crazySum(10, 10);

console.log(sommaXeY);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(numero1, numero2) {
  let differenza = numero1 - numero2;
  let differenza2 = differenza * 3;
  if (numero1 < 19) {
    return differenza;
  } else if (numero1 > 19) {
    return differenza2;
  }
}

const differenzanum1Enum2 = crazyDiff(10, 19);

console.log(differenzanum1Enum2);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n) {
  let risultato1 = "true";
  let risultato2 = "false";

  if (n >= 20 && n <= 100) {
    return risultato1;
  } else if (n === 400) {
    return risultato1;
  } else {
    return risultato2;
  }
}

const risultatonumero = boundary(500);

console.log(risultatonumero);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(stringa) {
  let risultatoStringa = "EPICODE" + stringa;
  let risultatoStringa2 = stringa;
  if (stringa !== "EPICODE") {
    return risultatoStringa;
  } else if (stringa === "EPICODE") {
    return risultatoStringa2;
  }
}

let risultatoDiStringhe = epify("EPICODE");

console.log(risultatoDiStringhe);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(numeropositivo) {
  let multiplo3 = "il numero è un  ultiplo di 3:";
  let multiplo7 = "il numero è un multiplo di 7";
  if (numeropositivo % 3 === 0) {
    return multiplo3;
  } else if (numeropositivo % 7 === 0) {
    return multiplo7;
  }
}

let numeroMultiplo = check3and7(343);

console.log(numeroMultiplo);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(paramString) {
  return paramString.split("").reverse().join("");
}

let risultatoString = reverseString("CIAO A TUTTI");
console.log(risultatoString);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(xxxx) {}

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(number) {
  return Math.random() * 10;
}

let numeriRandom = giveMeRandom(1);

console.log(numeriRandom);
