function areThereDuplicates(...args) {
	if (!args.length) return false;

	const lookup = {};

	for (const item of args) {
		if (lookup[item]) return true;
		lookup[item] = 1;
	}
	return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates("a", "b", "c", "a")); // true
