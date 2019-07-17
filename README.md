# Operation Code Algorithms Curriculum

Welcome to OpCode's Algorithms curriculum!

What are algorithms? They a set of instructions performed on some data. They act as different ways of storing and manipulating data provides us easier, faster, or previously-thought impossible ways to solve real world problems.

The subject may seem intimidating at first, but it is all built on top of small key pieces over one another. This curriculum is designed to help you get started on those fundamental pieces. While many resources exist online, many are filled with jargons and require extensive previous knowledge. This curriculum is geared towards beginners, and it provides the walkthroughs, test cases, and online help on Slack.

Prerequisites:

- Basic coding experience.
- Familiarity with the terminal.
- Basic Git operations.
- Understanding of the Big O notation.

## Curriculum

The problem sets below contain information on key data structures, sorting/searching algorithms, and various mathematical exercises.

- **Data Structures**
  - [Queue](solutions/data-structures/queue)
  - [Stack](solutions/data-structures/stack)
  - [Linked List](solutions/data-structures/linked-list)
  - [Doubly Linked List](solutions/data-structures/doubly-linked-list)
  - [Heap](solutions/data-structures/heap)
  - [Binary Tree](solutions/data-structures/binary-tree)
  - [Hash Table](solutions/data-structures/hash-table)
  - [Binary Search Tree](solutions/data-structures/binary-search-tree)
- **Sorting**
  - [Bubble Sort](solutions/algorithms/sorting/bubble-sort)
  - [Selection Sort](solutions/algorithms/sorting/selection-sort)
  - [Insertion Sort](solutions/algorithms/sorting/insertion-sort)
  - [Merge Sort](solutions/algorithms/sorting/merge-sort)
  - [Quicksort](solutions/algorithms/sorting/quick-sort)
- **Searches**
  - [Linear Search](solutions/algorithms/search/linear-search)
  - [Binary Search](solutions/algorithms/search/binary-search)
  - [Depth-First Search](solutions/algorithms/tree/depth-first-search)
  - [Breadth-First Search](solutions/algorithms/tree/breadth-first-search)
- **Numbers**
  - [Factorial](solutions/algorithms/numbers/factorial)
  - [Fibonacci Number](solutions/algorithms/numbers/fibonacci)
  - [Prime Number](solutions/algorithms/numbers/prime)
  - [Happy Number](solutions/algorithms/numbers/happy)
  - [Ugly Number](solutions/algorithms/numbers/ugly)
  - [Lexicographical Numbers](solutions/algorithms/numbers/lexicographical)

## How it works

### Schedule

These schedules are guidelines.  Please approach them at your own pace.

#### Regular
Recommended track for beginners who can devote 2-4 hours a day.

* Day 1
  - Queue (1 Hour)
  - Stack (1 Hour)
* Day 2
  - Linked List (4 Hours)
* Day 3
  - Hash Table (4 Hours)
* Day 4
  - Selection Sort (30 Minutes)
  - Insertion Sort (30 Minutes)
  - Bubble Sort (2 Hours)
* Day 5
  - Merge Sort (4 Hours)
* Day 6
  - Quicksort (4 Hours)
* Day 6
  - Binary Search  (2 Hours)
* Day 7
  - Depth-First Search (2 Hour)
* Day 8
  - Breadth-First Search (2 Hour)
* Day 9
  - Binary Search Tree (4 Hours)
* Day 10
  - Binary Search Tree (4 Hours)
* Day 11
  - Fibonacci Number (1 Hour)
  - Prime Number (1 Hour)
  - Factorial (2 Hours)

#### Quick
Recommended for someone who is comfortable coding and can devote ~6 hours a day.

* Day 1
  - Queue (30 Minutes)
  - Stack (30 Minutes)
  - Linked List (2 Hours)
  - Hash Table (2 Hours)
* Day 2
  - Selection Sort (30 Minutes)
  - Insertion Sort (30 Minutes)
  - Bubble Sort (1 Hour)
  - Merge Sort (4 Hours)
  - Quicksort (2 Hours)
* Day 3
  - Binary Search (1 Hour)
  - Depth-First Search (1 Hour)
  - Breadth-First Search (1 Hour)
  - Factorial (30 Minutes)
  - Fibonacci Number (1 Hour)
  - Prime Number (1 Hour)
* Day 4
  - Binary Search Tree (6 Hours)

### Folders

This repository contains two key folders: `/src` and `/solutions`.

- `/solutions` contain the solved problem sets.
  - It is encouraged that you read the solutions after you solve the problem. It is okay to refer to certain parts of the solutions if you are truly stuck.
  - Do your best to go as far as you can, but do not feel discouraged if you don't finish it. Study the solutions, and make sure you truly understand the material. Then try the problem again.
  - Please **do not update** any files in this folder. As we improve the curriculum, this folder will be updated. If you change any files here, then you will have to deal with merge conflicts. =)
- `/skeletons` contains the stripped version of problems.
  - This folder will always mirror `/solutions` folder.
  - You are free to copy the folder from here into `/src` folder and start solving them, however, be aware that we may update the files in `/src` and you may run into merge conflicts.
- `/src` is where you will write your code.
  - Contains the problem sets that are fully ready.
  - Please do not update any files except the file for the problem itself.
  - Please feel free to commit your code here and upload them to GitHub.

### Test-Driven Development

We will be utilizing Test-Driven Development (TDD). When you write your code and run the tests, you will be provided with immediate feedback. The tests cover numerous edge cases you may not be aware of when you are studying.

The test files are in `__test__` folder in each problem set, and it is necessary for you to read the tests. It is important for you to understand what the question is asking. Let's walkthrough an example:

```
describe('Queue', () => {
  it('should enqueue data to queue', () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.toString()).toBe('1,2');
  });
}
```

(From the [Queue test](/src/data-structures/queue/__test__/Queue.test.js))

Let's read it: it `describe`s a queue, and `it` `should create enqueue data to queue`. And we will first create a new `Queue` object with `const queue = new Queue();`. Then, we will go ahead and call `enqueue` with `1` and `2`. Then the test `expect`s that `queue.toString()` `to` `be` `1,2`.

See how it reads like regular language? Understanding the test specifications will be crucial in solving the problems. At times, it will frustrate you and you will feel like you are fighting the tests. There will be times where passing one test will fail another test. However, the tests are there to guide you through the journey. Think of it having a very harsh and strict teacher.

## How to Start

- Fork and clone the repo to your computer.
- Setup your upstream.
  - In the terminal, enter the repo and run `git remote add upstream https://github.com/OperationCode/algorithms.git`
- Run `npm run install` in the repo root.
- Run `npm run watch` to run the tests in watch-mode.
  - Once `jest` is done initializing, press `p` to filter the tests.
  - Type in the name of your problem set, for example 'Queue'.
  - This will automatically re-run the Queue tests any time you save your changes.

## How to Update

- There will be times when the problem sets will be updated. In that case, we will announce in the channel for everyone to pull from `upstream`.
- Enter the terminal, and run `git pull upstream master`.
- If you have edited the `/solutions` or `/solutions` folder, you may run into a merge conflict. At that point, please reach out to the channel on Slack.

## How to Contribute

- We need mentors in #basic-algorithms channel.
- We need help writing a walkthrough for each problem set.
- We need help with writing tests in other languages.
  - Not everyone maybe familiar with JavaScript. Also, learning this material is actually better in other languages such as Python or Ruby.
- We need help with improving the solutions.
  - The students are expected to read and study the solutions.

## Credit

The tests have been imported from [JavaScript Algorithms](https://github.com/trekhleb/javascript-algorithms) by Oleksii Trekhleb
