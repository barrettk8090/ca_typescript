function createGreeting(name:string) {
    console.log(`Hello, ${name}!`)
    return `Hello, ${name}!`;
}

const myGreeting = createGreeting('Barrett K')

function getRandomNumber() {
    return Math.random();
}

let myVar = getRandomNumber()
// Infers that myVar is type: number due to the return statement in getRandomNumber