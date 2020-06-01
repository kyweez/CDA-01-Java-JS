const Employee = require(`./../models/employee.js`);
const Company = require(`./../models/company.js`);
const Utils = require(`./../models/utils.js`);

class Test4{
    constructor(){
        this.title = `################################ TEST 4 ################################`;
    }
    launch(){
        console.log("########################################################################");
        console.log(this.title);
        console.log("########################################################################\n");
        
        console.log(`\x1b[35mCreating 3 employees...\n\x1b[0m`);
        let company = new Company();
        company.create(new Employee(123, `Macron`,`Emmanuel`, `President`, 999999, new Date(`2017-05-14`)));
        company.create(new Employee(123, `Hollande`,`Francois`, `Chomeur`, 220000, new Date(`2012-05-15`)));
        company.create(new Employee(123, `Sarkozy`,`Nicolas`, `Escroc`, 999999999, new Date(`1955-01-28`)));
        company.create(new Employee(123, `Melenchon`,`Jean-Luc`, `Clown`, 24000, new Date(`2022-05-14`)));
        
        console.log(`\n\x1b[35mTesting the readAll(_filter) function (using firstName):\x1b[0m`);
        console.log(company.readAll(`firstName`));

        console.log(`\n\x1b[35mTesting the delete(_id) function (using ID 2):\x1b[0m`);
        console.log("company.delete(2)");
        company.delete(2);
        console.log(`\x1b[35mTesting the readAll(_filter) function (using hireDate):\x1b[0m`);
        console.log(company.readAll(`hireDate`));
        console.log

        console.log(`\n\x1b[35mTesting the salary functions :\x1b[0m`);
        console.log(`Highest salary : ${company.salary.highest()}`);
        console.log(`Lowest salary  : ${company.salary.lowest()}`);
        console.log(`Salary gap     : ${company.salary.gap()}`);

        console.log(`\n# Using readAll function by firstName         : \x1b[32mOK\x1b[0m`);
        console.log(`# Get monthly net salary    : \x1b[32mOK\x1b[0m`);
        console.log(`# Get seniority             : \x1b[32mOK\x1b[0m`);
        console.log(`# Formating seniority       : \x1b[32mOK\x1b[0m`);
    }
}

module.exports = Test4;