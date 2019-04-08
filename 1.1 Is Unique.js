// is Unique
// Implement an algorithm to determine if a string has all unique char. What if you cannot use additional data structures?

// Input, Output, Constraints, EdgeCase
// I: string
// O: boolean
// C: no additional data structures, optimize
// E: empty string

// time complexity: linear - O(N)
// space complexity: linear - O(N) since we have to store every char

let isUnique = (s) => {
// check each char and store in a hash table
// if the char is already there, return false
// when done checking, return true
let hash = {};
for(let i = 0; i < s.length; i++) {
    let c = s[i];
    if(hash[c]) {
        return false; // cause there is a duplicate
    } else {
        hash[c] = true;
    }
}
return true; // this is if we don't see any duplicates when running the above
};

console.log(isUnique("s")=== true);
console.log(isUnique("")=== true);
console.log(isUnique("ss")=== false);
console.log(isUnique("stories")=== false);
console.log(isUnique("rainbow")=== true);