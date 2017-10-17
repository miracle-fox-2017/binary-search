'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  let sort =[];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < i; j++) {
      if (arr[j] > arr[i]) {
        sort = arr[i];
        arr[i]= arr[j];
        arr[j]= sort;
      }
    }
  }
  return arr
}

console.log(ownSort(testArrayGenap));
console.log(ownSort(testArrayGanjil));

function binary_search (search, array) {
  // Your searching code
  let i = 0; //star
  let arr_l = array.length-1; //stop
  let sort = 0;
  while (i<= arr_l) {
    sort = Math.floor(i + (arr_l - i)/2);
    if (search < array[sort]) {
      arr_l= sort -1;
      //console.log('isi sort -',sort);
    }
    else if (search > array[sort]) {
      i = sort +1;
      //console.log('isi sort +',sort);
    }
    else {
      return sort;
    }
  }
  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(8, arrayGenapSorted)) //genap=0
console.log(binary_search(10, arrayGenapSorted))//genap=1
console.log(binary_search(33, arrayGenapSorted))//genap=-1
//console.log('-----');
console.log(binary_search(53, arrayGanjilSorted)) //ganjil 4
console.log(binary_search(3, arrayGanjilSorted)) //ganjil =0
console.log(binary_search(2, arrayGanjilSorted)) //ganjil -1

module.exports = {
  binary_search
}
