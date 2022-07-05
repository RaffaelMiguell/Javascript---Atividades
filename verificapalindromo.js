/* palindromo: palavra que terá o mesmo sentido sendo lida de trás para frente */

// solução 01

function verificaPalindromo(string) {
  if (!string) return
  /* split - separa os caracteres* + reverse - inverte a ordem de leitura da string*/
  /* join - junta os caracteres e forma a string*/

  // return string.split('').reverse().join('');
  return string.split('').reverse().join('') === string
}
// console.log(verificaPalindromo('ama'))

// ********************************************************

// solução 02 - corrigido

function verificaPalindromo2(string) {
  if (!string) return 'string inexistente'

  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false
    }
  }
  return true
}

console.log(verificaPalindromo2('ouo'))
