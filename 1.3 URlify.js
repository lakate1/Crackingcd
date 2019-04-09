// Write a method to replace all spaces in a string with %20. You may assume that the string 
// has sufficent space at the end to hold the additional characters, and that you are given the
// "true" length of the string. 

// EXAMPLE 
// "Mr John Smith    ", 13
// "Mr%20John%20Smith"

// I: string, number
// O: string
// C: optimize
// E: emplty string, spaces in the front, middle and end

let URLify = (s, n = s.length) => {
    // first pass: count the number of non space characters in the string
    // subtract chars from the true length n to see how many spaces we are allowed to replace with %20
    
    // second pass: if we see a space and there are still spaces left, append "%20" to output string
    // otherwise copy the current char
    // when we run out of spaces, append the empty string instead
    let out = "";
    let chars = 0;

    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if(c !== " ") {
            chars++;
        }
    }

    let spaces = n - chars;

    for (let i = 0; i < s.lenth; i++) {
        let c = s[i];
        if(c === " " && spaces > 0) {
            out += "%20";
            spaces --;
        } else if (c != " ") {
            out += c;
        }
    }

    // if n is not yet reached and there are still spaces left
    while(spaces > 0) {
        out += "%20";
        spaces--;
    }
    return out;
};

console.log(
    URLify("Mr John Smith", 13) === "Mr%20John%20Smith",
    URLify("Mr John Smith", 14) === "Mr%20John%20Smith%20",
    URLify("  hi", 7) === "%20%2020hi%20%20",
    URLify(" hi", 3) === "%20hi",
    URLify("", 0) === "",
    URLify("", 2) === "%20%20",
    URLify("hel lo", 5) === "hello",






)