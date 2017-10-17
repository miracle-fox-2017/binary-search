'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 23, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  var temp = ''
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}


// console.log(ownSort(testArrayGenap));

// console.log(ownSort(testArrayGanjil));

function binarySearch(search, array) {
  console.log(array.length + "array");
  var setMid = Math.round(array.length / 2) - 1;
  console.log(setMid + "array awal");
  console.log(array[setMid] + "array set");

  if (array[setMid] === search) {
    return setMid;
  }
  console.log(search + "array set");
  if (search < array[setMid]) {
    var array = array.splice(0, setMid);
    console.log(setMid - 1 + "array kurang");
    console.log(array);
    return binarySearch(search, array);
  } else {
    var array = array.splice(setMid);
    console.log(array);
    return binarySearch(search, array);
  }
}

var arrayGenapSorted = ownSort(testArrayGenap);
var arrayGanjilSorted = ownSort(testArrayGanjil);

// Driver code
// console.log(binarySearch(8, arrayGenapSorted))
// console.log(binarySearch(10, arrayGenapSorted))
console.log(binarySearch(33, arrayGenapSorted))

// console.log(binarySearch(53, arrayGanjilSorted))
// console.log(binarySearch(3, arrayGanjilSorted))
// console.log(binarySearch(2, arrayGanjilSorted))

// module.exports = {
//   binary_search
// }