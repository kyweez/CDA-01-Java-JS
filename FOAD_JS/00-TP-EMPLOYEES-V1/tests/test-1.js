const Employee = require(`./../models/employee.js`);
const Company = require(`./../models/company.js`);

class Test1{
    constructor(){
        this.title = `################################ TEST 1 ################################`;
    }
    launch(){
        console.log("########################################################################");
        console.log(this.title);
        console.log("########################################################################\n");
        console.log(`Creating 10 employees : \n`);
        let emp_0 = new Employee();
        let emp_1 = new Employee(123, `Schultz`,`Judith`, `Doctor`, 90789, new Date(1998-12-18));
        let emp_2 = new Employee(0, `Parrot`,`Audrey`, `Professor`, 0, new Date(1973-2-18));
        let emp_3 = new Employee(123, `lAgRaNgE`,`CHATALE`, `President`, 956789, new Date(2021-12-18));
        let emp_4 = new Employee(11123, `boudie`,`Judith`, `SOLDIER`, 290789, new Date(2005-11-17));
        let emp_5 = new Employee(1123, `Qi`,`Komg`, `Youtuber`, '123', new Date(2005-11-16));
        let emp_6 = new Employee(`123`, `Schultz`,`Eric`, `cop`, 90789, new Date(2005-11-18));
        let emp_7 = new Employee(null, `Schultz`,`Judith`, `Cabinet MAKER`, 50001, new Date(1997-12-18));
        let emp_8 = new Employee(``, `Bon`,`Jean`, `Technician`, 4001, new Date(1918-12-18));
        let emp_9 = new Employee(123, `Melenchon`,`Jean-Luc`, `clown`, 4000, new Date());
        console.log("let emp_0 = new Employee()");
        console.log("let emp_1 = new Employee(123, `Schultz`,`Judith`, `Doctor`, 90789, new Date(1998-12-18))");
        console.log("let emp_2 = new Employee(0, `Parrot`,`Audrey`, `Professor`, 0, new Date(1973-2-18))");
        console.log("let emp_3 = new Employee(123, `lAgRaNgE`,`CHATALE`, `President`, 956789, new Date(2021-12-18))");
        console.log("let emp_4 = new Employee(11123, `boudie`,`Judith`, `SOLDIER`, 290789, new Date(2005-11-17))");
        console.log("let emp_5 = new Employee(1123, `Qi`,`Komg`, `Youtuber`, '123', new Date(2005-11-16))");
        console.log("let emp_6 = new Employee(`123`, `Schultz`,`Eric`, `cop`, 90789, new Date(2005-11-18))");
        console.log("let emp_7 = new Employee(null, `Schultz`,`Judith`, `Cabinet MAKER`, 50001, new Date(1997-12-18))");
        console.log("let emp_8 = new Employee(``, `Bon`,`Jean`, `Technician`, 4001, new Date(1918-12-18))");
        console.log("let emp_9 = new Employee(123, `Melenchon`,`Jean-Luc`, `clown`, 4000, new Date())");

        let company = new Company();
        company.create(emp_0);
        company.create(emp_1);
        company.create(emp_2);
        company.create(emp_3);
        company.create(emp_4);
        company.create(emp_5);
        company.create(emp_6);
        company.create(emp_7);
        company.create(emp_8);
        company.create(emp_9);

        console.log(company.employeeDB);
    }
}

module.exports = Test1;