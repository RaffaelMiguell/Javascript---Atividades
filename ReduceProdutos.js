// Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.

const produtos = [
  {
    name: 'sabao',
    preco: 30
  },
  {
    name: 'macarrao',
    preco: 10
  },
  {
    name: 'alface',
    preco: 5
  }
]

let saldo = 400

function calcula(saldo, produtos) {
  return produtos.reduce(function (prev, current, index) {
    console.log('rodada ', index + 1)
    console.log({ prev }) /* ({})=mostrar como objeto */
    console.log({ current })
    return prev - current.preco
  }, saldo) /* prev= inicia a partir do saldo */
}

console.log(calcula(saldo, produtos))
