// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1, 2, 3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let arr = []
    for (let i = 0; i < n; i++) {
        let innerArr = []
        arr.push(innerArr)
    }
    let count = 1
    let row = 0
    let col = 0
    let rowPadding = 0
    let colPadding = 0
    while (count <= n*n) {
        arr[row][col] = count
        if (row === rowPadding && col < n - 1 - colPadding) { // upper left corner -> going across uppermost array
            col += 1
        } else if (row >= rowPadding && row < n - 1 - rowPadding && col === n - 1 - colPadding) { // upper right corner -> going down right side
            row += 1
        } else if (row === n - 1 - rowPadding && col <= n - 1 - colPadding && col > colPadding) { // bottom right corner -> going across lowest array
            col -= 1
        } else if (row <= n - 1 - rowPadding && row > rowPadding + 1 && col === colPadding) { // bottom right -> going up right side
            row -= 1
        } else if (row === rowPadding+1 && col === colPadding) { //upper left corner reached again; increase paddings
            col += 1
            rowPadding += 1
            colPadding += 1
        } 
        count += 1
    }
    return arr
} 

module.exports = matrix;



// let currentRow = 0
// let arr = [] 
// let arr2 = []
// for (let i = 1; i <= n*n; i++) {
//     if (arr[currentRow].length === n) {
//         arr2.push(arr[currentRow])
//         if (arr[currentRow-1].length < )
//         currentRow = currentRow < n-1 ? currentRow - 1 : currentRow + 1
//     } 
// } 