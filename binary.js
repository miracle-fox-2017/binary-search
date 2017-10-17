'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr)
{
  let temp = 0;
  for (var i = 0; i < arr.length - 1; i++)
  {
    while (arr[i] > arr[i + 1] && i >= 0)
    {
      temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      i--;
    }
  }
  return arr;
}

function binarySearch (search, array)
{
  let start = 0;
  let end = array.length - 1;
  let mid = Math.floor((start + end) / 2);
  while (true)
  {
    debugger;
    if (search === array[mid])
    {
      return mid;
    }
    else if (search < array[mid])
    {
      end = mid - 1;
    }
    else if (search > array)
    {
      start = mid + 1;
    }
    else
    {
        return -1;
    }
    mid = Math.floor((start + end) / 2);

  }
  return 0;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binarySearch(8, arrayGenapSorted))
console.log(binarySearch(10, arrayGenapSorted))
console.log(binarySearch(33, arrayGenapSorted))
//
console.log(binarySearch(53, arrayGanjilSorted))
console.log(binarySearch(3, arrayGanjilSorted))
console.log(binarySearch(2, arrayGanjilSorted))

// module.exports = {
//   binary_search
// }
