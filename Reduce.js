// Some todos os números de um array

function somaArrays(array) {
  return array.reduce(function (prev, current) {
    return prev + current
  })
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(somaArrays(nums))
