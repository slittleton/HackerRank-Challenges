// Truncate a string (first argument) if it is longer than the given
//  maximum string length (second argument). Return the truncated 
//  string with a ... ending.

function truncateString(str, num) {
  // console.log(num);
  let str2 = str.substring(0, Number(num));
  if(str.length > str2.length ){
   return  str2.concat('...')
  }

  return str2
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length ));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 10));