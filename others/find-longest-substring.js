function findLongestSubstringVersion1(str) {
	let obj = {};
	let i = 0;
	let maxLen = 0;
	let tempLen = 0;

	while (i < str.length) {
		if (typeof obj[str[i]] !== "undefined") {
			tempLen = 0;
			i = obj[str[i]] + 1;
			obj = {};
		} else {
			obj[str[i]] = i;
			tempLen++;
			i++;
		}
		maxLen = Math.max(maxLen, tempLen);
	}
	return maxLen;
}

console.log(findLongestSubstringVersion1("")); // 0
console.log(findLongestSubstringVersion1("rithmschool")); // 7
console.log(findLongestSubstringVersion1("thisisawesome")); // 6
