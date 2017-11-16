"use strict"

// identify the single number in an array [1,1,4,6,3,5,7,3,4,5] => 7
// O(N + 1) assuming the forEach on the keys only has a single key

var singleNumber = (array) => {
  var keys = [];
  var result = 0;

  for (let value of array) {
    // if already exist, remove it
    keys[value] ? delete keys[value] : keys[value] = true;
  }

  Object.keys(keys).forEach(function(key) {
      result = key;
  });

  return result;
}

console.log(singleNumber([1,1,4,7,3,5,3,4,5]));