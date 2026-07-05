# Problem: Group Anagrams

## 🧩 Description

Given an array of strings `strs`, group all anagrams together into sublists. You may return the output in any order.

An **anagram** is a string that contains the exact same characters as another string, but the order of the characters can be different.

---

## 📘 Examples

### Example 1

**Input**

```text
strs = ["act","pots","tops","cat","stop","hat"]
```

**Output**

```text
[
    ["hat"],
    ["act","cat"],
    ["stop","pots","tops"]
]
```

---

### Example 2

**Input**

```text
strs = ["x"]
```

**Output**

```text
[
    ["x"]
]
```

---

### Example 3

**Input**

```text
strs = [""]
```

**Output**

```text
[
    [""]
]
```

---

# 📝 Notes

## 🟦 My Initial Approach

My first thought was to compare every string with every other string to determine whether they were anagrams. To do this, I would sort both strings and compare the sorted versions.

Although this would work, it would require comparing every pair of strings, making it inefficient for larger inputs.

---

## 🟧 My Brute Force Idea

For every word:

* Compare it with every remaining word.
* Sort both words.
* If the sorted versions are equal, place them in the same group.

### 🔢 Brute Force Time Complexity

**Time:** **O(n² × k log k)**

Where:

* `n` = number of words
* `k` = average length of each word

**How it was calculated**

* Outer loop → `n`
* Inner loop → `n`
* Each comparison requires sorting both words.
* Sorting costs **O(k log k)**.

Overall:

```text
O(n × n × k log k)
= O(n² × k log k)
```

### 🧊 Brute Force Space Complexity

**Space:** **O(k)**

Sorting creates temporary arrays/strings while comparing words.

---

## 🟨 My Optimal Solution Idea

Instead of comparing every pair of words, generate a unique identifier (signature) for every word.

The signature is simply the word after sorting its characters alphabetically.

Example:

```text
act  → act
cat  → act

pots → opst
tops → opst
stop → opst
```

If two words have the same sorted version, they belong in the same group.

Use a **Hash Map** where:

```text
Key   → Sorted word
Value → Array of original words
```

Example:

```text
{
    act: ["act", "cat"],
    opst: ["pots", "tops", "stop"],
    aht: ["hat"]
}
```

Finally, return all the values stored inside the Hash Map.

---

### 🧠 Why This Works

Anagrams always produce the same sorted string.

By using the sorted string as a key, every anagram automatically gets grouped into the same array.

Hash Maps provide nearly constant-time lookup, making this approach much faster than comparing every pair of words.

---

### ⏱️ Optimal Time Complexity

**Time:** **O(n × k log k)**

Where:

* `n` = number of strings
* `k` = average length of each string

**How it was calculated**

For every word:

* `split("")` → O(k)
* `sort()` → O(k log k)
* `join("")` → O(k)
* Hash Map insertion → O(1)

Sorting dominates the work.

Therefore:

```text
n × O(k log k)

= O(n × k log k)
```

---

### 💾 Optimal Space Complexity

**Space:** **O(n × k)**

The Hash Map stores every word grouped by its sorted key.

Additionally, temporary arrays/strings are created while sorting each word.

---

## 🟩 What I Learned

* Grouping problems are often solved using a **Hash Map**.
* A sorted string can be used as a unique identifier for anagrams.
* `split("")`, `sort()`, and `join("")` are commonly used together to sort a string in JavaScript.
* Objects (`{}`) can act as Hash Maps in JavaScript.
* `Object.values()` returns all the grouped arrays stored inside an object.

---

# 🚀 Approach 1: Brute Force

## 🔍 Idea

Compare every string with every other string.

If two sorted strings are identical, place them into the same group.

### 💻 Code — Brute Force

```js
function groupAnagramsBrute(strs) {
    const visited = new Array(strs.length).fill(false);
    const result = [];

    for (let i = 0; i < strs.length; i++) {
        if (visited[i]) continue;

        const group = [strs[i]];
        visited[i] = true;

        for (let j = i + 1; j < strs.length; j++) {
            if (
                strs[i].split("").sort().join("") ===
                strs[j].split("").sort().join("")
            ) {
                group.push(strs[j]);
                visited[j] = true;
            }
        }

        result.push(group);
    }

    return result;
}
```

### 🧠 Complexity

* **Time:** O(n² × k log k)
* **Space:** O(k)

---

# 🚀 Approach 2: Optimized

## 🔍 Idea

Use a Hash Map where:

* **Key** → Sorted version of the word
* **Value** → Array containing all words with that sorted version

---

## 🧱 Data Structure Used

### Hash Map (JavaScript Object)

A Hash Map stores information as **key → value** pairs.

Example:

```text
{
    act: ["act", "cat"],
    opst: ["pots", "tops", "stop"]
}
```

### Why use it?

It allows us to instantly find the correct group for every word without searching through existing groups.

### Operations Used

| Operation                | Purpose               | Average Time |
| ------------------------ | --------------------- | ------------ |
| `groups[key]`            | Access value          | O(1)         |
| `groups[key] = []`       | Create new group      | O(1)         |
| `groups[key].push(word)` | Add word to group     | O(1)         |
| `Object.values(groups)`  | Return grouped arrays | O(n)         |

---

## 💻 Code — Optimized

```js
class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = {};

        for (let word of strs) {
            const key = word.split("").sort().join("");

            if (!groups[key]) {
                groups[key] = [];
            }

            groups[key].push(word);
        }

        return Object.values(groups);
    }
}
```

### 🧠 Complexity

* **Time:** O(n × k log k)
* **Space:** O(n × k)

---

## 🧪 Edge Cases

```text
[""]           → [[""]]

["a"]          → [["a"]]

["abc"]        → [["abc"]]

["abc","bca","cab"]
→ [["abc","bca","cab"]]

["abc","xyz"]
→ [["abc"],["xyz"]]
```
