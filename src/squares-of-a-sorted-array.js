/*
Leetcode : https://leetcode.com/problems/squares-of-a-sorted-array/description/

Q: You are given an array of integers in which each subsequent value is not less than prev value.
   Write a function that takes this array as an input and returns a new array with the squares of each number sorted in ascending order.

-> Remember: You can solve this question in multiple ways.
-> Think about the following -
    1.What would be the brute force way of solving this question ? What would be the Time and Space complexity of this approach?
    2.Is there a better way to solve this with a more optimum Time complexity than the Brute force way ?

Example 1:
  Input: nums = [-4,-1,0,3,10]
  Output: [0,1,9,16,100]
  Explanation: After squaring, the array becomes [16,1,0,9,100].
  After sorting, it becomes [0,1,9,16,100].

Example 2:
  Input: nums = [-7,-3,2,3,11]
  Output: [4,9,9,49,121]

Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?

Clarifying Questions:
  1. Are all numbers positives?
  2. Are the integers distinct?
  3. Can an empty array of integers be given as input?

Constraints:
  1 <= nums.length <= 10^4
  -10^4 <= nums[i] <= 10^4
  nums is sorted in non-decreasing order.
 * */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function (nums) {
    if (nums.length < 1) return [];

    let temp = new Array(nums.length).fill(0);
    for (let i = 0; i < nums.length; i++) {
        temp[i] = Math.pow(nums[i], 2) // || nums[i] * nums[i];
    } // O(n)

    temp = temp.sort((a, b) => a - b);  // O(n log n)
    return temp;

    // Time Complexity n + n log n => 2n log n => n log n
    // Space Complexity O(n).
};

const test1 = sortedSquares([1, 2, 3, 4, 5]);
const test2 = sortedSquares([-5, -3, -1, 0, 2, 4]);

// console.log("[1, 2, 3, 4, 5] => [1, 4, 9, 16, 25] ", test1.toString() === [1, 4, 9, 16, 25].toString() ? "PASS" : "FAIL");
// console.log('[-5,-3,-1,0,2,4] => [0,1,4,9,16,25] ', test2.toString() === [0, 1, 4, 9, 16, 25].toString() ? "PASS" : "FAIL");


/**
 * sortedSquares1
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares1 = function (nums) {
    const newArray = new Array(nums.length).fill(0);
    let pointerLeft = 0;
    let pointerRight = nums.length - 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        const squaredLeft = Math.pow(nums[pointerLeft], 2);
        const squaredRight = Math.pow(nums[pointerRight], 2);

        if (squaredLeft > squaredRight) {
            newArray[i] = squaredLeft;
            pointerLeft++;
        } else {
            newArray[i] = squaredRight;
            pointerRight--;
        }
    }
    return newArray;
};

const test3 = sortedSquares1([-4, -1, 0, 3, 10]);
const test4 = sortedSquares1([-7, -3, 2, 3, 11]);


// console.log("[-4, -1, 0, 3, 10] => [0, 1, 9, 16, 100] ", test3.toString() === [0, 1, 9, 16, 100].toString() ? "PASS" : "FAIL");
// console.log('[-7, -3, 2, 3, 11] => [4, 9, 9, 49, 121] ', test4.toString() === [4, 9, 9, 49, 121].toString() ? "PASS" : "FAIL");