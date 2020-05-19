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
        let result;
        // Instantiate date objects to compare them. This avoids working on formatted strings.
        let currentDate = new Date();
        let hireDate = new Date(this.hireDate);
        // We make the difference. The returned value is in milliseconds ...
        let diff = currentDate.getTime() - hireDate.getTime();
        console.log(diff);

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
var employee2 = new Employee(2, 'Bon', 'Jean', 'Charcutier', 22000, new Date('2020-12-28'));
var employee3 = new Employee(3, 'Proviste', 'Alain', 'Formateur', 180000, new Date('2020-12-28'));
var employee4 = new Employee(4, 'Moitou', 'Medhi', 'Directeur', 200000, new Date('2020-12-28'));
var employee5 = new Employee(5, 'Outan', 'Laurent', 'Clown', 14000, new Date('2020-12-28'));

console.log(employee1.getMonthlySalary());
console.log(`--------`);
employee1.getSeniority();