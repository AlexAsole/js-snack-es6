// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono
// solo nomi e falli subiti e stampiamo tutto in console.

function randomStuff(n, m){ // random number generator
  return Math.floor(Math.random() * (m + 1 - n) + n);
}

let min = 1;
let max = 60;


const squadre = [
  {'nome': 'Milan', 'punti': 0 , 'falli': 0 },
  {'nome': 'Inter', 'punti': 0 , 'falli': 0 },
  {'nome': 'Juventus', 'punti': 0 , 'falli': 0 },
  {'nome': 'Napoli', 'punti': 0 , 'falli': 0 },
  {'nome': 'Fiorentina', 'punti': 0 , 'falli': 0 },
]

let oggFalli = {};
let arrFalli = [];

for (let i = 0; i < squadre.length; i++) {
  let firstTeam = squadre[i];
  firstTeam.punti = randomStuff(min, max);
  firstTeam.falli = randomStuff(min, max);
  let {nome, falli} = firstTeam;
  arrFalli.push(oggFalli = {
    nome,
    falli,
  });
};

for (let i = 0; i < arrFalli.length; i++) {
  let secondTeam = arrFalli[i];
  let {nome, falli} = secondTeam;
  console.log(`la squadra ${nome} ha subito ${falli} falli!`)
}
