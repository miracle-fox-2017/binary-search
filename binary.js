'use strict'
/*
lakukan perulangan array
cari yang paling kecil
hapus index array yang paling kecil
simpan kedalam array kosong
lakukan perulangan lagi dengan sisa array yg telah dipotong
*/
var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  //cari terkecil
  let temp = 0;
  for(let i = 0; i < arr.length; i++){
    for(let j = i+1; j < arr.length; j++){

      if(arr[i]>=arr[j]){
        temp = arr[i];
        arr[i]=arr[j];
        arr[j]=temp;


      }
    }
  }
  return arr;

}


function binary_search (search, array) {
  // Your searching code
  console.log(array)
   let start=0;
   let mid=Math.floor(array.length/2);
   let end=array.length;
   //console.log(start,mid,end)
   if(search === mid){
     return mid
   }else{
     let count =0;
     while(search !== array[mid]){

      if(search<array[mid]){
        end = mid;
        mid = Math.floor(end/2)
        if(search===array[mid]){
          return mid
        }
     }
     if(search > array[mid]){
       start = mid
       mid = Math.floor((end+start)/2)
       //console.log(mid)
       if(search === array[mid]){
         return mid
       }
     }
     count++
     //console.log(count)
     if(count === array.length){
       return -1
     }
   }

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

module.exports = {
  binary_search
}
