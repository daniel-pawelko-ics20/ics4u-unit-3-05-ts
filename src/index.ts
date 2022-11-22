/**
 * Magic Square
 *
 * By:      Daniel
 * Version: 1.0
 * Since:   2022-11-21
 */

const MAGIC_NUM = 15
const POSSIBLE_NUM = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function checkDup(arr: number[]): boolean {
  const sortedSqrArray = arr.slice().sort(function (a, b) {
    return a - b
  })

  for (let count = 1; count < 9; count++) {
    if (arr[count] === arr[count - 1]) {
      return true
    }
  }
  return false
}

function checkSquare(arr: number[]): boolean {
  if (checkDup(arr)) {
    return false
  } else {
    // define rows
    const row1 = arr[0] + arr[1] + arr[2]
    const row2 = arr[3] + arr[4] + arr[5]
    const row3 = arr[6] + arr[7] + arr[8]
    // define columns
    const col1 = arr[0] + arr[3] + arr[6]
    const col2 = arr[1] + arr[4] + arr[7]
    const col3 = arr[2] + arr[5] + arr[8]
    // define diagonals
    const diag1 = arr[0] + arr[4] + arr[8]
    const diag2 = arr[2] + arr[4] + arr[6]

    if (
      diag1 !== 15 ||
      diag2 !== 15 ||
      col1 !== 15 ||
      col2 !== 15 ||
      col3 !== 15 ||
      row1 !== 15 ||
      row2 !== 15 ||
      row3 !== 1
    ) {
      return false
    } else {
      return true
    }
  }
}

function printSquare(arr: number[]): void {
  console.log(
    `${arr[0]}` +
      ' ' +
      `${arr[1]}` +
      ' ' +
      `${arr[2]}` +
      '\n' +
      `${arr[3]}` +
      ' ' +
      `${arr[4]}` +
      ' ' +
      `${arr[5]}` +
      '\n' +
      `${arr[6]}` +
      ' ' +
      `${arr[7]}` +
      ' ' +
      `${arr[8]}` +
      '\n'
  )
}

function magic(pNum: number[], arr: number[], index: number): void {
  // prints valid magic squares
  if (index === 9 && checkSquare(arr)) {
    printSquare(arr)
  } else {
    // run through each number for each index
    if (index !== 9) {
      for (let count = 0; count < 9; count++) {
        arr[index] = pNum[count]
        magic(pNum, arr, index + 1)
      }
    }
  }
}

const arr: number[] = []

magic(POSSIBLE_NUM, arr, 0)

console.log('Done.')
