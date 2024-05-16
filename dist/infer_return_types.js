"use strict";
function createGreeting(name) {
    console.log("Hello, ".concat(name, "!"));
    return "Hello, ".concat(name, "!");
}
var myGreeting = createGreeting('Barrett K');
function getRandomNumber() {
    return Math.random();
}
var myVar = getRandomNumber();
// Infers that myVar is type: number due to the return statement in getRandomNumber
//# sourceMappingURL=infer_return_types.js.map