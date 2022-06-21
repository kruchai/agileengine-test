/**
 * The function which calculates the iteration of binary value math operations.
 * Reducing the (binary) parced (digital) non-negative value to zero using two operations:   
 * - for even: dividing by 2 
 * - for odds: minus 1
 *
 * @param binary {string}
 * @returns {number}
 */
function solution(binary) {
  // Binary code parcer.
  let value = parseInt(binary, 2),
    counter = 0

  while (value > 0) {
    if (value % 2 === 0 &&
      value % 4 !== 1 &&
      value !== 3
    ) {
      value = value / 2
    } else {
      value = value - 1
    }

    counter++
  }
  
  return counter
}

// 22
console.log('Expected: 22 ==', solution('1111010101111'))
// 7
console.log('Expected: 7 ==', solution('011100'))
// 5
console.log('Expected: 5 ==', solution('111'))
