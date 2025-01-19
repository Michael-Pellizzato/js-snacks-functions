/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
let vocali = ["a","e","i","o","u"]
let conteggio = 0
let vocaliArray = []


// Dichiara la funzione qui.
function numeroVocali (lettere,){
    for (let i = 0; i < lettere.length; i++){
        for (m = 0; m < vocali.length; m++){
            if (lettere[i] == vocali[m]) {
                conteggio++
                vocaliArray.push(vocali[m])
            }
        }
        
    }
}

// Invoca la funzione qui e stampa il risultato in console
numeroVocali(word)


//Risultato atteso se si passa 'javascript': 3 (a, a, i)
console.log(conteggio, vocaliArray)