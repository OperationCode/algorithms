import LinkedList from '../../../solutions/data-structures/linked-list/LinkedList';

const DEFAULT_SIZE = 32;

export default class HashTable {
  /**
   * @param {number} hashTableSize
   */
  constructor(size = DEFAULT_SIZE) {
    this.buckets = Array(size).fill().map(() => new LinkedList());
  }

  /**
   * Converts key string to hash number.
   *
   * @param {string} key
   * @return {number}
   */
  hash(key) {
    const hashNum = Array.from(key).reduce((hash, char) => hash += char.charCodeAt(0), 0);
    return hashNum % this.buckets.length;
  }

  /**
   * @param {string} key
   * @return {*}
   */
  get(key) {
    const hash = this.hash(key);

    const foundItem = this.buckets[hash].find({
      callback: nodeValue => nodeValue.key === key,
    });

    return foundItem && foundItem.value.value;
  }

  /**
   * @param {string} key
   * @return {boolean}
   */
  has(key) {
    return !!this.get(key);
  }

  /**
   * @param {string} key
   * @param {*} value
   */
  set(key, value) {
    const hash = this.hash(key);
    const bucket = this.buckets[hash];

    const node = this.buckets[hash].find({
      callback: nodeValue => nodeValue.key === key,
    })

    if (node) {
      bucket.delete(node.value);
    }

    bucket.append({
      key,
      value
    });
  }

  /**
   * @param {string} key
   * @return {*}
   */
  delete(key) {
    if (this.has(key)) {
      const hash = this.hash(key);
      const bucket = this.buckets[hash];

      const node = bucket.find({
        callback: value => value.key === key,
      })

      bucket.delete(node.value);

      return node;
    }

    return null;
  }
}
