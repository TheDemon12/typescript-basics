// console.log('Hello Bois');

function add(
	num1: number | string,
	num2: number | string,
	returnValue: boolean
) {
	const result = `Result is ${+num1 + +num2}`;

	if (returnValue) return result;
	console.log(result);
}

// console.log(add('24', '4', true));
// add('24', '4', false);

const person: {
	firstName: string;
	lastName: string;
	age: number;
	hobbies: string[];
	role: [number, string]; // => tuple
} = {
	firstName: 'Kartik',
	lastName: 'Bhalla',
	age: 20,
	hobbies: ['coding', 'gaming'],
	role: [2, 'admin'], // => tuple
};

// for (const hobby of person.hobbies) {
// 	console.log(hobby.toUpperCase());
// }

// if (person.role[1] === 'admin') {
// 	console.log('You are an admin');
// }

// enum approach

enum Role {
	ADMIN,
	READ_ONLY,
	AUTHOR = 69,
}

// console.log(Role);

const anotherPerson: {
	firstName: string;
	lastName: string;
	age: number;
	hobbies: string[];
	role: [number, number]; // => tuple
} = {
	firstName: 'Kartik',
	lastName: 'Bhalla',
	age: 20,
	hobbies: ['coding', 'gaming'],
	role: [2, Role.ADMIN], // => tuple
};

// if (anotherPerson.role[1] === Role.ADMIN) {
// 	console.log('You are an admin');
// }

let message: any; // any disables typescript checking
message = 2;
message = 'get rekt';

function add2(
	num1: number | string,
	num2: number | string,
	returnType: 'asNumber' | 'asString'
) {
	const result = +num1 + +num2;

	if (returnType === 'asNumber') return result;
	else return result.toString();
}

// console.log(add2(3, 4, 'asString'));
// console.log(add2(3, 4, 'asNumber'));

// Aliases

type NumberString = number | string; // Alias
type typeDescriptor = 'asNumber' | 'asString'; // Alias

function add3(
	num1: NumberString,
	num2: NumberString,
	returnType: typeDescriptor
) {
	const result = +num1 + +num2;
	// console.log(result);

	if (returnType === 'asNumber') return result;
	else return result.toString();
}

// console.log(add3(3, 4, 'asString'));
// console.log(add3(3, 4, 'asNumber'));

function printResult(num: NumberString): void {
	// return type void
	console.log(`Result is ${num}`);
}
function printResult2(num: NumberString): string {
	// return type string
	return `Result is ${num}`;
}

// printResult(add3(4, 6, 'asNumber'));
// console.log(printResult2(add3(4, 6, 'asNumber')));

// Function Types

let anotherPrintFunction: (a: NumberString) => string = printResult2;

// console.log(anotherPrintFunction(add3(4, 6, 'asNumber')));

// Callback Function

function add4(num1: number, num2: number, cb: (a: number) => void) {
	const result = num1 + num2;
	cb(result);
}

// add4(4, 3, res => console.log(res));

let userId: unknown; // has some typescript checking and better than any

function throwError(message: string, code: number): never {
	// never as it will never return
	throw { errorMessage: message, errorCode: code };
}

// throwError('get rekt', 500);
