function compara(n1, n2) {
  let soma = n1 + n2
  let igualdesigual = ``
  let intervalo = ``
  let mensagem = ``

  // conferere os números
  if ((igualdesigual = n1 === n2)) {
    igualdesigual = `iguais`
  } else {
    igualdesigual = `desiguais`
  }
  // verifica se está dentro do intervalo
  if (soma >= 10 && soma <= 20) {
    intervalo = `dentro`
  } else {
    intervalo = `fora`
  }

  // concatena as variáveis criadas com a mensagem
  mensagem = `Os números ${n1} e ${n2} são ${igualdesigual}. A soma é igual a ${soma}. O resultado está ${intervalo} do intervalo entre 10 e 20.`

  return mensagem
}

console.log(compara(10, 15))
