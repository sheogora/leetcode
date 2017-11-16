"use strict"

// part of a facebook video on finding for a word "hello" if a possible typo was made
// only corrects up to 1 wrong character
// not optimised and contains functions that where set up as a "presumption"

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

function is_word(string) {
  var words = ["hi", "go"];
  for (const word in words) {
    if(words[word] === string) {
      return true;
    }
  }
  return false;
}

function get_nearby_chars(character) {
  var nearby = {
    "g": ["g","h","f"],
    "i": ["i","o","k"]
  };

  return nearby[character];
}

function nearby_permutations(string) {
  let result = [];

  for (var i = 0; i < string.length; i ++) {
    let permutations = get_nearby_chars(string[i]);
    console.log(permutations);

    for (const character in permutations) {
      let newWord = string;
      newWord = newWord.replaceAt(i, permutations[character]);
      console.log(newWord);
      result.push(newWord);
    }
  }

  return result;
}

function nearby_word(string) {
  var array = nearby_permutations(string);

  console.log(array);

  for (const word in array) {
    if (is_word(array[word])) {
      return array[word];
    }
  }
}


var testString = "gi";

console.log(nearby_word(testString));
