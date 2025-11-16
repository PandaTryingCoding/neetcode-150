# Problem: Contains Duplicate

## 🧩 Description

Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

## 📘 Examples

### Example 1

Input: nums = [1, 2, 3, 3]
Output: true

### Example 2

Input: nums = [1, 2, 3, 4]
Output: false

# 📝 Notes

## 🟦 My Initial Approach

My initial approach was to basically check for the existence of a number by checking one against the other in two loops.

---

## 🟧 My Brute Force Idea

The Brute Force idea was the same as my intial approach as to run two loops and compare for a similar number.

### 🔢 Brute Force Time Complexity

**Time:** O(n²)  
Because for each element, I compare it with all elements after it → nested loop → n \* n.

### 🧊 Brute Force Space Complexity

**Space:** O(1)  
No extra data structure used.

---

## 🟨 My Optimal Solution Idea

Use a **Set** to track numbers that have already appeared.
If a number is already in the Set → it's a duplicate → return true.
Otherwise, add it to the Set and continue.

### 🧠 Why This Works

A Set stores **unique** values and allows **O(1)** average lookup time.  
So checking “have I seen this before?” becomes instant.

### ⏱️ Optimal Time Complexity

**Time:** O(n)  
We loop through the array once, and each `.has()` and `.add()` is O(1).

### 💾 Optimal Space Complexity

**Space:** O(n)  
In the worst case, all numbers are unique and stored in the Set.

---

## 🟩 What I Learned

- Set is perfect for checking duplicates quickly.
- `.has()` and `.add()` on a Set are O(1).
- Hashing is extremely powerful for lookup problems.
- Brute force (nested loops) quickly becomes too slow for large inputs.
