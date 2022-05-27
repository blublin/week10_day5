// https://leetcode.com/problems/compare-version-numbers/

/* 
Given two strings, version1, and version2, both representing version numbers
If version1 > version2 return 1; if version1 < version2 return -1; otherwise return 0.
Helpful methods:
    - .split(characterToSplitOn)
    - returns an array of items: "a-b-c".split("-") returns ["a", "b", "c"]
    - .parseInt
    - given a string, converts it to and returns int or NaN (Not a Number) if conversion fails
Bonus, solve without .split
*/

const test1V1 = "0.1";
const test1V2 = "1.1";
const expected1 = -1;

const test2V1 = "1.0.1";
const test2V2 = "1";
const expected2 = 1;

const test3V1 = "7.5.2.4";
const test3V2 = "7.5.3";
const expected3 = -1;

const test4V1 = "7.5.2.4";
const test4V2 = "7.5.2";
const expected4 = 1;

const test5V1 = "1.01";
const test5V2 = "1.001";
const expected5 = 0;
// Explanation: Ignoring leading zeroes, both “01” and “001" represent the same number “1”

const test6V1 = "1.0.1";
const test6V2 = "1";
const expected6 = 1;

/**
 * Determines which version number is greater or if they are equal.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} v1
 * @param {string} v2
 * @returns {number} 1 if v1 greater, -1 if v1 smaller, 0 if equal.
 */
function compareVersionNumbers(v1, v2) {
    const v1Arr = v1.split('.')
    const v2Arr = v2.split('.')

    const len = Math.max(v1Arr.length, v2Arr.length)
    // console.log(len)

    for (let ind = 0; ind < len; ind++) {
        let v1Num = Number(v1Arr[ind])
        let v2Num = Number(v2Arr[ind])
        console.log(`V1 Value: ${v1Num} || V2 Value: ${v2Num}`)
        // 1.0 v 1 || 1.0.1 vs 1
        if (isNaN(v1Num) && v2Num !== 0) return -1
        if (isNaN(v2Num) && v1Num !== 0) return 1
        if (v1Num > v2Num) return 1
        if (v2Num > v1Num) return -1
        // Number("001") === 1

    }
    return 0
}
// function compareVersionNumbers(v1, v2) {
//     const v1Arr = v1.split('.')
//     const v2Arr = v2.split('.')

//     const len = Math.max(v1Arr.length, v2Arr.length)
//     // console.log(len)

//     for (let ind = 0; ind < len; ind++) {
//         let v1Num = Number(v1Arr[ind])
//         let v2Num = Number(v2Arr[ind])
//         console.log(`V1 Value: ${v1Num} || V2 Value: ${v2Num}`)
//         // 1.0 v 1 || 1.0.1 vs 1
//         if (isNaN(v1Num) && v2Num !== 0) return -1
//         if (isNaN(v2Num) && v1Num !== 0) return 1
//         if (v1Num > v2Num) return 1
//         if (v2Num > v1Num) return -1
//         // Number("001") === 1
//     }
//     return 0
// }

console.log(compareVersionNumbers(test1V1, test1V2))
console.log(compareVersionNumbers(test2V1, test2V2))
console.log(compareVersionNumbers(test3V1, test3V2))
console.log(compareVersionNumbers(test4V1, test4V2))
console.log(compareVersionNumbers(test5V1, test5V2))
console.log(compareVersionNumbers(test6V1, test6V2))