//  There are three types of edits that can be performed on strings: insert a character, remove a character,
//  or replace a character. Given 2 strings, write a function to check if they are one edit or zero edits away.
// I: 2 Strings
// O: Boolean
// C: Optimize
// E: Empty String

// if we insert a char, then s1's current char should match s2 current char
// if remove, then s1's next char should match s2's current char
// if replaced, then s1's next char should match s2's next char

// max one edit
// if diff in length is greater than max edit return false

// iterate through strings at the same time, checking for diff
// store max lengths forloop condition
// if diff is found, dec edit, check if edits dropped below zero, if so return false
// when forloop is done, return true
let oneAway = (s1, s2) => {
    let edits = 1; //number of edits allowed
    let maxLen = Math.max(s1.length, s2.length);
    let diff = Math.abs(s1.length - s2.length);

    if (diff > edits) {
        return false;
    }

    for(let i = 0, j = 0; i < maxLen || j < maxLen; i++, j++){
    let c1 = s1[i]; //corresponds to s1
    let c2 = s2[j]; //corresponds to s2
    if(c1 !== c2) {
        edits--;
        if(edits < 0) {
            return false;
        }
        if(c1 === c2[j + 1]) { //inserted
            j++;
        } else if (s1[i + 1] === c2) { //removed
            i++;
        }
    }
}
return true;
};

console.log(
    oneAway("pale", "pal") === true, //removed
    oneAway("pales", "pale") === true, //inserted
    oneAway("pale", "bale") === true, //replaced
    oneAway("pale", "bake") === false,
);