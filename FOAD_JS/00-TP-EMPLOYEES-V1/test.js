class Test{
    constructor(_id){
        this.id = _id;
    }
}

class Tab{
    constructor() {
        this.tab = []
    }
    read(_id){
        let result = this.tab.find((test)=>{return test.id === parseInt(_id)});
        if(result === undefined)
            result = false
        return result;
    }
}

let tableau = new Tab();

tableau.tab.push(new Test(1));
tableau.tab.push(new Test(2));
tableau.tab.push(new Test(3));
tableau.tab.push(new Test(4));

console.log(tableau.tab);
console.log(`\n`);
console.log(tableau.read(1));
console.log(tableau.read(5));
console.log(`\n`);
console.log(tableau.read(1).id);
console.log(tableau.read(5).id);
console.log(`\n`);
console.log(10/tableau.read(1).id);
console.log(10/tableau.read(5).id);
console.log(`\n`);


let tableauTest1 = new Array(tableau.read(1).id);
let tableauTest2 = new Array(tableau.read(5).id);

console.log();