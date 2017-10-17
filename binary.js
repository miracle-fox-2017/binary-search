'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < i; j++){
      // console.log('masuk for ke 2')
      if(arr[i] < arr[j]){
        var tampung = 0;
        tampung = arr[j];
        arr[j] = arr[i];
        arr[i] = tampung;
      }
   }
 }
 return arr
}



function binary_search (search, array) {
    var start = 0;
    var end = array.length - 1;
    var mid = Math.floor((start + end) / 2);
    while (true)
    {
      if (search === array[mid])
      {
        return mid;
      }
      else if (search < array[mid])
      {
        end = mid - 1;
      }
      else if (search > array)
      {
        start = mid + 1;
      }
      else
      {
          return -1;
      }
      mid = Math.floor((start + end) / 2);

    }
    return 0;
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

// module.exports = {
//   binary_search
// }
