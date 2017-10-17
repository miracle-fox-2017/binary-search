'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  debugger;
  let hasil = 0;

  for (var i = 0 ; i < arr.length ; i++){
  	for (var j = i ; j < arr.length ; j++){
  		if (arr[i] >= arr[j]){
  			hasil=arr[i];
  			arr[i]=arr[j];
  			arr[j]=hasil;
  		}
  	}
  }
  return arr
}

function binary_search (search, array) {
  // Your searching code
  debugger;
  let start = 0;
  let end = array.length-1;
  let mid = Math.round(end/2);
  let hasil = 0

  while (search !== array[mid]){
    debugger;
  	if (search > array[mid]){
      debugger;
  		start = end+1;
  		end = array.length;
      hasil = start + end;
  		mid = Math.floor((hasil)/2);
  	}else if (search < array[mid]){
      debugger;
  		start = 0;
  		end = mid-1;
      hasil = (start + end)/2;
  		mid = Math.floor(hasil);
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

module.exports = {
  binary_search
}
