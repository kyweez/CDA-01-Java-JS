/**
 * This class is madde to instantiate "employee" objects
 * The constructor will format inputs
 * Id         : Given number in ascending order if possible.
 * Last name  : Format to uppercase.
 *              ex : input becomes INPUT
 * Fisrt name : 1st letter capitalized then other letters normal size
 *              ex: iNpUt becomes Input
 * Role       : Same rules as the firstname
 * Salary     : Integer (annual salary)
 * Hire date  : Input is an simplified ISO format (2020-12-30) (I use toISOString method from Date)
 *              Then i use the substring to take the only characters intersting me
 * 
 * @class Employee
 */
class Employee {
    constructor(_id, _lastName, _firstName, _role, _salary, _hireDate) {
        this.id = _id;
        this.lastName = _lastName.toUpperCase();
        this.firstName = _firstName.charAt(0).toUpperCase().concat(_firstName.substring(1).toLowerCase());
        this.role = _role.charAt(0).toUpperCase().concat(_role.substring(1).toLowerCase());
        this.salary = _salary;
        this.hireDate = _hireDate.toISOString().substring(0, 10); // ISO string returns something like 2018-07-22T05:22:13.000Z.
        this.email = this.firstName.charAt(0).concat(this.lastName, `@email.fr`).toLowerCase();
    }

    /**
     * This function calcules and returns the monthly net salary
     * It parse the result to an Integer, it's easier to read
     * @returns the monthly net wage 
     */
    getMonthlySalary() {
        return (parseInt(this.salary * 0.75 / 12));
    }

    /**
     * This method calculs and return a string giving the seniority of an employee
     * @var result : The returned string
     * @var currentDate : new Date() without any args returns the current date (ISO format)
     * @var hireDate : Store the value of the hireDate objects freshly made
     * @var diff : Difference between the getTime of the 2 dates. getTime returns the time in ms from 1970-1-1
     * @var year : Number of miliseconds in a year
     * @var month : Number of miliseconds in a month
     * @var day : Number of miliseconds in a day
     */
    getSeniority() {
        // VARIABLES INSTANTIATION
        let result = "Ancienneté : ";
        let currentDate = new Date();
        let hireDate = new Date(this.hireDate);
        let diff = currentDate.getTime() - hireDate.getTime();
        let year = 31557600000;
        let month = 2629800000;
        let day = 86400000;

        if (diff < 0) {
            return (`L'employe(e) ne fait pas encore partie des effectifs`);
        }
        else {
            if (diff > year) {
                // We have to round down to the inferior integer cuze we get the rest of the division. => floor method
                result += `${Math.floor(diff / year)} an(s)`;
                diff %= year;
            }
            if (diff > month) {
                // We have to round down to the inferior integer cuze we get the rest of the division. => floor method
                result += `${Math.floor(diff / month)} mois `;
                diff %= month;
            }
            if (diff > day) {
                // There is no operation after, so we have to round normally.
                result += `${Math.round(diff / day)} jour(s)`;
            }
            return (result);
        }
    }
}

console.log(`\n#########################################################`)
console.log(`###                 EMPLOYEES PROGRAM                 ###`)
console.log(`#########################################################\n`)

// OBJECTS INSTANCIATION (creating 5 new employees)
var employee1 = new Employee(1, 'Doe', 'John', 'manager', 82000, new Date('2020-12-28'));
var employee2 = new Employee(2, 'Bon', 'Jean', 'Charcutier', 22000, new Date('2020-06-22'));
var employee3 = new Employee(3, 'Proviste', 'Alain', 'Formateur', 180000, new Date('2017-03-11'));
var employee4 = new Employee(4, 'Moitou', 'Medhi', 'Directeur', 200000, new Date('2000-01-01'));
var employee5 = new Employee(5, 'Outan', 'Laurent', 'Clown', 140000, new Date('1982-11-08'));

// TABLLE CREATION (This table will contain the 5 five frehly created employees)
const employees = [employee1];

// TABLE FILLING (I could have create Employee object while crating table, but this way is cleaner)
employees.push(employee2);
employees.push(employee3);
employees.push(employee4);
employees.push(employee5);

