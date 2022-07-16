console.log('vinculado ao index.html')

let button = document.getElementById('button')
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2')as HTMLInputElement;

function soma(n1:number, n2:number, devPrintar:boolean, frase:string){

if (devPrintar){
  console.log(n1 + n2)
}
  return n1 + n2 + frase
}
  let devPrintar = true;
  let frase = 'O resultado é:'

if (button){
  button.addEventListener('click',()=>{
if(input1 && input2){
  console.log(soma (Number(input1.value), Number(input2.value), devPrintar, frase))
}

  })
}


// const pessoa-{
// nome: 'Rafael',
// idade: '30',
// profissao: 'dev'
// }

// pessoa.idade=31;

const Pedro: {nome: string, idade: number, profissao: string} ={
  nome: 'Pedro',
  idade: 31,
  profissao: 'dev'
}
