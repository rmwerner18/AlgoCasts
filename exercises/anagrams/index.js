// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let objA = {}
    let objB = {}
    stringA.replace(/[^\w]/g, "").toLowerCase()
    stringB.replace(/[^\w]/g, "").toLowerCase()
    for (let i = 0; i < stringA.length; i++) {
        objA[stringA[i]] = objA[stringA[i]] + 1 || 1
    }
    for (let i = 0; i < stringB.length; i++) {
        objB[stringB[i]] = objB[stringB[i]] + 1 || 1    
    }
    for (letter in objA) {
        if (objA[letter] != objB[letter]) {
            return false
        }
    }
    if (stringA.length === stringB.length) {
        return true
    }
    return false
}

module.exports = anagrams;
