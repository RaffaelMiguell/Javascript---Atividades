// Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1.
// Exemplo: Input -> [1, 3, 4, 6, 80, 33, 23, 90]
// Output -> [1, 3, 0, 0, 0, 33, 23, 0]
// Input -> []
// Output -> -1

function substituiPares(array){
  for(let i=0; i<array.length; i++){
    if(array[i]===0){
    console.log("O númeor informado já é zero.")
    }else if(array[i]%2===0){
      console.log(`Substituindo ${array[i]} por 0...`);
      array[i]=0;
    }
  }
  return array;
}

let array=[1,2,3,4,5,6,7,8,9,10];

substituiPares(array);

// console.log(array)




// for para percorrer o array
// if para verificar se índice do array é 0
// else if para verificar o resto da divisão por 2 (par) - se sim, troca o índice atual por 0