'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  var tukar = 0;
  for(var i = 0 ; i < arr.length ; i++) {
    tukar = 0;
    for(var j = 0 ; j < i ; j++) {
      if(arr[i] < arr[j]) {
        tukar = arr[j];
        arr[j] = arr[i];
        arr[i] = tukar;
      }
    }
  }
  console.log(arr);
  return arr;
}

// var testArrayGenap = [8, 10, 10, 18, 22, 22, 30, 40, 90]
// var testArrayGanjil = [3, 21, 31, 53, 53 ,55, 77, 85, 89]
function binarySearch (search, array) {
  var awal = 0; // 0
  var akhir = array.length -1; // 9

while(awal <= akhir){
//pseudocodenya saya bisa cuma untuk menkonversi ke koding masih bingung
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binarySearch(8, arrayGenapSorted))
console.log(binarySearch(10, arrayGenapSorted))
console.log(binarySearch(33, arrayGenapSorted))
//
console.log(binarySearch(53, arrayGanjilSorted))
console.log(binarySearch(3, arrayGanjilSorted))
console.log(binarySearch(2, arrayGanjilSorted))

// module.exports = {
//   binary_search
// }
