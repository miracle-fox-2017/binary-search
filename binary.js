'use strict'
/*
1. tentukan nilai atas dan bawah
2. ulang selama nilai atas lebih besar sama dengan bawah
tentukan nilai tengah dengan atas + bawah / 2
jika search lebih besar dari nilai array tengah maka bawah = tengah + 1
else jika search lebih kecil dari nilai array tengah maka atas = tengah - 1
else jika search sama dengan array tengah maka return tengah
akhir ulang
3. return -1 jika tidak ditemukan
*/
var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  var tampung = 0
  for(var i = 1; i < arr.length; i++) {
    for(var j = 0; j < i; j++) {
      if(arr[i] < arr[j]) {
        tampung = arr[j]
        arr[j] = arr[i]
        arr[i] = tampung
      }
    }
  }
  return arr
}

function binary_search (search, array) {
  // Your searching code
  var atas = array.length
  var bawah = 0

  while(atas >= bawah) {
    var tengah = Math.floor((atas + bawah) / 2)

    if(search > array[tengah]) {
      bawah = tengah + 1
    }
    else if(search < array[tengah]) {
      atas = tengah - 1
    }
    else if(search == array[tengah]) {
      return tengah
    }
  }
  return -1
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(ownSort(testArrayGenap));
console.log(ownSort(testArrayGanjil));
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))
//
console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
