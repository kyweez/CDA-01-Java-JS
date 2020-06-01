const Employee = require(`./../models/employee.js`);
const Company = require(`./../models/company.js`);

class Test3{
    constructor(){
        this.title = `################################ TEST 3 ################################`;
    }
    launch(){
        console.log("########################################################################");
        console.log(this.title);
        console.log("########################################################################\n");
        
        console.log(`\x1b[35mCreating 4 employees : \n\x1b[0m`);
        let company = new Company();
        company.create(new Employee(123, `Macron`,`Emmanuel`, `President`, 999999, new Date(`2017-05-14`)));
        company.create(new Employee(123, `Hollande`,`Francois`, `Chomeur`, 220000, new Date(`2012-05-15`)));
        company.create(new Employee(123, `Sarkozy`,`Nicolas`, `Escroc`, 999999999, new Date(`1955-01-28`)));
        company.create(new Employee(123, `Melenchon`,`Jean-Luc`, `Clown`, 24000, new Date(`2022-05-14`)));

        console.log(company.employeeDB);
        
        console.log(`\n\x1b[35mTesting the read(_id) function (using id 3):\x1b[0m`);
        console.log(company.read(3));

        console.log(`\n\x1b[35mCreating a new employee (update Melenchon J-L):\x1b[0m`);
        let newMelenchon1 = new Employee(1233, `Melenchon`,`Jean-Luc`, `President`, 999000, new Date(`2021-05-14`));
        let newMelenchon2 = new Employee(3, `Melenchon`,`Jean-Luc`, `President`, 999000, new Date(`2021-05-14`));
        console.log("let newMelenchon1 = new Employee(1233, `Melenchon`,`Jean-Luc`, `President`, 999000, new Date(`2021-05-14`))");
        console.log("let newMelenchon2 = new Employee(3, `Melenchon`,`Jean-Luc`, `President`, 999000, new Date(`2021-05-14`))");

        console.log(`\n\x1b[35mTesting the update(_employee) function with incorrect ID :\x1b[0m `);
        console.log(`company.update(newMelenchon1)`);
        company.update(newMelenchon1);
        console.log(`\x1b[35mTrying to read the updated entry:\x1b[0m`);
        console.log(company.read(3));
        console.log(`As expected, it didn't work`);

        console.log(`\n\x1b[35mTesting the update(_employee) function with correct ID :\x1b[0m `);
        console.log(`company.update(newMelenchon2)`);
        company.update(newMelenchon2);
        console.log(`\x1b[35mTrying to read the updated entry:\x1b[0m`);
        console.log(company.read(3));
        console.log(`It works`);
    }
}

module.exports = Test3;