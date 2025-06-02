var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

function double(x) {
  return x * 2;
}
const newMap = numbers.map(double);
console.log(newMap);

//forEach use

var newNumbers = [];
function triple(y) {
  newNumbers.push(y * 3);
}
numbers.forEach(triple);
console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.

const newFilter = numbers.filter(function (num) {
  return num < 10;
});

console.log(newFilter);

//Reduce - Accumulate a value by doing something to each item in an array.

var newReduce = numbers.reduce(function (accumulator, currentNumber) {
  console.log("accumulator = " + accumulator);
  console.log("currentNumber = " + currentNumber);
  return accumulator + currentNumber;
});

console.log(newReduce);
//Find - find the first item that matches from an array.

const newFind = numbers.find(function (num) {
  return num > 10;
});

console.log(newFind);
//FindIndex - find the index of the first item that matches.

const newFindindex = numbers.findIndex(function (num) {
  return num > 10;
});

console.log(newFindindex);
