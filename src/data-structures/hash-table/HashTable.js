import LinkedList from '../../../src/data-structures/linked-list/LinkedList';

const DEFAULT_SIZE = 32;

export default class HashTable {
  /**
   * @param {number} hashTableSize
   */
  constructor(size = DEFAULT_SIZE) {}

  /**
   * Converts key string to hash number.
   *
   * @param {string} key
   * @return {number}
   */
  hash(key) {}

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
   * @param {string} key
   * @param {*} value
   */
  set(key, value) {}

  /**
   * @param {string} key
   * @return {*}
   */
  delete(key) {}
}
