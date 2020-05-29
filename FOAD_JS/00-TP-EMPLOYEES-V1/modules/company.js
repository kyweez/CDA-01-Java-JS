  
const Employee = require('./Employee.js');

function isValidEmployee(_employee){
    if (Number.isNaN(_employee.id))
        return (false);
    if (_employee.match(//))
        return (true);
}

class Enterprise 
{
    constructor() {
        this.employeeDB = [];
    }

    /**
     * 
     * @param  _filter 
     */
    create(_employee) {
        if (!isValidEmployee(_employee))
            console.log(`invalid`);
        else
            console.log(`valid`);
    }
}


module.exports = Enterprise;