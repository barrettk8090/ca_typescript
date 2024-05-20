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