// Write a function that takes two numbers, say min and max, as arguments
// Return an array of numbers in the range min to max

function myFunction(min, max) {
  array = [];
  forIndex = 0;

  for (let i = min; i <= max; i++) {
    array.push(min + forIndex);
    forIndex++;
  }

  return array;
}

console.log(myFunction(2, 10)); //[2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(myFunction(1, 3)); //[1, 2, 3]
console.log(myFunction(-5, 5)); //[-5, -4, -3, -2, -1, 0,  1,  2,  3,  4, 5]
console.log(myFunction(2, 7)); //[2, 3, 4, 5, 6, 7]

//author's solution
function authorSolution(min, max) {
  let arr = [];
  for (let i = min; i <= max; i++) {
    arr.push(i);
  }
  return arr;
}
