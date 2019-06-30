// Mutations
// Return true if the string in the first element of the array 
// contains all of the letters of the string in the second element 
// of the array.


function mutation(arr) {

let word1 = arr[0].toLowerCase();
let word2 = arr[1].toLowerCase();

for(let i = 0; i < word2.length; i++){
  if (!word1.includes(word2[i])){
    return false
  }
}
return true

}

console.log(mutation(["hello", "hey"])); // false
console.log(mutation(["HElLo", "olehl"])) // true