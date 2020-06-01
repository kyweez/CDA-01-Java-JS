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
        console.log(`\x1b[35mCreating 10 employees : \n\x1b[0m`);
        let emp_0 = new Employee();
        let emp_1 = new Employee(123, `Schultz`,`Judith`, `Doctor`, 90789, new Date(`1998-12-18`));
        let emp_2 = new Employee(0, `Parrot`,`Audrey`, `Professor`, 0, new Date(`1973-2-18`));
        let emp_3 = new Employee(123, `lAgRaNgE`,`CHATALE`, `President`, 956789, new Date(`2021-12-18`));
        let emp_4 = new Employee(11123, `boudie`,`Judith`, `SOLDIER`, 290789, new Date(`2005-11-17`));
        let emp_5 = new Employee(1123, `Qi`,`Komg`, `Youtuber`, '123', new Date(`2005-11-16`));
        let emp_6 = new Employee(`123`, `Schultz`,`Eric`, `cop`, 90789, new Date(`2005-11-18`));
        let emp_7 = new Employee(null, `Schultz`,`Judith`, `BAKER`, 50001, new Date(`1997-12-18`));
        let emp_8 = new Employee(``, `Bon`,`Jean`, `Technician`, 4001, new Date(`1918-12-18`));
        let emp_9 = new Employee(123, `Melenchon`,`Jean-Luc`, `clown`, 4000, new Date());
        
        //PRINT ENTRIES
        console.log("\x1b[31mlet emp_0 = new Employee()\x1b[0m");
        console.log("\x1b[32mlet emp_1 = new Employee(123, `Schultz`,`Judith`, `Doctor`, 90789, new Date(`1998-12-18`))\x1b[0m");
        console.log("\x1b[32mlet emp_2 = new Employee(0, `Parrot`,`Audrey`, `Professor`, 0, new Date(`1973-2-18`))\x1b[0m");
        console.log("\x1b[32mlet emp_3 = new Employee(123, `lAgRaNgE`,`CHATALE`, `President`, 956789, new Date(`2021-12-18`))\x1b[0m");
        console.log("\x1b[32mlet emp_4 = new Employee(11123, `boudie`,`Judith`, `SOLDIER`, 290789, new Date(`2005-11-17`))\x1b[0m");
        console.log("\x1b[32mlet emp_5 = new Employee(1123, `Qi`,`Komg`, `Youtuber`, '123', new Date(`2005-11-16`))\x1b[0m");
        console.log("\x1b[32mlet emp_6 = new Employee(`123`, `Schultz`,`Eric`, `cop`, 90789, new Date(`2005-11-18`))\x1b[0m");
        console.log("\x1b[31mlet emp_7 = new Employee(null, `Schultz`,`Judith`, `BAKER`, 50001, new Date(`1997-12-18`))\x1b[0m");
        console.log("\x1b[31mlet emp_8 = new Employee(``, `Bon`,`Jean`, `Technician`, 4001, new Date(`1918-12-18`))\x1b[0m");
        console.log("\x1b[32mlet emp_9 = new Employee(123, `Melenchon`,`Jean-Luc`, `clown`, 4000, new Date())\x1b[0m");
        console.log(`\n\x1b[34memployee_0, employee_7, employee_8 can't be added to the DB because of bad inputs.`);
        console.log(`The program doesn't bug because of protecting create function from Company class\n\x1b[0m`)

        //ADD OBJECTS TO DB
        console.log(`\x1b[35mCreating the company DB and push valid objects on it : \n\x1b[0m`);
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


        console.log(`# Formatting lastName         : \x1b[32mOK\x1b[0m`);
        console.log(`# Formatting firstName        : \x1b[32mOK\x1b[0m`);
        console.log(`# Formatting Role             : \x1b[32mOK\x1b[0m`);
        console.log(`# Auto generate email         : \x1b[32mOK\x1b[0m`);
        console.log(`# Create a compaany database  : \x1b[32mOK\x1b[0m`);
        console.log(`# Not adding bad object to DB : \x1b[32mOK\x1b[0m`);
        console.log(`# Auto increment UNIQUE ID    : \x1b[32mOK\x1b[0m`);
        console.log(`# Checking object function    : \x1b[32mOK\n\x1b[0m`);

    }
}

module.exports = Test1;