const arr1=[1,2,3];
const arr2=[4,5,6]

// arr1.push(arr2);  // [1,2,3,[4,5,6]]
// console.log(arr1);

// console.log(arr1[3][2]);   // 6

// let arr3=arr1.concat(arr2);
// console.log(arr3);

let Spread_Array=[...arr1,...arr2]
//console.log(Spread_Array);

let anotherArr=[1,2,3,[4,5,6,[11,22,33,44],15]]
//console.log(anotherArr.flat());
let usable_Array=anotherArr.flat(Infinity)
//console.log(usable_Array);

console.log(Array.isArray(1));
console.log(Array.from("Pankaj"));
console.log(Array.from({name:"Pankaj"}));  // INTERESTING

let math=50;
let science=40;
let hindi=75;
console.log(Array.of(math,science,hindi));







