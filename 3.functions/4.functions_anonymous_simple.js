// define an anonymous function, but assign a variable to refer to it
// const doSomething1 = function () {
//   console.log("doSomething1 is running")
// }

// doSomething1() // call the function

doSomething1();

function doSomething1() {
    console.log('doSomething1');
}

const doSomething2 = function() {
    console.log('doSomething2');
}

const doSomething3 = () => {
    console.log('doSomething3');
}

const doSomething4 = () => console.log('doSomething4');

const doSomething5 = new Function("console.log('doSomething5');");

doSomething2();
doSomething3();
doSomething4();
doSomething5();