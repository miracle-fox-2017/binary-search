
function binary_search(cari, arr){
	var ketemu = false;
	var startIdx = 0;
	var endIdx = arr.length;
	var locationIdx = 0;

	while (ketemu === false) {
		var midIdx = Math.floor(startIdx + (endIdx - startIdx) / 2);

		if (arr[midIdx] < cari) {
			startIdx = midIdx + 1;
		}

		if (arr[midIdx] > cari) {
			endIdx = midIdx - 1;
		}

		if (arr[midIdx] === cari) {
			locationIdx = midIdx;
			ketemu = true;
		}

		if (midIdx === arr.length - 1 &&  arr[midIdx] !== cari) {
			return - 1;
		}

		if (midIdx === 0  &&  arr[midIdx] !== cari) {
			return - 1;
		}
	}

	return locationIdx;
}

console.log(binary_search(33, [10, 10, 18, 22, 22, 32, 40, 8, 90]));