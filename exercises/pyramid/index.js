// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, stair = '') {
    let l = n*2 - 1
    let midpoint = Math.floor(l/2)
    if (row === n) {
        return
    } else if (stair.length === l) {
        console.log(stair)
        return pyramid(n, row + 1)
    }
    let add = (stair.length <= midpoint + row && stair.length >= midpoint - row) ? "#" : " "
    pyramid(n, row, stair + add)
} 

module.exports = pyramid;

// for (let i = 1; i <= n; i++) {
//     let stair  = ''
//     for (let j = 1; j < n*2; j++) {
//         let hashes = i*2 - 1
//         let spaces = (n*2-hashes)/2
//         if (j <= spaces || j >= spaces+hashes) {
//             stair += " "
//         } else stair += "#"
//     }
//     console.log(stair)
// }