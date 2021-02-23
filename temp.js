class Student {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	toString() {
		return this.firstName + " " + this.lastName;
	}
}

let a = new Student("zxc", "zcxc");
console.log(a.toString());
