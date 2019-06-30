// check if ending of str matches target

function confirmEnding(str, target) {
  let endlength = target.length;

  let strEnd = str.substring(str.length-endlength, str.length);
 
  if( strEnd === target){
    return(true)
  }
  

  return false;
}

confirmEnding("Bastian", "n");