// PRINTING INFORMATION
function tablePrint(employees) {
    console.log(`_________________________________________________________________________\n`)
    for (let i = 0; i < employees.length; i++) {
        console.log(`### Employe ${i + 1} ###\n`);
        console.log(`NOM                 : ${employees[i].lastName}`);
        console.log(`Prenom              : ${employees[i].firstName}`);
        console.log(`Email               : ${employees[i].email}`);
        console.log(`Anciennete          : ${employees[i].getSeniority()}`);
        console.log(`Salaire NET mensuel : ${employees[i].getMonthlySalary()} euros`);
        console.log(`_________________________________________________________________________\n`)
    }
}

// PRINTING HIGHEST SENIORITY
/**
 * This function prints the name of the older employee (seniority)
 */
function highestSeniority() {
    let seniorEmployee = employees[0];

    for (let i = 0; i < employees.length; i++) {
        if (employees[i].hireDate < seniorEmployee.hireDate)
            seniorEmployee = employees[i];
    }
    console.log(`L'employé ayant le plus d'ancienneté dans l'entreprise : ${seniorEmployee.firstName} ${seniorEmployee.lastName}\n`);
}

// PRINTING WAGES
/**
 * This litteral object contains 2 litteral objects
 * // First one
 * @constant wage : An object containing 3 functions with a return
 * @function highest : Returns an employee object, the one with the highest salary
 * @function lowest : Returns an employee object, the one with the lowest salary
 * @function gap : Returns an integer. Difference between highest wage and lowest wage
 * // Second one
 * @constant print : An object containing 4 displaying functions
 * @function highest : Prints the firstname and the lastname of the richest employee
 * @function lowest : Prints the firstname and the lastname of the poorest employee
 * @function gap : Prints the gap between those 2 previous salaries
 */
const information = {
    wage: {
        highest: () => {
            let highestWage = employees[0];
            for (let i = 0; i < employees.length; i++) {
                if (employees[i].salary > highestWage.salary)
                    highestWage = employees[i];
            }
            return (highestWage);
        },
        lowest: () => {
            let lowestWage = employees[0];
            for (let i = 0; i < employees.length; i++) {
                if (employees[i].salary < lowestWage.salary)
                    lowestWage = employees[i];
            }
            return (lowestWage);
        },
        gap: () => {
            return (information.wage.highest().salary - information.wage.lowest().salary);
        }
    },

    print: {
        highest: () => {
            console.log(`L'employé avec le plus haut salaire dans l'entreprise  : ${information.wage.highest().firstName} ${information.wage.highest().lastName}\n`);
        },
        lowest: () => {
            console.log(`L'employé avec le plus bas salaire dans l'entreprise   : ${information.wage.lowest().firstName} ${information.wage.lowest().lastName}\n`);
        },
        gap: () => {
            console.log(`Difference entre le plus haut salaire et le plus bas   : ${information.wage.gap()} euros\n`);
        },
        all: () => {
            information.print.lowest();
            information.print.highest();
            information.print.gap();
        }
    }
}

// INSTRUCTION 1
console.log(`\nConsigne numero 1 : Afficher l'objet "employee1`);
console.log(`-----------------------------------------------`);
console.log(employee1);

// INSTRUCTION 2
console.log(`\nConsigne numero 2 : Afficher "Il y a 5 employé(e)s.`);
console.log(`---------------------------------------------------`);
console.log("Il y a " + employees.length + " employé(e)s.");

// INSTRUCTION 3
console.log(`\nConsigne numero 3 : Export des employés dans la console`);
console.log(`-------------------------------------------------------`);
console.log(employees);

// INSTRUCTION 4
console.log(`\nConsigne numero 4 : Parcourir ensuite le tableau et afficher chaque employé`);
console.log(`                    (nom, prénom, email, ancienneté, salaire mensuel NET)`);
console.log(`---------------------------------------------------------------------------`);
tablePrint(employees);

// INSTRUCTION 5
console.log(`\nConsigne numero 5 : Afficher des informations supplementaires`);
console.log(`-------------------------------------------------------------`);
highestSeniority();
information.print.all();