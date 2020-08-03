"use strict";
// console.log('Hello Bois');
function add(num1, num2, returnValue) {
    const result = `Result is ${+num1 + +num2}`;
    if (returnValue)
        return result;
    return console.log(result);
}
// console.log(add('24', '4', true));
// add('24', '4', false);
const person = {
    firstName: 'Kartik',
    lastName: 'Bhalla',
    age: 20,
    hobbies: ['coding', 'gaming'],
    role: [2, 'admin'],
};
// for (const hobby of person.hobbies) {
// 	console.log(hobby.toUpperCase());
// }
// if (person.role[1] === 'admin') {
// 	console.log('You are an admin');
// }
// enum approach
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 69] = "AUTHOR";
})(Role || (Role = {}));
// console.log(Role);
const anotherPerson = {
    firstName: 'Kartik',
    lastName: 'Bhalla',
    age: 20,
    hobbies: ['coding', 'gaming'],
    role: [2, Role.ADMIN],
};
// if (anotherPerson.role[1] === Role.ADMIN) {
// 	console.log('You are an admin');
// }
let message; // any disables typescript checking
message = 2;
message = 'get rekt';
function add2(num1, num2, returnType) {
    const result = +num1 + +num2;
    if (returnType === 'asNumber')
        return result;
    else
        return result.toString();
}
function add3(num1, num2, returnType) {
    const result = +num1 + +num2;
    // console.log(result);
    if (returnType === 'asNumber')
        return result;
    else
        return result.toString();
}
// console.log(add3(3, 4, 'asString'));
// console.log(add3(3, 4, 'asNumber'));
function printResult(num) {
    // return type void
    console.log(`Result is ${num}`);
}
function printResult2(num) {
    // return type string
    return `Result is ${num}`;
}
// printResult(add3(4, 6, 'asNumber'));
// console.log(printResult2(add3(4, 6, 'asNumber')));
// Function Types
let anotherPrintFunction = printResult2;
// console.log(anotherPrintFunction(add3(4, 6, 'asNumber')));
// Callback Function
function add4(num1, num2, cb) {
    const result = num1 + num2;
    cb(result);
}
// add4(4, 3, res => console.log(res));
let userId; // has some typescript checking and better than any
function throwError(message, code) {
    // never as it will never return
    throw { errorMessage: message, errorCode: code };
}
// throwError('get rekt', 500);
