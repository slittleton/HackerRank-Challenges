/*
Plus Minus

Given an array of integers, calculate the fractions of its elements 
that are positive, negative, and are zeros. Print the decimal value 
of each fraction on a new line.

Note: This challenge introduces precision problems. The test cases 
are scaled to six decimal places

example:
let x = [1,1,0,-1,-1]

positive = 2/5, negative = 2/5, zero = 1/5


0.400000
0.400000
0.200000

*/

function plusMinus(arr) {
    let pos = 0;
    let neg = 0;
    let zero = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            zero ++
        } else if( arr[i] > 0 ){
            pos ++
        } else if( arr[i] < 0 ){
            neg ++
        }
    }
    pos = (pos/arr.length).toFixed(6);
    neg = (neg/arr.length).toFixed(6);
    zero = (zero/arr.length).toFixed(6);

    return (pos + '\n' + neg + '\n' + zero)

}

let x = [1,1,0,-1,-1]

console.log(plusMinus(x));