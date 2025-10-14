/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
const newArray = []

function firstLetter(letter) {

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (name[0] === letter) {
      newArray.push(name)
    };

    return newArray;

  }

}


// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]


