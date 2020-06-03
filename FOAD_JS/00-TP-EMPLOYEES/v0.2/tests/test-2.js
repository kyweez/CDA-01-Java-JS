const Employee = require(`../models/employee.js`);
const Company = require(`../models/company.js`);
const Utils = require(`../models/utils.js`);

class Test2{
    constructor(){
        this.title = `################################ TEST 2 ################################`;
    }
    launch(){
        console.log("########################################################################");
        console.log(this.title);
        console.log("########################################################################\n");
        
        console.log(`\x1b[35mCreating 3 employees : \n\x1b[0m`);
        let company = new Company();
        company.create(new Employee(123, `Schultz`,`Judith`, `Doctor`, 120000, new Date(`1998-12-01`)));
        company.create(new Employee(0, `Parrot`,`Audrey`, `Professor`, 240000, new Date(`2020-04-01`)));
        company.create(new Employee(123, `lAgRaNgE`,`CHATALE`, `President`, 36000, new Date(`2021-12-21`)));

        console.log(company.employeeDB);
        
        let utils = new Utils();
        
        console.log(`\x1b[35mPrinting net salaries :\x1b[0m`);
        utils.print.netMonthlySalary(company.employeeDB[0]);
        utils.print.netMonthlySalary(company.employeeDB[1]);
        utils.print.netMonthlySalary(company.employeeDB[2]);
        console.log(`\x1b[35m\nPrinting net seniorities :\x1b[0m`);
        utils.print.seniority(company.employeeDB[0]);
        utils.print.seniority(company.employeeDB[1]);
        utils.print.seniority(company.employeeDB[2]);

        console.log(`\n# Using Utils Class      : \x1b[32mOK\x1b[0m`);
        console.log(`# Get monthly net salary : \x1b[32mOK\x1b[0m`);
        console.log(`# Get seniority          : \x1b[32mOK\x1b[0m`);
        console.log(`# Formating seniority    : \x1b[32mOK\x1b[0m`);
    }
}

module.exports = Test2;