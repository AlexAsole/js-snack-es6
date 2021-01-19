// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono
// solo nomi e falli subiti e stampiamo tutto in console.

function randomStuff(n, m){ // random number generator
  var pcNumber = Math.floor(Math.random() * (m + 1 - n) + n);
  return pcNumber;
}

var min = 1;
var max = 60;


var squadre = [
  {'nome': 'Milan', 'punti': 0 , 'falli': 0 },
  {'nome': 'Inter', 'punti': 0 , 'falli': 0 },
  {'nome': 'Juventus', 'punti': 0 , 'falli': 0 },
  {'nome': 'Napoli', 'punti': 0 , 'falli': 0 },
  {'nome': 'Fiorentina', 'punti': 0 , 'falli': 0 },
]

var oggFalli = {};
var arrFalli = [];

for (var i = 0; i < squadre.length; i++) {
  squadre[i].punti = randomStuff(min, max);
  squadre[i].falli = randomStuff(min, max);
  oggFalli.nome = squadre[i].nome;
  oggFalli.falli = squadre[i].falli;
  arrFalli.push(oggFalli);
  console.log('La squadra ' + arrFalli[i].nome + ' ha subito ' + arrFalli[i].falli + ' falli!' )
  oggFalli = {};
};
