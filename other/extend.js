let o1 = { a: 1, b: 2 };
let o2 = { c: 3, d: 4 };
let o3 = { e: 5, f: 6 };

// extend -> shallow copy properties in objects and add them to
// a target object, principle comes from underscore .extend()

function extend(destination, ...theArgs){
  return Object.assign(destination, ...theArgs)
}

let x = extend(o1,o2,o3);

console.log(x);