// Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você, e depois sem ele


// ***************com this******************

// const maca={
//   value: 2,
// }

// const laranja={
//   value:3,
// }

// function mapThis(array, thisArg) {
//   return array.map(function (item) {
//     return item * this.value;
//   }, thisArg);
  
// }

// const nums =[1,2];

// console.log('maçã', mapThis(nums,maca));
// console.log('laranja', mapThis(nums,laranja));


// ***************sem this******************

function mapSthis(meuarray){
  return meuarray.map(function(item){
    return item*2;
  })
}

const nums =[1,2,3,4,5,6];

console.log(mapSthis(nums));