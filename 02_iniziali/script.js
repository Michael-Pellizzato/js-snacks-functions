/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
const newArray = []


// Dichiara la funzione qui.
function arrayNew (){
    for (let i = 0; i < names.length; i++){
        newArray.push(names[i][0])
   }
        
        
       

       
        


}
 

// Invoca la funzione qui e stampa il risultato in console
arrayNew()

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
 console.log(newArray)