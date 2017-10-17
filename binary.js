'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  let num = 0;
  for(let i = 0;i<arr.length;i++){
    for(let j = i;j<arr.length;j++){
      if(arr[i] >= arr[j]){
        num = arr[i];
        arr[i] = arr[j];
        arr[j] = num;
      }
    }
  }
  return arr
}

function binarySearch (search, array) {
  let awal = 0 ;
  let akhir= array.length-1;
  let tengah = Math.floor(array.length/2);


  if(search === array[tengah]){
    return tengah
  }
  else{
    let num =0;
    while(search !== array[tengah]){
      if(search < array[tengah]){
        akhir=tengah;
        tengah=Math.floor(tengah/2)
        if(search === array[tengah]){
          return tengah
        }
      }
     if(search !== array[tengah]){
       if(search > array[tengah]){
         awal = tengah;
         tengah = Math.floor((tengah+akhir)/2)
         if(search === tengah){
           return tengah
         }
       }
     }
     num++
     if(num===array.length){
       return -1
     }
    }
  }
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil);

// Driver code
console.log(binarySearch(8, arrayGenapSorted))
console.log(binarySearch(10, arrayGenapSorted));
console.log(binarySearch(33, arrayGenapSorted))

console.log(binarySearch(53, arrayGanjilSorted))
console.log(binarySearch(3, arrayGanjilSorted))
console.log(binarySearch(2, arrayGanjilSorted))

// module.exports = {
//   binary_search
// }
