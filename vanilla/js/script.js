// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore

var bici = [
  {'nome': 'Qui', 'peso': 7},
  {'nome': 'Quo', 'peso': 6.5 },
  {'nome': 'Qua', 'peso': 8.5}
];
var min = bici[0];
for (var x = 1; x < bici.length; x++){
  if (bici[x].peso < min.peso){
    min = bici[x];
  }
}
console.log(min)
