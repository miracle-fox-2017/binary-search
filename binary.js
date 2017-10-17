'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for(var i = 0; i < arr.length; i++){

  	let temp = 0
  	for(var j = 0; j < i; j++){
  		// console.log(i+' ini index i  '+j +' ini index j')
  		if(arr[i] < arr[j]){
  			temp = arr[i]
  			arr[i] = arr[j]
  			arr[j] = temp
  		}
  	}  	
  }
  
  return arr
}

function binary_search (search, array, start=0, end=array.length-1) {
  // Your searching code
  // let start = 0
  // let end = array.length-1
 
  //REKURSIF

  if(start <= end){
	  let mid = Math.floor((start + end)/2)
	  if(array[mid] > search){
	  	return binary_search(search, array, start, mid - 1)
	  }
	  else if(array[mid] < search){
	  	return binary_search(search, array,  mid + 1 , end)
	  }
	  else{
	  	return mid
	  }
  
 }else{
 	return -1
 }

  	// console.log(start <= finish)
//   	while(start <= end ){
//   		let mid = Math.floor((start + end)/2)
//   		console.log(mid + ' <=index ' + array[mid] + ' <=arrmid')
//   		if(array[mid] == search){
//   			return mid
//   		}
  		
//   		else if(array[mid] > search){
//   			end = mid - 1
//   			console.log(end+ ' <=end ')
//   			// break;
//   		}
//   		else if(array[mid] < search){
//   			start = mid + 1
//   			console.log(start+ ' <=start ')
//   			// break;
//   		}
  		
//   	}
  	 
// return -1


  	
  	
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
// console.log(binary_search(8, arrayGenapSorted))
// console.log(binary_search(32, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

// console.log(binary_search(53, arrayGanjilSorted))
// console.log(binary_search(3, arrayGanjilSorted))
// console.log(binary_search(2, arrayGanjilSorted))

// module.exports = {
//   binary_search
// }
