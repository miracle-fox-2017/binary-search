var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (let i = 0 ; i < arr.length ; i++){
  	let tampung;
  	for (let j = i ; j < arr.length ; j++){
  		if (arr[i] >= arr[j]){
  			tampung = arr[i];
  		// 	console.log(tampung)
  			arr[i] = arr[j];
  		// 	console.log("arr[i]",  arr[i])
  			arr[j] = tampung;
  		// 	console.log("arr[j]", arr[j])
  		}
  	}
  }
  return arr
}

function binary_search(search, array, start = 0, end = array.length - 1) {
  let mid = Math.floor((start + end) / 2);
  let value = array[mid];

  if (start > end) {
    return -1;
  } else if (value > search) {
    return binary_search(search, array, start, mid - 1);
  } else if (value < search) {
    return binary_search(search, array, mid + 1, end);
  } else {
    return mid;
  }
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