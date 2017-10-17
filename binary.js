'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {

  var index;
  for (var i = 0; i < arr.length; i++){
    for (var j = 0; j < i; j++){
      if(arr[i] < arr[j]){
        index = arr[j];
        arr[j] = arr[i]
        arr[i] = index
      }
    }
  }
  return arr
}

function binarySearch (search, array) {

  var max = array.length
  var min = 0;
  var mid = Math.floor((max + min) / 2)

  while(search !== array[mid] && min <= max){
    // if(search === array[mid]){
    //   return mid
    // }
    if(search < array[mid]) {
      max = mid - 1
      mid = Math.floor((max + min) / 2)// kayanya salah disini 0 + 0 / 2
    }
    else if (search > array[mid]) {
      min = mid + 1
      mid = Math.floor((max + min) / 2)
    }
  }
  return mid
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
