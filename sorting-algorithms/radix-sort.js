function digitCount(num) {
	if (num === 0) return 1;
	return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function getDigit(num, position) {
	return Math.floor(Math.abs(num) / Math.pow(10, position)) % 10;
}

function mostDigits(nums) {
	let maxDigits = 0;
	for (let number of nums) {
		maxDigits = Math.max(maxDigits, digitCount(number));
	}
	return maxDigits;
}

function radixSort(nums) {
	let maxDigitCount = mostDigits(nums);
	for (let k = 0; k < maxDigitCount; k++) {
		let digitBuckets = Array.from({ length: 10 }, () => []);
		for (let i = 0; i < nums.length; i++) {
			let digit = getDigit(nums[i], k);
			digitBuckets[digit].push(nums[i]);
		}
		nums = [].concat(...digitBuckets);
	}
	return nums;
}
console.log(radixSort([23, 345, 12, 2345, 9852]));
