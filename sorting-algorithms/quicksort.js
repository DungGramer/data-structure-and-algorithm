function pivot(arr, start = 0, end = arr.length - 1) {
	let pivot = arr[start];
	let pivotIndex = start;

	for (let i = start + 1; i <= end; i++) {
		if (arr[i] < pivot) {
			pivotIndex++;
			[arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
		}
	}

	if (pivotIndex !== start) {
		[arr[pivotIndex], arr[start]] = [arr[start], arr[pivotIndex]];
	}

	return pivotIndex;
}

function quickSort(arr, start = 0, end = arr.length - 1) {
	if (start < end) {
		const pivotIndex = pivot(arr, start, end);

		quickSort(arr, start, pivotIndex - 1);
		quickSort(arr, pivotIndex + 1, end);
	}

	return arr;
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
