const Employee = require(`./Employee.js`);
const Security = require(`./Security.js`);
const fs = require(`fs`);
const path = require(`path`);

/**
 * @class Company
 */
class Company {

    /**
     * @constructor for the Company model
     */
    constructor(_companyName) {
        this.companyName = _companyName || `Default`;
        this.employeeDB = [];
        this.filename = path.resolve(__dirname, "../data/" + _name + ".json");
        if (fs.existsSync(this.filename)) {
            let raw = fs.readFileSync(this.filename);
            let json = JSON.parse(raw);
            json.forEach(emp => {
                this.create(new Employee(emp));
            });
        }
        else {
            console.log(`Cannot find ${this.filename}`);
            fs.writeFileSync(this.filename, "[]"); // création du fichier. Le second paramètre est un tableau vide au format JSON.
        }
    }

    /**
     * Save the employee collection in the JSON file.
     */
    save() {
        let json = JSON.stringify(this.employees);
        fs.writeFileSync(this.filename, json);
    }

    /**
     * This function returns an unique number depending of the previous IDs 
     * @returns A number of the new ID to set 
     */
    newID() {
        let lastId = (this.employeeDB.length > 0) ? Math.max(this.employeeDB.map(user => user.id)) : 0;
        return lastId + 1;
    }

    /**
     * This function creates a new entry in the table
     * @param Employee _employee
     * @returns false if an error occurs when creating the new DB entry
     */
    create(_employee) {
        if (!Security.isValidEmployee(_employee))
            return (false);
        _employee.id = this.newID();
        this.employeeDB.push(_employee);
    }

    /**
     * This function returns A COPY of the desired Employee object
     * The find method returns undefined if nothing is found. undifined is returned if nothing is found.
     * @param int _id 
     * @returns1 a copy of the desired Employee
     * @returns2 undefined if the Employee is not found.
     */
    read(_id) {
        if (!(_id >= 0 && _id < Infinity))
            return (undefined);
        let result = this.employeeDB.find(employeeTest => employeeTest.id === parseInt(_id));
        if (result === undefined)
            return (result);
        return (Object.assign(new Employee(), result));
    }

    /**
     * This function updates an entry in the DB. (depending on the the ID of the object given as an argument)
     * @param Employee _employee
     * @returns1 Boolean true if it works.
     * @returns2 Boolean false if the update failed
     */
    update(_employee) {
        if (!(_employee.id >= 0 && _employee.id < Infinity) || !isValidEmployee(_employee))
            return (undefined);
        let buffer = this.employeeDB.find((test) => test.id === parseInt(_employee.id));
        if (buffer === undefined)
            return (false);
        Object.assign(buffer, _employee);
        return (true);
    }

    update(_employee) {

        let exists = this.employees.find(e => e.id === _employee.id); // récupération de l'employé dans la collection (le vrai, pas une copie !!!)

        if (exists !== undefined) { // si l'employé correspondant a été trouvé
            // copie des données de "_employee" vers "exists"
            exists.copy(_employee);
            return exists;
        }

        return exists;
    }

    /**
     * This function deletes an entry in the DB. (depending on the the ID given as an argument)
     * @param int _id
     * @returns1 Boolean true if it works.
     * @returns2 Boolean false if the delete failed
     */
    delete(_id) {
        if (!(_id >= 0 && _id < Infinity))
            return (false);
        let index = this.employeeDB.findIndex((test) => test.id === parseInt(_id));
        if (index === parseInt(-1))
            return (false);
        this.employeeDB.splice(index, 1);
        return (true);
    }

    /**
     * This function returns the database sorted by _filter value
     * @param string _filter
     * @returns Object[] sorted by _filter
     */
    readAll(_filter) {
        return (this.employeeDB.sort((value1, value2) => {
            switch (_filter) {
                case `lastName`:
                    return (value1.lastName - value2.lastName);
                case `firstName`:
                    return (value1.firstName - value2.firstName);
                case `role`:
                    return (value1.role - value2.role);
                case `salary`:
                    return (value1.salary - value2.salary);
                case `hireDate`:
                    return (value1.hireDate - value2.hireDate);
                case `email`:
                    return (value1.email - value2.email);
                default:
                    return (value1.id - value2.id);
            }
        }));
    }

    /**
     * This object literal give an acces to salary features
     */
    salary = {
        highest: () => this.readAll('salary')[this.employeeDB.length - 1].salary,
        lowest: () => this.readAll('salary')[0].salary,
        gap: () => this.salary.highest() - this.salary.lowest()
    }
}

module.exports = Company;
