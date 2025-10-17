/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function verificaVocali(parola) {

    const vocali = ["a", "e", "i", "o", "u"];
    let conta = 0;

    for (i = 0; i < parola.length; i++) {
        if (vocali.includes(parola[i].toLowerCase())) {
            conta++;
        }
    }

    return conta;
}


// Invoca la funzione qui e stampa il risultato in console
verificaVocali(word);
console.log(verificaVocali(word));



//Risultato atteso se si passa 'javascript': 3 (a, a, i)