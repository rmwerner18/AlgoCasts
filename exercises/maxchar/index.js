// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let obj = {}
    for (let i = 0; i < str.length; i++) {
        obj[str[i]] = obj[str[i]] + 1 || 1
    }
    return Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b)
}

module.exports = maxChar;
