const Employee = require(`./models/employee.js`);
const Company = require(`./models/company.js`);

var employee1 = new Employee("123123", 'Doea', 'Johna', 'managera', 1000, new Date('2020-05-13'));
var employee2 = new Employee(4, 'Doeb', 'Johnb', 'managerb', 2000, new Date('2020-12-30'));
var employee3 = new Employee(3, 'Doec', 'Johnc', 'managerc', 300, new Date('2010-05-30'));
var employee4 = new Employee(2, 'Doed', 'Johnd', 'managerd', 2500, new Date('2030-05-30'));
var employee5 = new Employee(1, 'Doee', 'Johne', 'managere', 600, new Date('2020-07-30'));

var company = new Company();
console.log(`\n##############\n`);
console.log(company);

console.log(`\n##############\n`);
console.log(company);
company.create(employee1);
company.create(employee2);
company.create(employee3);
company.create(employee4);
company.create(employee5);
company.create(new Employee());
company.create(new Employee(0, 'Doef', 'Johnf', 'managerf', 1000, new Date('2020-05-30')));
console.log(`\n##############\n`);
console.log(company);

console.log(company.read(2));

console.log(company.update(new Employee(097, 'Coucou', 'Ca', 'va', 10000, new Date('2018-05-30'))));
console.log(company);
company.delete(3);
console.log(`\n#######123123#########\n`);
console.log(company.readAll(`hireDate`));