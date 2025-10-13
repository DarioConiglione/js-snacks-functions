/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

let initialLet = []


function nameList() {

    for (let i = 0; i < names.length; i++) {
        let getInitial = names[i];
        initialLet.push(getInitial[0])
        }
    return initialLet

}


console.log(nameList(names))




// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]