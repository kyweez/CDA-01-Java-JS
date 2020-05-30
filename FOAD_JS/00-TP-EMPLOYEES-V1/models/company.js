
const Employee = require('./employee.js');

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

function changeID(_employeeDB, _employee) {
    staffing = _employeeDB.length;
    if (staffing === 0) {
        return (parseInt(0));
    }
    else {
        _employeeDB.sort((first, second) => first.id - second.id);
        return (_employeeDB[staffing - 1].id + 1);
    }
}

class Company {
    constructor() {
        this.employeeDB = [];
    }

    create(_employee) {
        if (isValidEmployee(_employee)) {
            _employee.id = changeID(this.employeeDB, _employee);
            this.employeeDB.push(_employee);
        }
    }

    read(_id) {
        if (!(_id >= 0 && _id < Infinity))
            return (false);
        let buffer = this.employeeDB.find((test) => test.id === parseInt(_id));
        if (buffer === undefined)
            buffer = (false);
        return (buffer);
    }

    update(_employee) {
        if (!(_employee.id >= 0 && _employee.id < Infinity) || !isValidEmployee(_employee))
            return (false);
        let buffer = this.employeeDB.find((test) => test.id === parseInt(_employee.id));
        if (buffer === undefined)
            return (false);
        Object.assign(buffer, _employee);
        return (true);
    }
}

module.exports = Company;