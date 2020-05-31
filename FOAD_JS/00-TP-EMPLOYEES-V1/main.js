const READLINE = require(`readline`);
const RL = READLINE.createInterface({
    input: process.stdin,
    output: process.stdout
});

const Test1 = require(`./tests/test-1`);
const Test2 = require(`./tests/test-2`);
const Test3 = require(`./tests/test-3`);
const Test4 = require(`./tests/test-4`);



function launchTest(_answer, tabTest) {
    
    tabTest[_answer-1].launch();
    doTest(tabTest);
}

function checkValidInput(_answer, tabTest) {
    console.clear();
    if (!_answer.match(/^[1-4]{1}$|^[qQ]$/))
        doTest();
    if (_answer.match(/^[qQ]$/)) {
        RL.close();
        process.exit();
    }
    launchTest(parseInt(_answer), tabTest);
}

function doTest(tabTest) {
    let question = "Which test do you want to perform ?\n1 - Test\n2 - Test\n3 - Test\n4 - Test\nQ - End the program\n";
    RL.question(question, (answer) => {
        checkValidInput(answer, tabTest);
    });
    // console.log(question);
    // checkValidInput("1", tabTest);
}

let tabTest = [];
tabTest.push(new Test1());
tabTest.push(new Test2());
tabTest.push(new Test3());
tabTest.push(new Test4());

doTest(tabTest);