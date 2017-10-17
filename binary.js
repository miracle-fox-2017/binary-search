'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    for (var j = 0; j < i; j++) {
      if(arr[i] < arr[j]){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

function binarySearch (search, array, front=0, back=array.length-1) {
  // dibuang sayang
  // front = 0;
  // back = array.length-1;
  // while(front<=back){
  //   let mid = Math.floor((front+back)/2)
  //   if(search > array[mid]){
  //     front = mid+1
  //   }else if(search < array[mid]){
  //     back = mid-1
  //   }else{
  //     // console.log('pake while===',mid);
  //     return mid
  //   }
  // }

  if(front<=back){
    let mid = Math.floor((front+back)/2)
    if(array[mid] < search){
      return binarySearch(search, array, mid+1, back)
    }else if(array[mid] > search){
      return binarySearch(search, array, front, mid-1)
    }else{
      return mid
    }
  }
  return -1
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
