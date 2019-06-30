// Chunky Monkey
// Write a function that splits an array (first argument) into groups 
// the length of size (second argument) and returns them as a 
// two-dimensional array.

function chunkArrayInGroups(arr, size) {
  let chunk = [];
  let monk = [];

  for(let i = 0; i < arr.length; i++){
    chunk.push(arr[i]);

    if (chunk.length >= size){
      monk.push(chunk);
      chunk = [];
    }
  }
  //push anything left over in chunk into 2d array as final chunk
  if(chunk.length > 0){
    monk.push(chunk);
  }
  return monk;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);