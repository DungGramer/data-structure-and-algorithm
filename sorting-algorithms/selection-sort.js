function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let lowest = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[lowest] > arr[j]) {
				lowest = j;
			}
		}
		if (i !== lowest) [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
	}
	return arr;
}

console.log(selectionSort([8, 1, 2, 3, 4, 5, 6, 7]));
