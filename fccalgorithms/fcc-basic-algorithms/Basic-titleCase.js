// Title Case
// make the first letter of each word a capital letter,
// the other letters of each word should be lower case

function titleCase(str) {
  let arr = str.split(' ');

  let arr2 = arr.map(x => {
    return x.charAt(0).toUpperCase() + x.toLowerCase().slice(1);  
  })
  str = arr2.join(' ');

  return str;
}

titleCase("I'm a little tea pot");