// Write a function that takes as argument an object with the properties date and daysToAdd, containing a Javascript date and a number
// It should add daysToAdd days to the date and return the number of milliseconds since January 1, 1970, 00:00:00 UTC

function myFunction({ date, daysToAdd }) {
  return date.getTime() + daysToAdd * 1000 * 60 * 60 * 24;
}

console.log(
  myFunction({ date: new Date(Date.UTC(2000, 01, 01)), daysToAdd: 31 })
); // 952041600000
console.log(
  myFunction({ date: new Date(Date.UTC(2000, 01, 01)), daysToAdd: 10 })
); // 950227200000
console.log(
  myFunction({ date: new Date(Date.UTC(2000, 02, 28)), daysToAdd: 2 })
); // 954374400000

// author's solution
function authorSolution({ date, daysToAdd }) {
  const currentDays = date.getDate();
  return date.setDate(currentDays + daysToAdd);
}
