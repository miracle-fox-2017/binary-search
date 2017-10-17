'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8];
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55];

function ownSort(arr) {
  // Your sorting code
  //selection sort, ambil yang terkecil, tampung di tempat yang baru
  var pointer = 0;
  var kecil = 0;
  var besar = 0;
  var sorted = [];
  var loops = arr.length;
  while(loops>1){
    //cari yang kecil
    if(arr.length>2){
      kecil = arr[0];
      for(var i = 0; i<arr.length; i++){
        if(kecil>arr[i]){
          kecil = arr[i];
          pointer = i;
        }
      }

    //push ke tempat baru
    sorted.push(kecil);

    } else {
      if(arr[0]>arr[1]){
        kecil = arr[1];
        besar = arr[0];
      } else {
        kecil = arr[0];
        besar = arr[1];
      }
      sorted.push(kecil);
      sorted.push(besar);
      break;
    }

    //hapus yang terkecil dari array
    arr.splice(pointer,1);
    pointer = 0;

    loops -= 1;

  }

  return sorted;
}

function binary_search (search, array) {
  // Your searching code
  //min, max, max
  debugger;
  var min = 0;
  var max = array.length;
  var mid = Math.floor(array.length/2);
  var count = 0;

  //if jumlah looping > panjang array return -1
  if(array.length == 1){
    if(array[0] != search){
      return -1;
    } else {
      return 0;
    }
  }

  //if mid == search.... return mid
  else if(array[mid] == search){
    return mid;
  }

  else {
    //if search > mid.... masuk geng besar
    if(search > array[mid]){
      //geng besar
      //max = tetep, min = mid, mid = max+min/2
      return binary_search(search, array.slice(mid));
    } else {
    //else search < mid.... masuk geng kecil
      //geng kecil
      //cek if mid == search return mid
      return binary_search(search, array.slice(0,mid));
    }

  }

}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
// console.log(arrayGenapSorted)
// console.log(arrayGanjilSorted)
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
