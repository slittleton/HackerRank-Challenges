// Where do I belong
// Return the lowest index at which a value (second argument) should 
// be inserted into an array (first argument) once it has been sorted.
//  The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because 
// it is greater than 1 (index 0), but less than 2 (index 1).

function getIndexToIns(arr, num) {
  let arr2 = arr.sort(function(a, b){return a-b});
  let ind = 0;

  for(let i = 0; i < arr2.length; i++){
    if (num > arr2[i]){ ind = i+1}
  }

  return ind;
}

getIndexToIns([30, 40, 60, 20], 50); //3
getIndexToIns([10, 20, 30, 40, 50], 35) //3
getIndexToIns([10, 20, 30, 40, 50], 30) //2
getIndexToIns([1,2,3], 1) //0
getIndexToIns([5, 3, 20, 3], 5) //2