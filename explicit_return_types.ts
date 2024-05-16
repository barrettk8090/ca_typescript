function createGreetingExplicit(name?: string): string {
    if (name){
        return `Hello, ${name}`;
    }
    // return undefined;
    //Error: Type undefined is not assignable to type string 
    return "Error";
}

const createArrowGreeting = (name?: string): string => {
    if (name){
        return `Hello, ${name}`;
    }
    // return undefined;
    //Error: Type undefined is not assignable to type string 
    return "Error!";
}