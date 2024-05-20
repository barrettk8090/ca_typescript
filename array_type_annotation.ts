// Arrays:
let bestNumbers :number[] = [7,77,4];
let bestLunches :string[] = ['chicken soup', 'non-chicken soup'];
let bestBreakfasts :string[] = ['scrambled eggs', 'oatmeal', 'tamago kake gohan', 'any kind of soup'];
let bestBooleans :boolean[] = [true, false];

//Multidimensional Arrays:
let bestMealPlan: string[][] = [bestLunches, bestBreakfasts, ['baked potato', 'mashed potato']];
let bestBooleansTwice: boolean[][] = [bestBooleans, bestBooleans];
let numbersMulti: number[][][] = [ [[1],[2,3]], [[7],bestNumbers] ];

//Tuples:
let favoriteCoordinates: [number, number, string, number, number, string] = [17, 45, 'N', 142, 30, 'E'];

//Converting tuple into array
let dogTup: [string, string, string, string] = ['dog', 'brown fur', 'curly tail', 'sad eyes'];


let myArr = dogTup.concat()
myArr[50] = "not a dog"

//Rest parameters
function addPower(p: number, ...numsToAdd: number[]):number {
    let answer = 0;
    for (let i = 0; i < numsToAdd.length; i++) {
      answer += numsToAdd[i] ** p;
    }
    return answer;
  }

addPower(2, 3, 4)

//Spread Syntax
function performDanceMove(moveName:string, moveReps:number, hasFlair:boolean):void{
    console.log(`I do the ${moveName} ${moveReps} times !`);
    if(hasFlair){
      console.log('I do it with flair!');
    }
  }
  
  let danceMoves: [string, number, boolean][] = [
    ['chicken beak', 4, false],
    ['wing flap', 4, false],
    ['tail feather shake', 4, false],
    ['clap', 4, false],
    ['chicken beak', 4, true],
    ['wing flap', 4, true],
    ['tail feather shake', 4, true],
    ['clap', 4, true],
  ];
  
//   Using spread syntax ... to expand the iterable elements of dance moves arrays into individual elements from the performDanceMoves function
  danceMoves.forEach(move => performDanceMove(...move))

  //Like calling:
  //performDanceMovie('chicken beak', 4, false)