'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for(var i = 1; i <= arr.length-1; i++){
    for(var j = 0; j < i - 1; j++){
      if(arr[i] < arr[j]){
        var tampung = arr[i]
        arr[i] = arr[j];
        arr[j] = tampung;
      }
    }
  }
  console.log(arr)
  return arr
}

function binary_search (search, array) {
  // Your searching code
  var highIndex = array.length;
  var startIndex = 0;
  while(startIndex <= highIndex){
    var midIndex = Math.floor((startIndex + highIndex)/2);
    console.log(midIndex);
    if(array[midIndex] === search){
      return midIndex;
    }
    else if(array[midIndex] < search){
      startIndex = midIndex+1
    }
    else if(array[midIndex] > search){
      highIndex = midIndex-1
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
