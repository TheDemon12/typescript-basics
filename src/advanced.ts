// interface Admin {
type Admin = {
	name: string;
	privileges: string[];
};

// interface Employee {
type Employee = {
	name: string;
	startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin {}
type ElevatedEmployee = Employee & Admin; // intersection type

let emp1: ElevatedEmployee;
emp1 = {
	name: 'kartik',
	privileges: ['Admin'],
	startDate: new Date(),
};
// console.log(emp1);

// Type Guards

function addStuff(a: number | string, b: number | string): number | string {
	// Type Guard
	if (typeof a === 'number' && typeof b === 'number') {
		return a + b;
	}
	return `${a.toString()} & ${b.toString()}`;
}

// console.log(addStuff('Max', 'Mary'));

type UnknownEmployee = Admin | Employee; // union type

function printEmployeeInformation(emp: UnknownEmployee) {
	console.log(`Name: ${emp.name}`);
	if ('privileges' in emp) console.log(`Privileges: ${emp.privileges}`);
	if ('startDate' in emp) console.log(`Start Date: ${emp.startDate}`);
}

// printEmployeeInformation(emp1);
// printEmployeeInformation({ name: 'kartik', startDate: new Date() });

// for classes
class Car {
	drive() {
		console.log('Driving a Car');
	}
}

class Truck {
	drive() {
		console.log('Driving a Truck');
	}
	loadCargo(amount: number) {
		console.log(`Loading cargo of weight: ${amount} Kg`);
	}
}

let v1 = new Car();
let v2 = new Truck();

type Vehicle = Car | Truck;

function useVehicle(vehicle: Vehicle) {
	vehicle.drive();
	if (vehicle instanceof Truck) vehicle.loadCargo(500);
}

// useVehicle(v1);
// useVehicle(v2);

// Discriminated Unions

// Since instanceof can't be used for interfaces, we use a workaround what we call discriminated unions, where we describe a common property like type or kind,
interface Bird {
	type: 'Bird';
	flyingSpeed: number;
}
interface Horse {
	type: 'Horse';
	runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
	let speed: number;
	switch (animal.type) {
		case 'Horse':
			speed = animal.runningSpeed;
			break;
		case 'Bird':
			speed = animal.flyingSpeed;
	}
	console.log(`Speed: ${speed}`);
}

// moveAnimal({ type: 'Horse', runningSpeed: 30 });

// TypeCasting

// const input = <HTMLInputElement>document.getElementById('input');  // OR
const input = document.getElementById('input') as HTMLInputElement;

input.value = 'lorem ipsum';

// applies ! automatically too, this will give an error during runtime if the input element is not there in html
// if we don't want this behavior we must use below one

const sameInput = document.getElementById('input');
if (sameInput) {
	(sameInput as HTMLInputElement).value = 'lorem2';
}

// Index Properties
// used when property names are not known in the first place

interface ErrorContainer {
	[prop: string]: string;
	id: string;
}

let error1: ErrorContainer = {
	id: 'e1',
	email: 'invalid email',
};

let error2: ErrorContainer = {
	id: 'e1',
	password: 'too short',
	userName: 'already taken',
};

// Function Overloads

function addMe(a: string, b: string): string;
function addMe(a: number, b: number): number;
function addMe(a: string, b: number): number;
function addMe(a: number, b: string): number;
function addMe(a: string | number, b: string | number): string | number {
	if (typeof a === 'number' && typeof b === 'number') return a + b;
	return `${a.toString()} & ${b.toString()}`;
}

const result = addMe('1', 4);
// console.log(result);

// Optional Chaining - during api fetch

let userData = {
	id: 'u1',
	name: 'Max',
	job: { title: 'developer', description: 'MERN Stack Developer' },
};

// console.log(userData.job && userData.job.title); // conventional way
// console.log(userData.job?.title); // cleaner way

// Nullish Coalescing

const inputData = null;

const storedData = inputData || 'DEFAULT'; // if null, undefined, '' or any falsy value, it fallbacks to default
const storedData2 = inputData ?? 'DEFAULT'; // if null or undefined fallbacks to default.

// console.log(storedData, storedData2);
