export default class Comparator {
  /**
   * @param {function(a: *, b: *)} [compareFunction]
   */
  constructor(compareFunction) {}

  /**
   * @param {(string|number)} a
   * @param {(string|number)} b
   * @returns {number}
   */
  static defaultCompareFunction(a, b) {}

  equal(a, b) {}

  lessThan(a, b) {}

  greaterThan(a, b) {}

  lessThanOrEqual(a, b) {}

  greaterThanOrEqual(a, b) {}

  reverse() {}
}
