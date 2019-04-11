// Given a string, write a function to check if it is a permutation of a palindrome. The palindrome
// does not need to be limited to just dictionary words.

// I: String tact coa
// O: Boolean
// C: Optimize      
// E: Empty string, spaces between and in front and end, more than 2 of the same char, even and off char

let palPerm = (s) => {
    // if even: must be 2 of every char
    // if odd: must be only one unique char

    // use hash table to store letters
    // if we see same letter, delete from the hash table
    // check hash at the end: odd -1 key left, even - no keys left
    // skip spaces

  let hash = {};
  let charCount = 0;

  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (c === ' ') {
      continue;
    }
    if (hash[c]) {
      delete hash[c];
    } else {
      hash[c] = true;
    }
    charCount++;
  }
  if (charCount % 2 === 0) {
    return Object.keys(hash).length === 0;
  } else {
    return Object.keys(hash).length === 1;
  }
};

console.log(
  palPerm('taco cat') === true,
  palPerm('atco cat') === true,
  palPerm(' rac  ecar rara ') === true,
  palPerm('queencodes') === false,
  palPerm('aabbc') === true,
  palPerm('aaaabbbbcc') === true,
  palPerm('aabc') === false,
  palPerm('') === true
);
