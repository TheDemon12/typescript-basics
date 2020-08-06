"use strict";
// Generic Types
let names = ['Max', 'Mary'];
let names2 = ['Max', 'Mary']; // alternate approach, Array<any> etc
let promise = new Promise(resolve => {
    setTimeout(() => resolve('Hi!'), 2000);
});
// promise.then(res => console.log(res, res.length)); // better understanding to typescript of the result of the promise
// Creating a Generic Type Function
function merge(obj1, obj2) {
    return Object.assign(obj1, obj2);
}
const finalObject = merge({ name: 'kartik' }, { age: 20 });
function countAndDescribe(e) {
    let description = 'Got Invalid Value';
    description = `Got ${e.length} element${e.length === 1 ? '' : 's'}`;
    //tuple
    return [e, description];
}
// console.log(countAndDescribe('342'));
function extractAndConvert(obj, key) {
    return obj[key];
}
// console.log(extractAndConvert({ name: 'kartik', age: 21 }, 'name'));
// Generic Classes
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    deleteItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
        // console.log(this.data);
    }
    getItems() {
        return this.data;
    }
}
const store = new DataStorage();
store.addItem(2);
store.addItem(4);
store.addItem(5);
store.deleteItem(2);
function createCourseGoal(title, description, completeUntil) {
    // return {
    // 	title,
    // 	description,
    // 	completeUntil,
    // };
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = completeUntil;
    return courseGoal;
}
// Readonly Type
let cars = ['Honda', 'BMW'];
//# sourceMappingURL=app.js.map