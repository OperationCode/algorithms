import LinkedList from '../linked-list/LinkedList';

// Hash table size directly affects on the number of collisions.
// The bigger the hash table size the less collisions you'll get.
// For demonstrating purposes hash table size is small to show how collisions
// are being handled.
const defaultHashTableSize = 32;

export default class HashTable {
  /**
   * @param {number} hashTableSize
   */
  constructor(hashTableSize = defaultHashTableSize) {}

  /**
   * Converts key string to hash number.
   *asadsd
   * @param {string} key
   * @return {number}
   */
  hash(key) {}

  /**
   * @param {string} key
   * @param {*} value
   */
  set(key, value) {}

  /**
   * @param {string} key
   * @return {*}
   */
  delete(key) {}

  /**
   * @param {string} key
   * @return {*}
   */
  get(key) {}

  /**
   * @param {string} key
   * @return {boolean}
   */
  has(key) {}

  /**
   * @return {string[]}
   */
  getKeys() {}
}
