/*
Diagonal Difference - 2d arrays

Given a square matrix, calculate the absolute difference between the sums of 
its diagonals.

i.e. add up each diagonal and subtract the sum of the first diagonal from the second
give the absolute value of the result

For example, the square matrix  is shown below as a 2d array:

let x = [   [1,2,3],
            [4,5,6],
            [9,8,9]   ] 

*/

function diagonalDifference(arr) {
    let diagA = 0;
    let diagB = 0;

    for(let i = 0; i < arr.length; i++){
        diagA += arr[i][i];
        diagB += arr[i][(arr.length-1)-i]
    }

    return Math.abs(diagA-diagB)
}


let x = [   [1,2,3],
            [4,5,6],
            [9,8,9]   ] 

console.log(diagonalDifference(x));
