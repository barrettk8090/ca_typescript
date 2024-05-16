"use strict";
function createGreetingExplicit(name) {
    if (name) {
        return "Hello, ".concat(name);
    }
    // return undefined;
    //Error: Type undefined is not assignable to type string 
    return "Error";
}
var createArrowGreeting = function (name) {
    if (name) {
        return "Hello, ".concat(name);
    }
    // return undefined;
    //Error: Type undefined is not assignable to type string 
    return "Error!";
};
//# sourceMappingURL=explicit_return_types.js.map