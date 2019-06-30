// Falsy Bouncer
// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.

function bouncer(arr) {

  let filtered = arr.filter(x => Boolean(x) ? x : null)

  return filtered;
}

console.log(bouncer([7, "ate", "", false, 9]))