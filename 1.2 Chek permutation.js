// given 2 strings, write a method to decide if one is a permutation of the other
// i: 2 strings
// o: boolean
// c: optimize
// e: empty string or diff lengths

let checkPerm = (s1, s2) => {
    // if 2 strings have diff lengths then return false
    // one way: sort both strings and compare
    // to optimize we can make a map of one string and check the second string against the first
    let hash = {};

    if(s1.length !== s2.length) {
        return false;
    }

    for (let i = 0; i<s1.length; itt) {
        let c = s1[i];
        if (hash [c]) {
            hash[c]++;
        } else {
            hash [c] = 1;
        }
    }

    for (let i = 0; i<s2.length; i++) {
        let c = s2[i];
        if(hash [c] && hash [c] !== 0) {
            hash[c]--;
        } else {
            return false;
        }
    }
    return true;
};

console.log(
    checkPerm("", "") === true,
    checkPerm("so", "os") === true,
    checkPerm("sos", "so") === false,
    checkPerm("restful", "fluster") === true,
    checkPerm("") === true,

);

