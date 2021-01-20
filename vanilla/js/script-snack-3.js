// Si scriva una funzione che accetti tre argomenti, un array e due numeri (A più piccolo di B).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri
function newArray() {
  var newArray = [];
  for (var x = 0; x < numArray.length; x++) {
    if ((x >= a) && (x <= b)) {
      newArray.push(numArray[x])
    }
  }
  return newArray;
}

var numArray = [1,2,3,4,5,6,7,8,9,10];
var a = 2;
var b = 9;

console.log(newArray());
