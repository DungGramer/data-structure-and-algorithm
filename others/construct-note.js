function constructNote(message, letters) {
	if (!message.length || !letters.length) return false;

	const obj = {};

	for (const char of letters) {
		obj[char] = ++obj[char] || 1;
	}

	for (const char of message) {
		if (!obj[char]) return false;
		obj[char]--;
	}
	return true;
}

console.log(constructNote("aa", "abc")); // false
console.log(constructNote("abc", "dcba")); // true
console.log(constructNote("aabbcc", "bcabcaddff")); // true
console.log(constructNote("aabbcc", "bc")); // false
