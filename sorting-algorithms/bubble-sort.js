function bubbleSort(arr) {
	let noSwaps;
	for (let i = arr.length; i > 0; i--) {
		noSwaps = true;
		for (let j = 0; j < i - 1; j++) {
			console.log(arr, arr[j], arr[j + 1]);
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
				noSwaps = false;
			}
		}
		if (noSwaps) break;
	}
	return arr;
}

// function bubbleSort(arr) {
// 	for (let i = arr.length; i > 0; i--) {
// 		for (let j = 0; j < i - 1; j++) {
// 			console.log(arr, arr[j], arr[j + 1]);
// 			if (arr[j] > arr[j + 1]) {
// 				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
// 			}
// 		}
// 	}
// 	return arr;
// }

console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));
