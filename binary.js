'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  var sortedArray = [];
  var terkecil = 0;

  while (arr.length > 0) {
  	terkecil = getMinArray(arr);
  	sortedArray.push(terkecil);
  	arr.splice(arr.indexOf(terkecil), 1);
  }

  return sortedArray;
}

function getMinArray(arr) {
  var minVal = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (minVal > arr[i]) {
      minVal = arr[i];
    }
  }

  return minVal;
}

function binarySearch(cari, arr){
  var startIndex = 0;
  var endIndex = arr.length - 1;
  var searchFound = false;
  var resIndex = 0;
  debugger

  while (searchFound === false) {
    var midIndex = Math.floor(startIndex + (endIndex - startIndex) / 2);
    var arrMidValue = arr[midIndex];
    debugger

    if (arrMidValue > cari) {
      debugger
      endIndex = midIndex - 1;
    }

    if (arrMidValue < cari) {
      debugger
      startIndex = midIndex + 1;
    }

    if (arrMidValue === cari) {
      debugger
      resIndex = midIndex;
      searchFound = true;
    }

    if (Math.abs(endIndex - startIndex) == 1) {
      resIndex = -1;
      break;
    }   
  } 

  return resIndex;
}


var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)


// Driver code
console.log(binarySearch(8, arrayGenapSorted))
console.log(binarySearch(10, arrayGenapSorted))
console.log(binarySearch(33, arrayGenapSorted))

console.log(binarySearch(53, arrayGanjilSorted))
console.log(binarySearch(3, arrayGanjilSorted))
console.log(binarySearch(2, arrayGanjilSorted))

module.exports = {
  binarySearch
}
