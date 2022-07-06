// Filtre e retorne todos os números pares de um array.

function filtra(array){
  return array.filter(callback);
}

function callback(item){
  // return 'pares', item%2===0;
  console.log( 'impares', item%2!==0);
}

const meuArray = [1,2,3,4,5,6,7,8,9,10];

console.log(filtra(meuArray));