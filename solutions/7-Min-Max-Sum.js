/*
Problem 7 - Min-Max Sum

Given five positive integers, find the minimum and maximum values 
that can be calculated by summing exactly four of the five integers. 
Then print the respective minimum and maximum values as a single 
line of two space-separated long integers.

For example, arr=[1,3,5,7,9]. Our minimum sum is 1+3+5+7=16 and our 
maximum sum is  3+5+7+9=24. 

We would print 16 24

*/


function miniMaxSum(arr) {
    let min = Math.min(...arr); // or Math.min.apply(null,arr)
    let max = Math.max(...arr);
    let minIndex = arr.indexOf(min);
    let maxIndex = arr.indexOf(max);
    let maxsum = 0;
    let minsum = 0;

    for(let i = 0; i < arr.length; i++){
            if (i !== minIndex) {
                maxsum += arr[i];
            }
            if (i !== maxIndex) {
                minsum += arr[i]
            }
    }
    console.log(`${minsum} ${maxsum}`)
}



let arr = [1,3,5,7,9];
let arr2 = [1,1,1,5,5];
let arr3 = [5,5,5,5,5];
miniMaxSum(arr);  // 16 24
miniMaxSum(arr2); // 8 12
miniMaxSum(arr3); // 20 20

