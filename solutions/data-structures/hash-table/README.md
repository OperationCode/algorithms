# Hash Table

In computing, a hash table (hash map) is a data 
structure which implements an associative array 
abstract data type, a structure that can map keys 
to values. A hash table uses a hash function to 
compute an index into an array of buckets or slots, 
from which the desired value can be found

Ideally, the hash function will assign each key to a 
unique bucket, but most hash table designs employ an 
imperfect hash function, which might cause hash 
collisions where the hash function generates the same
index for more than one key. Such collisions must be
accommodated in some way.



![Hash Table](https://upload.wikimedia.org/wikipedia/commons/7/7d/Hash_table_3_1_1_0_1_0_0_SP.svg)


We will consider two kinds of hash table, one where the buckets each contain a linked list, and one woth so-called open-adressing, where we put the hash object somewhere wlese in the table if the first position we look in is full.




Hash collision resolved by separate chaining.

We start by creating a hash table.  This contains an array of size `hashTableSize` filled with  linked lists.  We want to be able to add and delete from these lists when we add or delete from the hash table.  We could use doubly linked lists, but that would make things no faster, as singly linked lists can add and delete just as fast (or faster) than doubly linked lists.  We also keep the keys that we add to the table in a seperate objects `keys`.  Actually, all javascript objects act as hash tables, so this object will be a hash table that maps each key to is hash value.  We could use a list, or an array, of keys, but for simplicity, we use this object.  We only use this for testing, so we do not rely on this to implement our actual table.



The next important function is the hash function itself.  This converts a string into a number between 0 and  `hashTableSize`, and so tells us which bucket an string should go in. There are various ways to make hash function.  We consider two simple ways.  The first function `hash` adds the ascii character codes for each letter together.  This gives an number h.  We return the remainder when h is divided by `hashTableSize`.  This function is serves our purpose, but has some weaknesses.  For example, is hashes all strings with the same characters to the same value, so "act", "cat", and "tac" all return the same value.  

We can make a better function with a little math.  We use dbj2, a well known hash function.  This works by starting with 5381.  For each character, it multiplies by 33 and adds the next character code.  Finally we mod with `hashTableSize` to get a value in range.  Any prime number instead of 33 gives a hash function, but 33 is know to be particularly good.  A hash function like this is called a Polynomial hash code.


To `set` a key value pair in our hash table, we compute which bucket to use, using our hash function.  We then look in the linked list for our key.  If we find it, we update the value.  If we do not, we just append the key value pair to our list.  Each list is composed of objects, key value pairs.  The lists are not in sored order, though if we did keep them in sorted orded we could speed up our retrivial by a factor of 2 on average.

To `delete` a key is similar.  We find the right bucket, and then find the node with that key in the corresponding list. We then delete the node.  This is linear in the length of the list, as deleting from a list requires traversing the entire list again.  If we wrote a single loop, that remember the previous nodes value, we could do this in a single traverse.

To `get` a key, we again find in the linked list of the correct bucket.

We add two functions helpful for testings.  `has` tells whether a key is in the hash table, by querying keys.  `getKeys` retuns the list of keys by using the javascript function `Object.keys`.


![Hash Collision](https://upload.wikimedia.org/wikipedia/commons/d/d0/Hash_table_5_0_1_1_1_1_1_LL.svg)

Another way of writing hash table is to use open-addressing.  Rather than have a set of lists that contain the key value pairs we are storing, we just use an array of key value pairs.  When we want to insert or get or set, we compute the hash code, and look at that point in the array.  This is much simpler and faster.  There is one catch however.  If another key hashes to the same place, the our array might have another key value pair in the position we were going to use.  We need a way to find another place for our pair.  There are many ways to find another position, but we wil just consider the simplest for now.  We look forward in our array (looping back to zero once we get to the end).  If we are inserting, we put out key value pair in the next empty place.  If we are looking for a particular key, we know that it is not in the table if we every come across an empty slot.  One function is diffiuult to implement, deletion, as we can not just make position where the key value pair was null again, as if another key hashed to the same position, it would have been put in a later position.  We can fix this in two ways.  We can marked places as deleted, so we know to keep looking, or we can write special code to fix up all the key value pairs that are affected.


 The `constructor` is easy. It just creates a `store` of the correct size.

Our `hash` function is eactly as before. 

To `set` a key to a value, we compute the hash code.  We start at that positioin in the array, and loop forward, incrementing the position by one, until we find an empty position or the key we seek. If we find an empty position we insert the key value pair, otherwise we set the value of the pair to the new value.

To `get` a key's value is much the same as `set`.  

A simple way to implement `delete` is to set the key value pair to a new deleted value, that can not be confused with another key value pair.  The string "deleted" will do.  There is a trickier way, which we now explain.

To `deleteG` a key value,  we first find the corresponding position, p.  We then find the next empty position after p.  We loop over these  positions, set their positions to null, and re-insert each key value pair.  


An analysis of the complexity of linear probing is difficult, and beyond what we can treat here.  So long as the hash table is not too full (70%), then operations will look at less than 2 locations on average.  Once the table is more than 70% full, the number of locations that need to be scanned goes up very quickly.  Open addressing is faster than chaining when tables are not too full, but chaining has better characteristics when the table is almost full.  


#Problems#

Most of these problems are ones that could be solved without a hash table, but using a hash table makes the solution faster.  For example, to find a pair of elements of an array that sum to a given value can be solved by looking at all pairs.  If the array has length n, this looks at n^2 pairs, and thus has complexity O(n^2).  With as hash table, we can do this in O(n), looking at each object once, and storing n objects in out table, and doing only n requests.  Hash tables are mostly used to improve the running time of algorithms.  The functions they implment, get, set, and delete, can be implemented by a list, though a list is slower.

     
**Find/Count Pair that sums to a value**

Given an array of integers, find a pair that sums to a value, or alternately, count how many pairs sum to a value.  

`findPairSum([1,2,3,4],6)` should return [2,4].

'countPairSum([1,2,3,4],5)` should return 2, as [1,4] and [2, 3] sum to 5.  


**Find duplicates in an array**

Given an array of integers, find the duplicates in the array, and return an array of the duplicates, each occuring just once.  Also, count the number of different duplicates.  

`findDuplicates([1,2,3,4,3,2,2])` should return [2,3].  

`countDuplicates([1,2,3,4,3,2,2])` should return 2.

**Most frequent element in array**

Given an array of integers, find the integer that occurs the most often. If two integers occur the same number of times, and more than any other, return the first.

`mostFrequent([1,2,3,4,3,2,2])` should return 2.  

##Intermediate##

**Largest subarray with zero sum**

Given an array of integers, find the length of the longest subarray with sum equals to 0.

The easy solution is try all sub arrays and see which ones sum to 0.  Keep track of the length of the longest one, and return that.  This is O(n^2).  With a hash table, we can do better.

`largestZeroSubArray( [15, -2, 2, -8, 1, 7, 10, 23])` should return 0, as [15, -2, 2, -8, 1, 7] sums to 0.

**Longest consecutive subsequence**


Given an array of integers, find the length of the longest sub-sequence, not sub-array,  such that elements in the sequence are consecutive integers, that is, numbers in order.  The consecutive numbers can be in any order, they just need to be consective as a set.

For example, [1, 9, 3, 10, 4, 20, 2] has the sub-sequence 1,3,4,2.  This is consecutive.



`largestConsecutiveSubsequence( [1, 9, 3, 10, 4, 20, 2])` should return 4, as 1,3,4,2 is a subsequence, with all the numbers between 1 and 4. 




## References

- [Wikipedia](https://en.wikipedia.org/wiki/Hash_table)
- [YouTube](https://www.youtube.com/watch?v=shs0KM3wKv8&index=4&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
