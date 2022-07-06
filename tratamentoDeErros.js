// Crie uma função que recebe um array e um número
// Realize as seguintes validações
// Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
// Se o array não for do tipo 'object', lance um erro do tipo TypeError
// Se o número não for do tipo 'number', lance um erro do tipo TypeError
// Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
// Utilize a declaração try...catch
// Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof


function validarArray(array, num){
  try{
    if(!array && !num) throw new ReferenceError("Envie os parâmetros");
  if(typeof array!=='object') throw new TypeError("Array precisa ser do tipo object");
  if(typeof array!=='number') throw new TypeError("Array precisa ser do tipo number")
  if(typeof array.length !==num) throw new RangeError("Tamanho inválido")
  return array;
  }
  catch(varErro){
if(varErro instanceof ReferenceError){
  console.log("Tipo de erro: ReferenceError")
  console.log(varErro.message);
}
else if(varErro instanceof TypeError){
  console.log("Tipo de erro: TypeError")
  console.log(varErro.message);
}
else if(varErro instanceof RangeError){
  console.log("Tipo de erro: ReferenceError")
  console.log(varErro.message);
}
else{
  console.log('Erro não esperado.')
  console.log(varErro.message)
}
  }
}

// const array=[1,2,3,4];
// let num=[1,2,3,4];
// console.log(validarArray(array,num));

console.log(validarArray())