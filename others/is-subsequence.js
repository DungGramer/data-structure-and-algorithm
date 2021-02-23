function isSubsequence(pattern, str) {
	if (str.length < pattern.length) return false;

	let i = 0;
	let j = 0;

	while (i < pattern.length && j < str.length) {
		if (pattern[i] === str[j]) i++;
		j++;
	}
	return i === pattern.length;
}

console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
console.log(isSubsequence("", "cat")); // true
