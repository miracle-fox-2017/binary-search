'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for(let i=1; i<arr.length; i++){
    for(let j=0; j<i; j++){
      if(arr[i]<arr[j]){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  console.log(arr)
  return arr
}

function binary_search (search, array) {
  // Your searching code
  let start = 0
  let end   = array.length
  // console.log(end + ' < length======arr > ' + array)

  while(start <= end){
    let mid = Math.floor((start + end)/2)
    // console.log('-=-=-=-' + array[mid])
    if(array[mid] === search){
      return `${true} | indeks = ${mid}`
    }else if(search > array[mid]){
      start = mid + 1
    }else if(search < array[mid]){
      end = mid - 1
    }
  }
  return `${false} -1`
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
