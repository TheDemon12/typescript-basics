// Generic Types

let names: string[] = ['Max', 'Mary'];
let names2: Array<string> = ['Max', 'Mary']; // alternate approach, Array<any> etc

let promise: Promise<string> = new Promise(resolve => {
	setTimeout(() => resolve('Hi!'), 2000);
});
// promise.then(res => console.log(res, res.length)); // better understanding to typescript of the result of the promise

// Creating a Generic Type Function

function merge<T extends object, U extends object>(obj1: T, obj2: U) {
	return Object.assign(obj1, obj2);
}

const finalObject = merge({ name: 'kartik' }, { age: 20 });
// console.log(finalObject, finalObject.age, finalObject.name);

interface BasicLength {
	length: number;
}

function countAndDescribe<T extends BasicLength>(e: T): [T, string] {
	let description = 'Got Invalid Value';

	description = `Got ${e.length} element${e.length === 1 ? '' : 's'}`;

	//tuple
	return [e, description];
}
// console.log(countAndDescribe('342'));

function extractAndConvert<T extends object, U extends keyof T>(
	obj: T,
	key: U
) {
	return obj[key];
}

// console.log(extractAndConvert({ name: 'kartik', age: 21 }, 'name'));

// Generic Classes

class DataStorage<T extends number | string | boolean> {
	private data: T[] = [];

	addItem(item: T) {
		this.data.push(item);
	}

	deleteItem(item: T) {
		this.data.splice(this.data.indexOf(item), 1);
		// console.log(this.data);
	}

	getItems() {
		return this.data;
	}
}

const store = new DataStorage<number>();

store.addItem(2);
store.addItem(4);
store.addItem(5);

store.deleteItem(2);

// console.log(store.getItems());

// Partial Generic Type

interface CourseGoal {
	title: string;
	description: string;
	completeUntil: Date;
}

function createCourseGoal(
	title: string,
	description: string,
	completeUntil: Date
): CourseGoal {
	// return {
	// 	title,
	// 	description,
	// 	completeUntil,
	// };

	let courseGoal: Partial<CourseGoal> = {};

	courseGoal.title = title;
	courseGoal.description = description;
	courseGoal.completeUntil = completeUntil;

	return courseGoal as CourseGoal;
}

// Readonly Type

let cars: Readonly<string[]> = ['Honda', 'BMW'];
