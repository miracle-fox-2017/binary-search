'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  let temp = 0
  for (let i = 1; i < arr.length; i++) {
  	debugger
  	for (let j = 0; j < i; j++) {
  		if (arr[i] < arr[j]) {
  			// console.log(arr[i])
			temp = arr[i]
			arr[i] = arr[j]
			arr[j] = temp
		}
  	}
  }
  return arr
}

// console.log(ownSort(testArrayGenap))
// console.log(ownSort(testArrayGanjil))

function binary_search (search, array, awal = 0, akhir = array.length-1) {
  // Your searching code
  let tengah = Math.floor((awal + akhir) / 2)

  if (awal <= akhir) {
  	if (search < array[tengah]) {
  		// console.log('----masuk kiri')
  		return binary_search(search, array, awal, akhir = tengah - 1)
  	} else if (search > array[tengah]) {
  		// console.log('----masuk kanan')
  		return binary_search(search, array, awal = tengah + 1, akhir)
  	} else {
  	 	return tengah
  	}
  }
  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(8, arrayGenapSorted)) //0
console.log(binary_search(10, arrayGenapSorted)) //1
console.log(binary_search(33, arrayGenapSorted)) //-1

console.log(binary_search(53, arrayGanjilSorted)) //3
console.log(binary_search(3, arrayGanjilSorted)) //0
console.log(binary_search(2, arrayGanjilSorted)) //-1

module.exports = {
  binary_search
}
