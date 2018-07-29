# Operation Code Algorithms Curriculum

Welcome to OpCode's Algorithms curriculum!

What is algorithms? It is a set of instructions performed on some data. Different ways of storing and manipulating data provides us easier, faster, or previously-thought impossible ways to solve real world problems. The algorithms utilizing these data structures (which are also written in algorithms), the humanity has achieved incredible advancements.

The subject may seem intimidating at first, but it is all built on top of small key pieces over one another. This curriculum is designed to help you get started on those fundamental pieces. The problem sets contain key 6 data structures, 9 sorting/searching algorithms, and 3 mathematical exercises.

> **Why study algorithms?**
>
> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu eros eu dolor maximus consectetur sed eget tortor. In sit amet ligula erat. Proin ac porta ex, non vehicula augue. Cras et dolor at dui malesuada suscipit. Suspendisse potenti. Mauris dapibus lobortis eros eget hendrerit. Why not?

Prerequisites:

- Basic coding experience.
- Familiarity with the terminal.
- Basic Git operations.
- Understanding of the Big O notation.

## Curriculum

- **Data Structures**
  - [Queue](src/data-structures/queue)
  - [Stack](src/data-structures/stack)
  - [Linked List](src/data-structures/linked-list)
  - [Doubly Linked List](src/data-structures/doubly-linked-list)
  - [Hash Table](src/data-structures/hash-table)
  - [Binary Search Tree](src/data-structures/tree/binary-search-tree)
- **Sorting**
  - [Bubble Sort](src/algorithms/sorting/bubble-sort)
  - [Selection Sort](src/algorithms/sorting/selection-sort)
  - [Insertion Sort](src/algorithms/sorting/insertion-sort)
  - [Merge Sort](src/algorithms/sorting/merge-sort)
  - [Quicksort](src/algorithms/sorting/quick-sort)
- **Searches**
  - [Linear Search](src/algorithms/search/linear-search)
  - [Binary Search](src/algorithms/search/binary-search)
  - [Depth-First Search](src/algorithms/tree/depth-first-search)
  - [Breadth-First Search](src/algorithms/tree/breadth-first-search)
- **Numbers**
  - [Factorial](src/algorithms/numbers/factorial)
  - [Fibonacci Number](src/algorithms/numbers/fibonacci)
  - [Prime Number](src/algorithms/numbers/prime)

## How it works

### Folders

This repository contains two key folders: `/src` and `/solutions`.

- `/solutions` contain the solved problem sets.
  - It is encouraged that you read the solutions after you solve the problem. It is okay to refer to certain parts of the solutions if you are truly stuck.
  - Do your best to go as far as you can, but do not feel discouraged if you don't finish it. Study the solutions, and make sure you truly understand the material. Then try the problem again.
  - Please **do not update** any files in this folder. As we improve the curriculum, this folder will be updated. If you change any files here, then you will have to deal with merge conflicts. =)
- `/src` is where you will write your code.
  - You are free to commit your work in this folder and upload them to GitHub.

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

- Fork this repo.
  - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
- Clone the repo to your computer.
  - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
- Run `npm run install` in the repo root.
  - Make sure you have `node` installed. If not !!!INSTRUCTIONS!!!
- Run `npm run watch` to run the tests in watch-mode.
  - Once `jest` is done initializing, press `p` to filter the tests.
  - Type in the name of your problem set, for example 'Queue'.
  - This will automatically re-run the Queue tests any time you save your changes.

## How to Contribute

- We need mentors in #algorithms-curriculum channel.
  - Because the problem descriptions are poorly written at the moment, we will need to walk the students on Slack. Also, some may have deeper questions about the material, and we can all learn together by providing mentorship.
- We need help writing a walkthrough for each problem set.
  - Currently, the problemss only provide a brief description. A detailed walkthrough is needed for the first several problems in order to help people adjust to the system.
- We need help with writing tests in other languages.
  - Not everyone maybe familiar with JavaScript. Also, learning this material is actually better in other languages such as Python or Ruby.
- We need help with improving the solutions.
  - The students are expected to read and study the solutions.

## Credit

The tests have been imported from [JavaScript Algorithms](https://github.com/trekhleb/javascript-algorithms) by [Oleksii Trekhleb](https://github.com/trekhleb/).
