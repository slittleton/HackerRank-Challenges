/*
Diff Two Arrays

Compare two arrays and return a new array with any items only 
found in one of the two given arrays, but not both. In other words, 
return the symmetric difference of the two arrays.
*/

function diffArray(arr1, arr2) {
  let newArr = [];

  arr1.forEach(x => {
    if (!arr2.includes(x)) {
      newArr.push(x);
    }
  });
  arr2.forEach(x => {
    if (!arr1.includes(x)) {
      newArr.push(x);
    }
  });

  return newArr;
}

let y = diffArray([1, 2, 3, 5, 6, 7], [1,1, 2, 3, 4, 5]);

console.log(y);
