'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(unsortedList) {
  // Your sorting code
  var len = unsortedList.length

for(let i =0; i < len; i++ ){
 let tmp = unsortedList[i]
 for(let j = i -1; j >=0 && (unsortedList[j] > tmp); j-- ){
   unsortedList[j+1] = unsortedList[j]
   unsortedList[j] = tmp
 }
}

  return unsortedList
}

function binary_search (search, array) {
  // Your searching code
  console.log(array);
  let high = array.length-1;
  //console.log(high);

  let low = 0;
  //console.log(low);
  while (low <= high) {
      let mid = Math.ceil((low + high)/2)
   if( search > array[mid]){
      low = mid + 1

    }else if(search < array[mid] ){
      high = mid-1

    }else{
      return mid
    }
  }

  return -1


  //let start =
  //return 0;
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

module.exports = {
  binary_search
}
