/*
Destroyer
You will be provided with an initial array (the first argument 
in the destroyer function), followed by one or more arguments. 
Remove all elements from the initial array that are of the same 
value as these arguments.

Note
You have to use the arguments object.
*/

function destroyer(arr) {
  let all = [...arguments];
  let arr2 = all.splice(1);
  let arr1 = arguments[0];
  let newArr = [];

  arr1.forEach(x => {
    if (!arr2.includes(x)) {
      newArr.push(x);
    }
  });

  return newArr;
}

let y = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log(y);
