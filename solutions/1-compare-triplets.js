/* 
Compare Triplets

given two arrays each with 3 elements, compare each element of the array to
the other array by its index. If one array has the larger number at that index it's
team gets 1 point and vice versa. If equal then no point is awarded.
ex 
arr = [1 ,2, 3]  - team a
brr = [6, 1, 7]  - team b

team a = 1 point
team b = 2 points

*/

// Complete the compareTriplets function below.
function compareTriplets(a, b) {
    let teamA = 0;
    let teamB = 0;

    for (let i = 0; i < a.length; i++){
        if(a[i] > b[i]){
            teamA++
        }
        if( a[i] < b[i]){
            teamB++
        }
    }
    return [teamA, teamB]

}
let x = [1,2,3]
let y = [3,2,1]

console.log(compareTriplets(x,y))