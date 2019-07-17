

import  QuickSortInPlaceHoare  from '../QuickSortInPlaceHoare';
import {
  equalArr,
  notSortedArr,
  reverseArr,
  sortedArr,
  SortTester,
} from '../../SortTester';

// Complexity constants.
const SORTED_ARRAY_VISITING_COUNT = 107;
const NOT_SORTED_ARRAY_VISITING_COUNT = 141;
const REVERSE_SORTED_ARRAY_VISITING_COUNT = 108;
const EQUAL_ARRAY_VISITING_COUNT = 118;



describe('QuickSortInPlaceHoare', () => {
  it('should sort array', () => {
    SortTester.testSort(QuickSortInPlaceHoare);
  });

  it('should sort array with custom comparator', () => {
    SortTester.testSortWithCustomComparator(QuickSortInPlaceHoare);
  });

  it('should sort negative numbers', () => {
    SortTester.testNegativeNumbersSort(QuickSortInPlaceHoare);
  });

  it('should visit EQUAL array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      QuickSortInPlaceHoare,
      equalArr,
      EQUAL_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit SORTED array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      QuickSortInPlaceHoare,
      sortedArr,
      SORTED_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit NOT SORTED array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      QuickSortInPlaceHoare,
      notSortedArr,
      NOT_SORTED_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit REVERSE SORTED array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      QuickSortInPlaceHoare,
      reverseArr,
      REVERSE_SORTED_ARRAY_VISITING_COUNT,
    );
  });


});
