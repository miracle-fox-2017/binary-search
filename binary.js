'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (let i = 0 ; i < arr.length ; i++){
  	let temp;
  	for (let j = i ; j < arr.length ; j++){
  		if (arr[i] >= arr[j]){
  			temp=arr[i];
  			arr[i]=arr[j];
  			arr[j]=temp;
  		}
  	}
  }
  return arr
}
function binary_search (search, array) {
  // Your searching code
  let start = 0;
  let end = array.length;
  let mid = Math.floor((start+end)/2);
  while (search !== array[mid]){
  	if (search >= array[mid]){
  		start = mid+1;
  		end = array.length;
  		mid = Math.floor((start+end)/2);
  	}
  	if (search <= array[mid]){
  		start = 0;
  		end = mid-1;
  		mid = Math.floor((start+end)/2);
  	}else {
	  	return -1
	  }  	
  }
  return mid;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code

console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

// module.exports = {
//   binary_search
// }
