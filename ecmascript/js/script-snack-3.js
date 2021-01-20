// Si scriva una funzione che accetti tre argomenti, un array e due numeri (A più piccolo di B).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri
const newArray = (arr, min, max) => {
  const newArray = arr.filter((element, index, array) => {
    return ((index >= (min - 1)) && (index <= (max - 1)));
  })
  return newArray;
}

const disneyArray = ['Topolino','Pippo','Paperino','Gambadilegno','Macchia Nera','Minni', 'Paperina', 'Clarabella','Trudy','Basettoni'];
const a =  parseInt(prompt(`Inserisci un numero da 1 a ${disneyArray.length}`));
const b =  parseInt(prompt(`Inserisci un numero da 1 a ${disneyArray.length}`));



console.log(newArray(disneyArray, a , b));
