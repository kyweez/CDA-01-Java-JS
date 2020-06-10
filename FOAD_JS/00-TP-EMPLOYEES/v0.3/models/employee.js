const Security = require(`./Security.js`);

/**
 * @class Employee
 */
class Employee {

    /**
     * @constructor for the employee model
     * 
     * @param int _id / (default : -1)
     * @param string _lastName  / Full string in upper case (default : DEFAULT)
     * @param string _firstName / First letter in upper case and others in lower case (default : Default)
     * @param string _role / First letter in upper case and others in lower case (default : Default)
     * @param int _salary / (default : -1)
     * @param Date _hireDate
     * 
     * @this email / first letter of the firstname + lastname + @email.fr (in lower case)
     */
    constructor(_employee) {
        this.id = 0;
        this.lastName = "Default";
        this.firstName = "Default";
        this.role = "Default";
        this.salary = 0;
        this.hireDate = new Date();
        this.email = "default@email.fr";
        if (_employee !== undefined)
            this.copy(_employee);
    }

    copy(_employee){
        _employee = _employee || {};

        this.id = Security.checkNumberInput(_emmployee.id || 0);
        this.lastName = (_employee.lastName || `Default`).toUpperCase();
        this.firstName = Security.capitalize(_employee.firstName || `Default`);
        this.role = Security.capitalize(_employee.role || `Default`);
        this.salary = Security.checkNumberInput(_employee.salary);
        this.hireDate = hireDate || new Date();
        this.email = `${this.firstName[0].concat(this.lastName).toLowerCase()}@email.fr`;
    }

    /**
     * @returns The rounded monthly net salary
     */
    getMonthlySalary() {
        return (Math.round(this.salary * 0.75 / 12));
    }

    /**
     * @returns A string formated like this (Y,M,D)
     */
    getSeniority() {
        let currentDate = new Date();
        let year = currentDate.getFullYear() - this.hireDate.getFullYear();
        let month = currentDate.getMonth() - this.hireDate.getMonth();
        let day = currentDate.getDate() - this.hireDate.getDate();

        // IF THE EMPLOYEE DIDN'T START YET
        if (currentDate < this.hireDate) {
            // If the difference between months is HT 0 : Add a year and substract 12 months.
            if (month > 0) {
                year++;
                month -= 12;
            }
            // If the difference between days is HT 0 : Add a month and substract 30 days.
            if (day > 0) {
                month++;
                day = Math.floor(day - (365.25 / 12));
            }
        }
        // IF THE EMPLOYEE HAS ALREADY BEEN HIRED
        else {
            // If the difference between months is LT 0 : Substract a year and add 12 months.
            if (month < 0) {
                year--;
                month += 12;
            }
            // If the difference between months is LT 0 : Substract a year and add 12 months.
            if (day < 0) {
                month--;
                day = Math.floor(day + (365.25 / 12));
            }
        }

        return (`${year},${month},${day}`);
    }
}

module.exports = Employee;