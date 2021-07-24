class Person {
	constructor(name, lastName) {
		this.name = name;
		this.lastName = lastName;
	}

	getFullname() {
		return `${this.name} ${this.lastName}`;
	}

	setEmail(email) {
		this.email = email;
	}

	getEmail() {
		return this.email;
	}
}

const personsData = [
	['Juana', 'Pérez'],
	['Pedro', 'Suarez'],
]

let finalUsers = [];

for (let onePerson of personsData) {
	finalUsers = [...finalUsers, new Person(onePerson[0], onePerson[1])]
}

// for (let oneUser of finalUsers) {
//   console.log(oneUser.getFullname())  
// }

// finalUsers[0].setEmail('juana@gmail.com');
// finalUsers[0].getEmail();
// console.log(finalUsers[0]);
// console.log(finalUsers[1]);

const rick = new Person('Rick', 'Sanchez');

rick.setPoderes = function (poderes) {
	this.poderes = poderes;
}

rick.setPoderes(['Rayo laser', 'Máquina del tiempo'])
console.log(rick.poderes)

class Student extends Person {
	constructor(name, lastName, codeId) {
		super(name, lastName);
		this.codeId = codeId;
	}

	setCourse(course) {
		if (course === 'cocina') {
			return 'Sorry, este curso no es valido';
		}
		this.course = course;
	}

	getCodeId() {
		return this.codeId || 'No tiene código'
	}
}

const morty = new Student('Morty', 'Smith', 456);
morty.setEmail('morty@gmail.com')
morty.setCourse('React')
console.log(morty.getFullname());
console.log(morty.getEmail());
console.log(morty.getCodeId());
console.log(morty.course);