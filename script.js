// 1. Function Declaration
function functionDeclaration() {
    alert("This is a Function Declaration example!");
}

// 2. Function Expression
const functionExpression = function () {
    alert("This is a Function Expression example!");
};

// 3. Arrow Function
const arrowFunction = () => {
    alert("This is an Arrow Function example!");
};

// 4. Parameters Demo
function parametersDemo() {
    function greet(name) {
        alert("Hello, " + name + "! This is Parameters Demo.");
    }
    greet("Student");
}

// 5. Callback Demo
function callbackDemo() {
    function mainFunction(callback) {
        alert("Main function executed!");
        callback();
    }

    function callbackFunction() {
        alert("Callback function executed!");
    }

    mainFunction(callbackFunction);
}