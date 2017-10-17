'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

  function ownSort(arr) {
    // Your sorting code
  let temp;
  for (let i = 0 ; i <arr.length ; i++){
    for (let j =0 ; j< arr.length; j++){
      if (arr[i]<arr[j]){
        temp = arr[i];
        arr[i]=arr[j];
        arr[j]=temp
      }
    }
  }
    return arr
  }


function binary_search (search, array) {
  // Your searching code
  let start = 0 ;
  let end = array.length-1;
  let mid = Math.floor((start + end)/2)

while (start <= end) {
  // console.log('masuk sini');
// debugger
  if (search < array[mid]){
      end = mid - 1
      mid = Math.floor((start + end)/2)
    }
  else if (search > array[mid]){
      start = mid + 1
      mid = Math.floor((start + end)/2)
    }
    else {
        return mid
    }
}

  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)
// console.log(arrayGanjilSorted);
// console.log(arrayGenapSorted);


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
