'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  let temp = 0
  let swap = true

  while(swap){
  	temp = arr[0]
	swap = false

	for(let i=0; i<arr.length-1; i++){
		if(temp>arr[i+1]){
			arr[i]=arr[i+1]
			arr[i+1]=temp
			swap=true
				//console.log(arr);
		}else{
			temp=arr[i+1]
		}
	}
  }

  return arr
}

function binarySearch (arr, search, start, end) {
  // Your searching code

  	let mid = Math.ceil((start + end)/2)

	if(arr[mid] === search){
		return mid
	}

	if(start === end){
		return -1
	}

	if(arr[mid]>search){
		return binarySearch(arr, search, start, mid-1)
	}

	if(arr[mid]<search){
		return binarySearch(arr, search, mid+1, end)
	}
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

console.log(arrayGenapSorted);
console.log(arrayGanjilSorted);

// Driver code
console.log(binarySearch(arrayGenapSorted, 8, 0, arrayGenapSorted.length ))
console.log(binarySearch(arrayGenapSorted, 10, 0, arrayGenapSorted.length))
console.log(binarySearch(arrayGenapSorted, 33, 0, arrayGenapSorted.length))

console.log(binarySearch(arrayGanjilSorted, 53, 0, arrayGanjilSorted.length))
console.log(binarySearch(arrayGanjilSorted, 3, 0, arrayGanjilSorted.length))
console.log(binarySearch(arrayGanjilSorted, 2, 0, arrayGanjilSorted.length))

module.exports = {
  binarySearch
}
