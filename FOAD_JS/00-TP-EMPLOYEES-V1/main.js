const Employee = require(`./modules/employee.js`);

var employee1 = new Employee(1, 'Doe', 'John', 'manager', 82000, new Date('2020-05-30'));
var employee2 = new Employee(2, 'Bon', 'Jean', 'Charcutier', 22000, new Date('2022-05-29'));
var employee3 = new Employee(3, 'Proviste', 'Alain', 'Formateur', 180000, new Date('2017-03-11'));
var employee4 = new Employee(4, 'Moitou', 'Medhi', 'Directeur', 200000, new Date('2000-01-01'));
var employee5 = new Employee(5, 'Outan', 'Laurent', 'Clown', 140000, new Date('1982-11-08'));

console.log(employee1);
console.log(employee2);
console.log(employee3);
console.log(employee4);
console.log(employee5);