// Finders Keepers
// Create a function that looks through an array (first argument) 
// and returns the first element in the array that passes a truth 
// test (second argument). If no element passes the test, return 
// undefined.

function findElement(arr, func) {
  let x = arr.filter(x => func(x))
  if(x.length > 0){
    return x[0]
  }
  return undefined;
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));