const Employee = require('./employee.js');

/**
 * This function returns either true if the _employee match to the test or false
 * @param Employee _employee
 * @returns Boolean 
 */
function isValidEmployee(_employee) {
    const UPPERCASE = /(^[A-Z]+)([ -]{1})?([A-Z]+$)/;
    const CAPITALIZE = /(^[A-Z]{1}[a-z]{1,})(([ -]{1}[A-Za-z]{1})?([a-z]+$))|(^[A-Z]{1}[a-z]{1,}$)/;

    if (!(_employee.id >= 0 && _employee.id < Infinity))
        return (false);
    if (!_employee.lastName.match(UPPERCASE))
        return (false);
    if (!_employee.firstName.match(CAPITALIZE) || !_employee.role.match(CAPITALIZE))
        return (false);
    if (!(_employee.salary >= 0 && _employee.salary < Infinity))
        return (false);
    if (Object.prototype.toString.call(_employee.hireDate) !== "[object Date]" || isNaN(_employee.hireDate))
        return (false);
    return (true);
}

/**
 * This function returns an unique number depending of the previous IDs 
 * @param Object[] _employeeDB 
 * @param Employee _employee
 * @returns A number of the new to set 
 */
/*function changeID(_employeeDB, _employee) {
    staffing = _employeeDB.length;
    if (staffing === 0) {
        return (parseInt(0));
    }
    else {
        _employeeDB.sort((first, second) => first.id - second.id);
        return (_employeeDB[staffing - 1].id + 1);
    }
}*/

/**
 * @class Company
 */
class Company {

    /**
     * @constructor for the Company model
     */
    constructor() {
        this.employeeDB = [];
    }
    
    /**
     * This function returns an unique number depending of the previous IDs 
     * @returns A number of the new to set 
     */
    newID() {
        let lastId = (this.employeeDB.length > 0) ? Math.max(...this.employeeDB.map(user => user.id)) : 0;
        return lastId + 1;        
    }

    /**
     * This function creates a new entry in the database
     * @param Employee _employee
     * @returns false if an error occurs when creating the new DB entry
     */
    create(_employee) {
        if (isValidEmployee(_employee)) {
            //_employee.id = changeID(this.employeeDB, _employee);
            _employee.id = this.newID();
            this.employeeDB.push(_employee);
        }
        else
            return (false);
    }

    /**
     * This function returns the desired Employee object
     * @param int _id 
     * @returns1 the Employee Object which has the ID given as an argument
     * @returns2 false if the ID doesn't exist
     */
    read(_id) {
        if (!(_id >= 0 && _id < Infinity))
            return (false);
        let buffer = this.employeeDB.find((test) => test.id === parseInt(_id));
        if (buffer === undefined)
            buffer = (false);
        return (buffer);
    }

    /**
     * This function updates an entry in the DB. (depending on the the ID of the object given as an argument)
     * @param Employee _employee
     * @returns1 Boolean true if it works.
     * @returns2 Boolean false if the update failed
     */
    update(_employee) {
        if (!(_employee.id >= 0 && _employee.id < Infinity) || !isValidEmployee(_employee))
            return (false);
        let buffer = this.employeeDB.find((test) => test.id === parseInt(_employee.id));
        if (buffer === undefined)
            return (false);
        Object.assign(buffer, _employee);
        return (true);
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
