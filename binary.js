'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr){
    var sorted=[];
    function min(){
        return arr.reduce((a,b)=>{
            return Math.min(a,b);
        });
    }
    while(arr.length > 0){
        sorted.push(min());
        arr.splice(arr.indexOf(min()),1);
    }
    return sorted;
}

function binary_search (search, array){
    var start=0;
    var end=array.length - 1;
    var mid=Math.floor((start + end) / 2);
    console.log(array);
    while(true){
        if(array[mid] === search){
            return mid;
        }else if(search < array[mid]){
            end=mid - 1;
        }else if(search > array[mid]){
            start=mid + 1;
        }else{
            return -1;
        }
        mid=Math.floor((start + end) / 2);  // Setiap perulangan assign value baru untuk 'mid' berdasarkan perubahan pada value 'end' atau 'start'
    }
}

var arrayGenapSorted = ownSort(testArrayGenap);
var arrayGanjilSorted = ownSort(testArrayGanjil);

// Driver code
console.log(binary_search(8, arrayGenapSorted));
// console.log(binary_search(11, arrayGenapSorted));
// console.log(binary_search(33, arrayGenapSorted));
//
console.log(binary_search(53, arrayGanjilSorted));
console.log(binary_search(3, arrayGanjilSorted));
console.log(binary_search(2, arrayGanjilSorted));
