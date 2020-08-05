// console.log('Bois');

class Department {
	// private name: string;
	// private employees: string[];

	// constructor(n: string) {
	// 	this.name = n;
	// 	this.employees = [];
	// }

	// private employees: string[] = [];
	protected employees: string[] = [];

	// constructor(private readonly id: string, private name: string) {} // shorthand
	constructor(protected readonly id: string, protected name: string) {} // so that these can be accessible to child classes

	describe() {
		console.log(`Department (${this.id}): ${this.name}`);
	}
	addEmployee(employee: string) {
		this.employees.push(employee);
		// this.id = 'd2'; //readonly
	}

	getEmployees() {
		console.log(this.employees);
	}
}

// const it = new Department('d1', 'IT');
// console.log(it);
// it.describe();
// console.log(it.name); //won't work as it is private
// it.addEmployee('Max');
// console.log(it);

class AccountsDepartment extends Department {
	constructor(id: string, private reports: string[]) {
		super(id, 'Accounts');
	}

	addReport(report: string) {
		this.reports.push(report);
	}
	getReports() {
		console.log(this.reports);
	}
}

// const account = new AccountsDepartment('a1', ['r1', 'r2']);

// account.addEmployee('MARY');
// account.getEmployees();

// account.describe();

// account.addReport('r3');
// account.getReports();

// console.log(account);

class ItDepartment extends Department {
	private lastReport: string;

	constructor(id: string, private reports: string[]) {
		super(id, 'IT');
		this.lastReport = reports[reports.length - 1];
	}

	getReports() {
		console.log(this.reports);
	}

	addReport(report: string) {
		this.reports.push(report);
		this.lastReport = report;
	}

	get getLastReport() {
		return this.lastReport;
	}

	describe() {
		console.log(`Overridden: ${this.name}`);
		console.log(`Employees under IT are: ${this.employees}`);
	}
}

// const it = new ItDepartment('i1', ['r1', 'r2']);

// it.addEmployee('Max');
// it.addEmployee('Mary');

// it.describe();

// console.log(it.getLastReport);
// it.addReport('r3');
// console.log(it.getLastReport);

abstract class Department2 {
	constructor(protected readonly id: string, protected name: string) {} // so that these can be accessible to child classes

	abstract describe(): void; //abstract definition for child classes
}

// const dep = new Department2() // abstract class can't be used to create an instance

class ItDepartment2 extends Department2 {
	constructor(id: string) {
		super(id, 'IT');
	}

	describe() {
		console.log('abstract implementation');
	}
}

// const it = new ItDepartment2('i2');

// console.log(it);
// it.describe();

interface Greet {
	readonly name: string;
	greet(phrase: string): void;
}

// const person2: Greet = {
// 	name: 'kartik',
// 	greet(phrase) {
// 		console.log(`${phrase} ${this.name}`);
// 	},
// };

// person2.greet('Hey there,');

class Person implements Greet {
	constructor(public name: string, public age: number) {}

	greet() {
		console.log('Hello There!');
	}
}

// const kartik: Greet = new Person('Kartik', 20);
// // or
// const kartik2: Person = new Person('Kartik', 20);

// console.log(kartik);
// kartik.name = 'sad';

interface Named {
	readonly name: string;
}
interface Greetable {
	greet(): void;
}

class Person2 implements Named, Greetable {
	constructor(public name: string) {}
	greet() {
		console.log('hello');
	}
}

// OR

interface Greetable2 extends Named {
	// extends named interface as well
	greet(): void;
}
class Person3 implements Greetable2 {
	constructor(public name: string) {}
	greet() {
		console.log('hello');
	}
}

interface Greetable3 extends Named, Greetable {
	sayHi(): void;
}

interface addFn {
	(a: number, b: number): number;
}

// alternative to
// type addFn2 = (a: number, b: number) => number;

let someFunction: addFn;

someFunction = (n1: number, n2: number) => {
	return n1 + n2;
};

// optional properties and methods in interface

interface Named2 {
	readonly name: string;

	outputName?: string;
	sayName?(): void;
}

// optional properties and methods in class

class SomeClass {
	name?: string;

	constructor(n?: string) {
		if (n) this.name = n;
	}
}
