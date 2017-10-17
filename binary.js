'use strict'
/**
 * 
 */

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code

  for (var i = 1; i < arr.length; i++) {
    for (var j = 0; j < i; j++) {
      var temp = arr[i];
      if (arr[i] < arr[j]) {

        arr[i] = arr[j];
        arr[j] = temp;
      }
    }

  }
  console.log(arr)
  return arr
}

function binary_search(search, array, idxStart = 0, idxEnd = array.length - 1) {
  // Your searching code
  // console.log(array)
  
  // console.log(idxMid)
  // while (idxStart <= idxEnd) {
  if(idxStart <= idxEnd){
    var idxMid = Math.round((idxStart + idxEnd) / 2);
  
    if (array[idxMid] > search) {
      // idxEnd = idxMid - 1;
      return binary_search(search, array, idxStart, idxMid - 1 )
     
      // idxMid = Math.round((idxStart + idxEnd) /2);
    } else if (array[idxMid] < search) {
      return binary_search(search, array, idxMid + 1, idxEnd)
     
    }
    // idxMid = Math.round((idxEnd + idxStart) / 2);
    return idxMid
  }
  return -1
  }
  
// }

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
// console.log(binary_search(8, arrayGenapSorted))
// console.log(binary_search(10, arrayGenapSorted))
// console.log(binary_search(33, arrayGenapSorted))

// console.log(binary_search(53, arrayGanjilSorted))
// console.log(binary_search(3, arrayGanjilSorted))
// console.log(binary_search(2, arrayGanjilSorted))
console.log(binary_search(77, arrayGanjilSorted))
// module.exports = {
//   binary_search
// }