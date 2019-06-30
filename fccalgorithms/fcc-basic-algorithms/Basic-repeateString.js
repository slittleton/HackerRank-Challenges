// Repeat string

function repeatStringNumTimes(str, num) {
  let x = ''
  for( let i = 0; i < num ; i++ ){
    x = x.concat(str);
  }
  return x
}

repeatStringNumTimes("cake ", 10);