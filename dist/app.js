"use strict";
// console.log('Bois');
class Department {
    // constructor(private readonly id: string, private name: string) {} // shorthand
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private name: string;
        // private employees: string[];
        // constructor(n: string) {
        // 	this.name = n;
        // 	this.employees = [];
        // }
        // private employees: string[] = [];
        this.employees = [];
    } // so that these can be accessible to child classes
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
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
    constructor(id, reports) {
        super(id, 'Accounts');
        this.reports = reports;
    }
    addReport(report) {
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
    constructor(id, reports) {
        super(id, 'IT');
        this.reports = reports;
        this.lastReport = reports[reports.length - 1];
    }
    getReports() {
        console.log(this.reports);
    }
    addReport(report) {
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
class Department2 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    } // so that these can be accessible to child classes
}
// const dep = new Department2() // abstract class can't be used to create an instance
class ItDepartment2 extends Department2 {
    constructor(id) {
        super(id, 'IT');
    }
    describe() {
        console.log('abstract implementation');
    }
}
// const person2: Greet = {
// 	name: 'kartik',
// 	greet(phrase) {
// 		console.log(`${phrase} ${this.name}`);
// 	},
// };
// person2.greet('Hey there,');
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log('Hello There!');
    }
}
class Person2 {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log('hello');
    }
}
class Person3 {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log('hello');
    }
}
// alternative to
// type addFn2 = (a: number, b: number) => number;
let someFunction;
someFunction = (n1, n2) => {
    return n1 + n2;
};
// optional properties and methods in class
class SomeClass {
    constructor(n) {
        if (n)
            this.name = n;
    }
}
//# sourceMappingURL=app.js.map