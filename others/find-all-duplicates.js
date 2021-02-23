function findAllDuplicates(arr) {
	const obj = {};
	const result = [];

	for (const item of arr) {
		obj[item] = ++obj[item] || 1;
		if (obj[item] > 1) result.push(item);
	}
	return result;
}

console.log(findAllDuplicates([4, 3, 2, 1, 0])); // []
console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3])); // array with 3, 2 and 1
