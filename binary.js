'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var a = 0; a < i; a++) {
      if(arr[i] < arr[a]){
        let temp = arr[a];
        arr[a] = arr[i];
        arr[i] = temp;
      }
    }
  }
  console.log(arr);
  return arr
}

function binary_search (search, array, indexAwal = 0, indexAkhir = array.length-1) {
  let indexTengah = Math.floor((indexAwal + indexAkhir)/2)

  debugger


  if(array[indexTengah] === search){
    return indexTengah
  }

  if(indexTengah === indexAkhir) {
      return -1
  }

  if(search < array[indexTengah]){
    indexAkhir = indexTengah - 1
    return binary_search (search, array, indexAwal, indexAkhir)
  } else if(search > array[indexTengah]){

      indexAwal = indexTengah + 1
      return binary_search (search, array, indexAwal, indexAkhir)
  }
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(7, arrayGenapSorted))
console.log(binary_search(11, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(52, arrayGanjilSorted))

module.exports = {
  binary_search
}
