
const Employee = require('./employee.js');

function isValidEmployee(_employee) {
    const UPPERCASE = /(^[A-Z]+)([ -]{1})?([A-Z]+$)/;
    const CAPITALIZE = /(^[A-Z]{1}[a-z]{1,})([ -]{1}[A-Za-z]{1})?([a-z]+$)/;

    if (!(_employee.id >= 0 && _employee.id < Infinity))
        return (false);
    if (!_employee.lastName.match(UPPERCASE))
        return (false);
    if (!_employee.firstName.match(CAPITALIZE) || !_employee.role.match(CAPITALIZE))
        return (false);
    if (!(_employee.salary >= 0 && _employee.salary < Infinity))
        return (false);
    if(Object.prototype.toString.call(_employee.hireDate) !== "[object Date]" || isNaN(_employee.hireDate))
        return (false);
    return (true);
}

function changeID(_employeeDB, _employee){
    staffing = _employeeDB.length;
    if (staffing === 0){
        return (parseInt(0));
    }
    else{
        _employeeDB[staffing -1]
    }
}

class Company {
    constructor() {
        this.employeeDB = [];
    }

    /**
     * 
     * @param  _filter 
     */
    create(_employee) {
        if (isValidEmployee(_employee)){
            _employee.id = this.employeeDB
        }

    }
}


module.exports = Conpany;