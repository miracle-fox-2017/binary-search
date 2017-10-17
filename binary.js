'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  let penampung;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        penampung = arr[i];
        arr[i] = arr[j]
        arr[j] = penampung
      }
    }
  }
  return arr;
}

function binary_search(search, array, startIndex = 0, highIndex = array.length - 1) {
  let orderedData = ownSort(array);

  if (startIndex <= highIndex) {
    let midIndex = Math.floor((startIndex + highIndex) / 2)
    if (search < orderedData[midIndex]) {
      return binary_search(search, orderedData, startIndex, midIndex - 1)
    } else if (search > orderedData[midIndex]) {
      return binary_search(search, orderedData, midIndex + 1, highIndex)
    } else {
      return midIndex;
    }
  }
  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
