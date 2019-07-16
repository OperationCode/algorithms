import Comparator from '../../utils/comparator/Comparator';

/**
 * @typedef {Object} SorterCallbacks
 * @property {function(a: *, b: *)} compareCallback - If provided then all elements comparisons
 *  will be done through this callback.
 * @property {function(a: *)} visitingCallback - If provided it will be called each time the sorting
 *  function is visiting the next element.
 */

export default class Sort {
  constructor(comp = null) {
    this.comparator = new Comparator(comp);
  }

 
  sort() {
    throw new Error('sort method must be implemented');
  }
}
