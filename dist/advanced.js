"use strict";
let emp1;
emp1 = {
    name: 'kartik',
    privileges: ['Admin'],
    startDate: new Date(),
};
// console.log(emp1);
// Type Guards
function addStuff(a, b) {
    // Type Guard
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    return `${a.toString()} & ${b.toString()}`;
}
function printEmployeeInformation(emp) {
    console.log(`Name: ${emp.name}`);
    if ('privileges' in emp)
        console.log(`Privileges: ${emp.privileges}`);
    if ('startDate' in emp)
        console.log(`Start Date: ${emp.startDate}`);
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
    loadCargo(amount) {
        console.log(`Loading cargo of weight: ${amount} Kg`);
    }
}
let v1 = new Car();
let v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck)
        vehicle.loadCargo(500);
}
function moveAnimal(animal) {
    let speed;
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
const input = document.getElementById('input');
input.value = 'lorem ipsum';
// applies ! automatically too, this will give an error during runtime if the input element is not there in html
// if we don't want this behavior we must use below one
const sameInput = document.getElementById('input');
if (sameInput) {
    sameInput.value = 'lorem2';
}
let error1 = {
    id: 'e1',
    email: 'invalid email',
};
let error2 = {
    id: 'e1',
    password: 'too short',
    userName: 'already taken',
};
function addMe(a, b) {
    if (typeof a === 'number' && typeof b === 'number')
        return a + b;
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
const storedData2 = inputData !== null && inputData !== void 0 ? inputData : 'DEFAULT'; // if null or undefined fallbacks to default.
// console.log(storedData, storedData2);
//# sourceMappingURL=advanced.js.map