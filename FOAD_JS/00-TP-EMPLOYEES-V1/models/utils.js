class Utils {
    print = {
        netMonthlySalary: (_employee) => {
            console.log(`\n${_employee.firstName} ${_employee.lastName} net monthly salary ${_employee.getMonthlySalary()}`);
        },
        seniority: (_employee) => {
            let seniorityTab = _employee.getSeniority().split(`,`);
            if (_employee.getSeniority().includes(`-`))
                console.log(`\n${_employee.firstName} ${_employee.lastName} will start in ${Math.abs(seniorityTab[0])} year(s), ${Math.abs(seniorityTab[1])} month(s) and ${Math.abs(seniorityTab[2])} day(s)`);
            else
                console.log(`\n${_employee.firstName} ${_employee.lastName} seniority : ${seniorityTab[0]} year(s), ${seniorityTab[1]} month(s) and ${seniorityTab[2]} day(s)`);

        }

    }
}

module.exports = Utils;