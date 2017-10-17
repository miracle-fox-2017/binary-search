'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < i; j++){
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
var min = 0;
var max = array.length -1;
while(min <= max){
  var mid = Math.floor((min + max) /2);
  if(search > array[mid]){
    min = mid + 1;

  } else if (search < array[mid]){
    max = mid - 1;
  } else {
    return mid;
  }
}
  return -1;
  }


var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// console.log(arrayGenapSorted);
// console.log(arrayGanjilSorted);

// // Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
