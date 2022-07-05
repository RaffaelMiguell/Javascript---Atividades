function returnEvenValues(array) {
  let evenNums = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenNums.push(array[i]);
    }
  }
  console.log(evenNums);
}

let array = [1, 2, 4, 5, 7, 8,9,10,11,12,13,14,15,16]

returnEvenValues(array);

