'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
var sementara = 0;
for(var i = 0; i < arr.length-1; i++){
  while(arr[i] > arr[i+1] && i >= 0){
    sementara = arr[i];
    arr[i] = arr[i+1]
    arr[i+1] = sementara;
    i--
  }
}

  console.log(arr)
  return arr
}

function binary_search (search, array) {
  // Your searching code
var awal = 0;
var akhir = array.length-1;
var mid;

    while(awal <= akhir){
       mid = Math.floor((awal + akhir) /2)
      if(search > array[mid]){
      awal = mid + 1
      }
      else if (search < array[mid]){
        akhir = mid - 1
      }
      else{
        return mid
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
//
console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

// module.exports = {
//   binary_search
// }
