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

    tabTest[_answer - 1].launch();
    doTest(tabTest);
}

function checkValidInput(_answer, tabTest) {
    console.clear();
    if (!_answer.match(/^[1-4]{1}$|^[qQ]$/))
        doTest(tabTest);
    else if (_answer.match(/^[qQ]$/)) {
        RL.close();
        process.exit();
    }
    else
        launchTest(parseInt(_answer), tabTest);
}

function doTest(tabTest) {
    let question = "\nWhich test do you want to perform ?\n1 - Test 1\n2 - Test 2\n3 - Test 3\n4 - Test 4\nQ - End the program\n";
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