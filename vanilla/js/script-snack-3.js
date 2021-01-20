// Si scriva una funzione che accetti tre argomenti, un array e due numeri (A più piccolo di B).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri
function newArray(arr, min, max) {
  var newArray = [];
  for (var x = 0; x < arr.length; x++) {
    if ((x >= min) && (x <= max)) {
      newArray.push(arr[x])
    }
  }
  return newArray;
}

var numArray = [1,2,3,4,5,6,7,8,9,10];
var a = 5;
var b = 8;

console.log(newArray(numArray, a, b));
