/**
 * JAVASCRIPT:  Exercices
 * 
 * Listing d'employés
 * 
 * Consignes : 
 * A l'aide de la syntaxe orientée "classes", modélisez un objet "Employee" possédant les caractéristiques suivantes :
 *  Attributs: 
 *  - id (int): identifiant
 *  - lastname (string): nom
 *  - firstname (string): prénom
 *  - email (string): calculé automatiquement dans le constructeur (exemple: John Doe => jdoe@email.fr)
 *  - role (string): poste occupé
 *  - salary (int): salaire annuel BRUT
 *  - hiredate (Date): date d'embauche au format YYYY-MM-DD
 * 
 *  Méthodes:
 *  - getMonthlySalary() : retourne un entier -> le salaire mensuel NET calculé à partir du salaire annuel (salaire_mensuel = salaire_annuel / 12 * 0.75)
 *  - getSeniority() : renvoie une chaine -> l'ancienneté de l'employé (exemples: "19 jours", "3 mois et 2 jours", "2 ans 7 mois et 8 jours") 
 * 
 * Une fois modélisé et testé, complétez le tableau "employees" pour qu'il contienne 5 employés au total (ni plus, ni moins).
 * Parcourir ensuite le tableau complété et afficher chaque employé dans la console (nom, prénom, email, ancienneté, salaire mensuel NET)
 * Afficher ensuite, individuellement : 
 *  - L'employé ayant le plus d'ancienneté
 *  - L'employé avec le plus haut salaire
 *  - L'employé avec le plus bas salaire
 *  - La différence de salaire entre les 2 précédents 
 * 
 * Documentation Javascript complète: https://developer.mozilla.org/fr/docs/Web/JavaScript
 * Tutoriel Javascript: https://www.pierre-giraud.com/javascript-apprendre-coder-cours/introduction/ 
 */



/* COMPLÉTEZ LE PROGRAMME... */

/**
 * @class Employee
 */
class Employee {
    constructor(_id, _lastName, _firstName, _role, _salary, _hireDate) {
        this.id = _id;
        this.lastName = _lastName.toUpperCase(); // Format to uppercase all the name
        this.firstName = _firstName.charAt(0).toUpperCase().concat(_firstName.substring(1).toLowerCase()); // Format firstname and role
        this.role = _role.charAt(0).toUpperCase().concat(_role.substring(1).toLowerCase()); // chaNtaLE becomes Chantale
        this.salary = _salary;
        this.hireDate = _hireDate.toISOString().substring(0, 10); // ISO string returns something like 2018-07-22T05:22:13.000Z.
        this.email = this.firstName.charAt(0).concat(this.lastName, `@email.fr`).toLowerCase();
    }

    getMonthlySalary() {
        return (parseInt(this.salary * 0.75 / 12));
    }

    getSeniority() {
        let result = "Ancienneté : ";
        // Instantiate date objects to compare them. This avoids working on formatted strings.
        let currentDate = new Date();
        let hireDate = new Date(this.hireDate);
        // We make the difference. The returned value is in milliseconds ...
        let diff = currentDate.getTime() - hireDate.getTime();

        /**
         * In a year, there are 31'557'600'000 ms and 365,25 days
         * In a month, there are 2'629'800'000 ms and 30,4375 days
         * In a day, there are 86'400'000 ms
         */

        if (diff < 0) {
            return (`L'employe(e) ne fait pas encore partie des effectifs`);
        }
        else {
            if (diff > 31557600000) {
                // We recover the get after the operation, so we have to round down to the inferior integer.
                result += `${Math.floor(diff / 31557600000)} an(s) `;
                diff %= 31557600000;
            }
            if (diff > 2629800000) {
                result += `${Math.floor(diff / 2629800000)} mois `;
                diff %= 2629800000;
            }
            if (diff > 86400000) {
                // There is no operation after, so we have to round normally.
                result += `${Math.round(diff / 86400000)} jour(s)`;
            }
            return (result);
        }
    }
}

/** DÉBUT ZONE NON EDITABLE (Ne pas modifier les lignes suivantes) */


/** @var Employee employee1 */
var employee1 = new Employee(1, 'Doe', 'John', 'manager', 82000, new Date('2020-12-28')); // création d'un nouvel employé

/** @var array employees */
const employees = [employee1]; // tableau contenant les employés

console.log(employee1); // doit afficher l'objet "employee1"
console.log("Il y a " + employees.length + " employé(e)s."); // doit afficher "Il y a 5 employé(e)s."
console.log(employees); // export des employés dans la console


/** FIN ZONE NON EDITABLE (Ne pas modifier les lignes précédentes) */

// Écrivez votre code à partir de la ligne suivante...

console.log(`\n##########################################################`)
console.log(`###                 DEBUT DE MA PARTIE                 ###`)
console.log(`##########################################################\n`)

// OBJECTS INSTANCIATION
var employee2 = new Employee(2, 'Bon', 'Jean', 'Charcutier', 22000, new Date('2020-06-22'));
var employee3 = new Employee(3, 'Proviste', 'Alain', 'Formateur', 180000, new Date('2017-03-11'));
var employee4 = new Employee(4, 'Moitou', 'Medhi', 'Directeur', 200000, new Date('2000-01-01'));
var employee5 = new Employee(5, 'Outan', 'Laurent', 'Clown', 140000, new Date('1982-11-08'));

// TABLE FILLING
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
tablePrint(employees);

// PRINTING HIGHEST SENIORITY
function highestSeniority() {
    let seniorEmployee = employees[0];

    // It's not supposed to happen, but let's check if employees is filled.
    if (employees.length > 0){
        for (let i = 0; i < employees.length; i++) {
            if (employees[i].hireDate < seniorEmployee.hireDate)
                seniorEmployee = employees[i];
        }
    }
    console.log(`L'employé ayant le plus d'ancienneté : ${seniorEmployee.firstName} ${seniorEmployee.lastName}`);
}
highestSeniority();

// PRINTING WAGES
const printWageInformation = {
    wageRange : new Array(2),

    highest : (wageRange) => {
        let highestWage = employees[0];
        if (employees.length > 0){
            for (let i = 0; i < employees.length; i++) {
                if (employees[i].salary > highestWage.salary)
                    highestWage = employees[i];
            }
        }
        wageRange[0] =highestWage;
        console.log(`L'employé avec le plus haut salaire  : ${highestWage.firstName} ${highestWage.lastName}`);

    },

    lowest : () => {
        let lowestWage = employees[0];
        if (employees.length > 0){
            for (let i = 0; i < employees.length; i++) {
                if (employees[i].salary < lowestWage.salary)
                    lowestWage = employees[i];
            }
        }
        wageRange[1] =highestWage;
        console.log(`L'employé avec le plus bas salaire   : ${lowestWage.firstName} ${lowestWage.lastName}`);
    },

    gap : function(wageRange){
        let wageGap;
        wageGap = wageRange[0] - wageRange[1];
        console.log(`La différence de salaire entre le ${wageRange[0]} et le ${wageRange[1]} est de ${wageGap} euros.`);

    }
}
printWageInformation.highest();
printWageInformation.lowest();