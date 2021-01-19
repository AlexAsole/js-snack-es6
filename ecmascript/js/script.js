const bici = [
  {'nome': 'Qui', 'peso': 10},
  {'nome': 'Quo', 'peso': 7},
  {'nome': 'Qui', 'peso': 8}
];

let minimo = bici[0];

for (let i = 1; i < bici.length; i++) {
  if(bici[i].peso < minimo.peso){
    minimo = bici[i];
  };
};

let {nome, peso} = minimo;

console.log(`La bici più leggera è ${nome} che pesa ${peso} Kg!`);
