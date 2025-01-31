/*
Leetcode:  https://leetcode.com/problems/monotonic-array

Q: An array is monotonic if it is either monotone increasing or monotone decreasing.
   An array is monotone increasing if all its elements from left to right are non-decreasing.
   An array is monotone decreasing if all its elements from left to right are non-increasing.
   Given an integer array return true if the given array is monotonic, or false otherwise.


Example 1:
  Input: nums = [1,2,2,3]
  Output: true
Example 2:
  Input: nums = [6,5,4,4]
  Output: true
Example 3:
  Input: nums = [1,3,2]
  Output: false

Constraints:
  1 <= nums.length <= 10^5
  -10^5 <= nums[i] <= 10^5
*/

// Solution 1
// Time Complexity: O(n)
// Space Complexity: O(1)

function checkMonotonic(nums) {
  if (nums.length === 0) return true;
  const first = nums[0];
  const last = nums[nums.length - 1];

  if (first === last) {
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i + 1] !== nums [i]) return false;
    }
  } else if (first < last) {
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i + 1] < nums [i]) return false;
    }
  } else {
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i + 1] > nums [i]) return false;
    }
  }
  return true;
}


const test1 = checkMonotonic([1, 2, 2, 3]);
const test2 = checkMonotonic([6, 5, 4, 4]);
const test3 = checkMonotonic([1, 3, 2]);
const test4 = checkMonotonic([1, 3, 2, 4]);
const test5 = checkMonotonic([3, 1, 9]);

console.log('[1,2,2,3] => true ', test1 === true ? 'PASS' : 'FAIL');
console.log('[6,5,4,4] => true ', test2 === true ? 'PASS' : 'FAIL');
console.log('[1,3,2] => false ', test3 === false ? 'PASS' : 'FAIL');
console.log('[1,3,2,4] => false ', test4 === false ? 'PASS' : 'FAIL');
console.log('[3,1,9] => false ', test5 === false ? 'PASS' : 'FAIL');

// Method 2
function isMonotonic(nums) {
  let increase = true;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      increase = false;
      break;
    }
  }

  if (increase) {
    return true;
  }

  let decrease = true;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      decrease = false;
      break;
    }
  }

  if (decrease) {
    return true;
  }

  return increase;
}


const test6 = isMonotonic([1, 2, 2, 3]);
const test7 = isMonotonic([6, 5, 4, 4]);
const test8 = isMonotonic([1, 3, 2]);
const test9 = isMonotonic([1, 3, 2, 4]);
const test10 = isMonotonic([3, 1, 9]);

console.log('[1,2,2,3] => true ', test6 === true ? 'PASS' : 'FAIL');
console.log('[6,5,4,4] => true ', test7 === true ? 'PASS' : 'FAIL');
console.log('[1,3,2] => false ', test8 === false ? 'PASS' : 'FAIL');
console.log('[1,3,2,4] => false ', test9 === false ? 'PASS' : 'FAIL');
console.log('[3,1,9] => false ', test10 === false ? 'PASS' : 'FAIL');
