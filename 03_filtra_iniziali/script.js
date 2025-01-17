/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const arraynomi = []

// Dichiara la funzione qui.
function estrainomi(array, lettera){

    for(let i= 0; i < array.length; i++){ 
        if (array[i] [0].touppercase() === lettera.touppercase()){
            arraynomi.push( array[i])
        }
    }
       
}

// Invoca la funzione qui e stampa il risultato in console

estrainomi( names, "L")

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
console.log( arraynomi)