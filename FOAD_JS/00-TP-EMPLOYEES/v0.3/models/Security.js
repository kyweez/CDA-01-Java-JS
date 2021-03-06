class Security {

    /**
     * This function returns either true if the _employee match to the test or false
     * @param Employee _employee
     * @returns Boolean 
     */
    isValidEmployee(_employee) {
        const UPPERCASE = /(^[A-Z]+)([ -]{1})?([A-Z]+$)/;
        const CAPITALIZE = /(^[A-Z]{1}[a-z]{1,})(([ -]{1}[A-Za-z]{1})?([a-z]+$))|(^[A-Z]{1}[a-z]{1,}$)/;

        if (!(_employee instanceof Employee))
            return (false);
        if (!(_employee.id >= 0 && _employee.id < Infinity))
            return (false);
        if (!_employee.lastName.match(UPPERCASE))
            return (false);
        if (!_employee.firstName.match(CAPITALIZE) || !_employee.role.match(CAPITALIZE))
            return (false);
        if (!(_employee.salary >= 0 && _employee.salary < Infinity))
            return (false);
        if (!(_employee instanceof Date))
            return (false);
        return (true);
    }

    checkNumberInput(_number) {
        if (parseInt(_number) >= 0 && parseInt(_number) < Infinity)
            return (parseInt(_number));
        /** @todo verifier si -1 ou 0 */
        return (-1);
    }

    capitalize(_inputString) {
        return (`${_inputString[0].toUpperCase()}${_inputString.substring(1).toLowerCase()}`);
    }
}