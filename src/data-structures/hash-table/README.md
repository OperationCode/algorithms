# Hash Table

## Description

Watch both videos about hash tables:

<a href="http://www.youtube.com/watch?feature=player_embedded&v=shs0KM3wKv8
" target="_blank"><img src="http://img.youtube.com/vi/shs0KM3wKv8/0.jpg" width="240" height="180" border="10" /></a>
[Data Structures: Hash Tables](https://www.youtube.com/watch?v=0M_kIqhwbFo) (6 Minutes)

<a href="http://www.youtube.com/watch?feature=player_embedded&v=KyUTuwz_b7Q
" target="_blank"><img src="http://img.youtube.com/vi/KyUTuwz_b7Q/0.jpg" width="240" height="180" border="10" /></a>
[Hash Tables and Hash Functions by Kevin Drumm](https://www.youtube.com/watch?v=KyUTuwz_b7Q) (14 Minutes)

The first video provides a great introduction to the what a hash table is, and what it's used for. The second video provides the explanation of the actual implementation (and the speaker has an awesome British accent).

## Implementation

- `constructor(size)`
  - Write a function that instantiates the buckets.
- `hash(key)`
  - Write a function that generates the hash of the key.
- `get(key)`
  - Write a function that retrieves an item from the hash table.
- `has(key)`
  - Write a function that returns whether or not the item exists in the hash.
- `set(key, value)`
  - Write a function that sets an item in the hash table.
- `delete(key)`
  - Write a function that deletes an item in the hash table.

## Walkthrough

### `constructor()`

- Usage:
  ```
  const hashTable = new HashTable();
  ```
- Create an array with the size specified.
- Each index in the array is usually called a bucket.
- Fill each bucket in the array with a linked list.

### `hash(key)`

- Generate the index of the bucket.
- Usage:
  ```
  const hash = this.hash('a') // hash => 1
  ```
- There are numerous ways to generate a hash, and for this exercise, we will simply map `a` to `1`, `b` to `2`, `c` to `3` and on.
  - Examples:
    ```
    hash('a') // 1
    hash('b') // 2
    hash('ab') // 3 = 1 + 2
    hash('abc') // 6 = 1 + 2 + 3
    ```
- Once the hash value is generated, `mod` it by the length of the buckets to map it to the buckets.

### `get(key)`

- Retrieves the value for the stored key.
- Usage:
  ```
  const hashTable = new HashTable();
  hashTable.set('a', 1);
  hashTable.get('a'); // 1
  ```
- Utilize the `this.hash(key)` funtion in order to access the find the linked list.
- Utilize the found linked list's `find` function to locate the linked list node with the value.
  - The find function also takes a custom callback.
  - Use the callback function to find the node with the correct key

### `has(key)`

- Returns whether the key exists in the hash table.
- Usage:
  ```
  const hashTable = new HashTable();
  hashTable.has('a'); // false
  ```
- Utilize the `get()` function written previously to return whether the hash table contains the key.

### `set(key, value)`

- Stores the key/value pair into the hash table.
- Usage:
  ```
  const hashTable = new HashTable();
  hashTable.set('a', 1);
  hashTable.get('a'); // 1
  hashTable.set('a', 2);
  hashTable.get('a'); // 2
  ```
- Locate the correct bucket by utilizing the `hash()` function.
- Check if the linked list in the bucket contains an entry with the key.
- If the key exists, delete the key.
  - When you call `set('a', 1)` then `set('a', 2)`, the expected value is `2`.
- Add a new entry for the key/value pair to the linked list.

### `delete(key)`

- Delete the key/value pair from the hash table.
- Usage:
  ```
  const hashTable = new HashTable();
  hashTable.set('a', 1);
  hashTable.delete('a');
  hashTable.has('a'); // false
  ```
