class Solution {
  hasDuplicate(nums) {
    const seen = new Set();
    for (let num of nums) {
      if (seen.has(num)) {
        return true;
      }
      seen.add(num);
    }
    return false;
  }
}

// ----- Run the class -----
const sol = new Solution();

console.log(sol.hasDuplicate([1, 2, 3, 3])); // true
console.log(sol.hasDuplicate([1, 2, 3, 4])); // false
