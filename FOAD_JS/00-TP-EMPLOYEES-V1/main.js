const Employee = require(`./models/employee.js`);
const Company = require(`./models/company.js`);

// var employee1 = new Employee('asd', 'Doe', 'John', 'manager', 'qweqw', new Date('2020-05-30'));
// var employee2 = new Employee(123, 'Doe', 'John', 'manager', 'qweqw', new Date('2020-05-30'));
// var employee3 = new Employee('asd', 'Doe', 'John', 'manager', 123, new Date('2020-05-30'));
var employee4 = new Employee(123, 'Doe', 'Jo-shn', 'manager', 132, new Date('2020-05-30'));

// console.log(employee1);
// console.log(employee2);
// console.log(employee3);
console.log(employee4);

var company1 = new Company();

// company1.create(employee1);
// company1.create(employee2);
// company1.create(employee3);
company1.create(employee4);




