# Problem: Valid Anagram

## 🧩 Description

Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.
An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

## 📘 Examples

### Example 1

Input: s = "racecar", t = "carrace"
Output: true

### Example 2

Input: s = "jar", t = "jam"
Output: false

### Constraints

s and t consist of lowercase English letters.

# 📝 Notes

## 🟦 My Initial Approach

I thought of comparing the character codes by summing them.  
If both strings had the same total sum, I assumed they were anagrams.

---

## 🟧 My Brute Force Idea

Sort both strings and compare them.

### 🔢 Brute Force Time Complexity

**Time:** O(n log n)  
Sorting takes n log n time for each string.

### 🧊 Brute Force Space Complexity

**Space:** O(n)  
Splitting, sorting, and joining create new arrays/strings.

---

## 🟨 My Optimal Solution Idea

Use a **hash map (object)** to count character frequencies in the first string.  
Then decrease counts using the second string.

If all counts balance back to zero → they are anagrams.

### 🧠 Why This Works

An anagram must have:

- exactly the same characters
- with exactly the same counts

A hash map allows O(1) updates and lookups, so counting frequencies becomes efficient.

### ⏱️ Optimal Time Complexity

**Time:** O(n)

- Loop through string `s`: O(n)
- Loop through string `t`: O(n)  
  Total → O(n)

### 💾 Optimal Space Complexity

**Space:** O(1)  
Even though we use a hash map, there are only 26 lowercase letters → fixed size → constant space.

---

## 🟩 What I Learned

- Summing character codes fails because different combinations can produce the same sum.
- Hash maps (objects) are great for counting frequencies.
- `(count[char] || 0) + 1` is a common pattern for initializing/incrementing.
- For anagram problems, frequency maps are usually the best approach.
- Sorting works but is slower and uses more space.
