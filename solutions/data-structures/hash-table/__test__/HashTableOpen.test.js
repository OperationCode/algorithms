import HashTableOpen from '../HashTableOpen';

describe('HashTable', () => {
  it('should create hash table of certain size', () => {
    const defaultHashTable = new HashTableOpen();
    expect(defaultHashTable.buckets.length).toBe(32);

    const biggerHashTable = new HashTableOpen(64);
    expect(biggerHashTable.buckets.length).toBe(64);
  });

  it('should generate proper hash for specified keys', () => {
    const hashTable = new HashTableOpen();

    expect(hashTable.hash('a')).toBe(1);
    expect(hashTable.hash('b')).toBe(2);
    expect(hashTable.hash('abc')).toBe(6);
  });

 it('should generate dbj hash for specified keys', () => {
    const hashTable = new HashTableOpen();

    expect(hashTable.hash1('a')).toBe(6);
    expect(hashTable.hash1('b')).toBe(7);
    expect(hashTable.hash1('abc')).toBe(11);
  });


  it('should set, read and delete data with collisions', () => {
    const hashTable = new HashTableOpen(10);

    expect(hashTable.hash('a')).toBe(7);
    expect(hashTable.hash('b')).toBe(8);
    expect(hashTable.hash('c')).toBe(9);
    expect(hashTable.hash('d')).toBe(0);

    hashTable.set('a', 'sky-old');
      hashTable.set('a', 'sky');
    hashTable.set('ab', 'sky');
    hashTable.set('b', 'sea');
    hashTable.set('c', 'earth'); 
    hashTable.set('ba', 'ocean');  // this hashes to the same spot as 'ab'

    expect(hashTable.has('x')).toBeFalsy();
    expect(hashTable.has('b')).toBeTruthy();
    expect(hashTable.has('c')).toBeTruthy();

      expect(hashTable.hash('ab')).toBe(5);
      expect(hashTable.hash('ba')).toBe(5);
      
    const stringifier = value => `${value.key}:${value.value}`;

      expect(hashTable.buckets[9].key.toString(stringifier)).toBe('c');
      expect(hashTable.buckets[9].value.toString(stringifier)).toBe('earth');
      
      expect(hashTable.buckets[7].key.toString(stringifier)).toBe('a');
      expect(hashTable.buckets[7].value.toString(stringifier)).toBe('sky');
      
      expect(hashTable.buckets[5].key.toString(stringifier)).toBe('ab');
      expect(hashTable.buckets[5].value.toString(stringifier)).toBe('sky');
      
      expect(hashTable.buckets[6].key.toString(stringifier)).toBe('ba');
      expect(hashTable.buckets[6].value.toString(stringifier)).toBe('ocean');
      

      expect(hashTable.get('a')).toBe('sky');
      expect(hashTable.get('ba')).toBe('ocean');
      expect(hashTable.get('x')).not.toBeDefined();
      
      hashTable.delete('a');
      
      expect(hashTable.delete('not-existing')).toBeNull();

      expect(hashTable.get('a')).not.toBeDefined();
      expect(hashTable.get('ba')).toBe('ocean');
      
      hashTable.set('ba', 'ocean-new');
      expect(hashTable.get('ba')).toBe('ocean-new');
  });

  it('should be possible to add objects to hash table', () => {
    const hashTable = new HashTableOpen();

    hashTable.set('objectKey', { prop1: 'a', prop2: 'b' });

    const object = hashTable.get('objectKey');
    expect(object).toBeDefined();
    expect(object.prop1).toBe('a');
    expect(object.prop2).toBe('b');
  });

  it('should track actual keys', () => {
    const hashTable = new HashTableOpen(10);

    hashTable.set('a', 'sky-old');
    hashTable.set('a', 'sky');
    hashTable.set('b', 'sea');
    hashTable.set('c', 'earth');
    hashTable.set('d', 'ocean');

    expect(hashTable.getKeys()).toEqual(['a', 'b', 'c', 'd']);
    expect(hashTable.has('a')).toBeTruthy();
    expect(hashTable.has('x')).toBeFalsy();

    hashTable.delete('a');

    expect(hashTable.has('a')).toBeFalsy();
    expect(hashTable.has('b')).toBeTruthy();
    expect(hashTable.has('x')).toBeFalsy();
  });

 it('should set, read and deleteG data with collisions', () => {
    const hashTable = new HashTableOpen(10);

    expect(hashTable.hash('a')).toBe(7);
    expect(hashTable.hash('b')).toBe(8);
    expect(hashTable.hash('c')).toBe(9);
    expect(hashTable.hash('d')).toBe(0);

    hashTable.set('a', 'sky-old');
      hashTable.set('a', 'sky');
    hashTable.set('abd', 'sky');
    hashTable.set('b', 'sea');
    hashTable.set('c', 'earth'); 
    hashTable.set('bad', 'ocean');  // this hashes to the same spot as 'ab'

    expect(hashTable.has('x')).toBeFalsy();
    expect(hashTable.has('b')).toBeTruthy();
    expect(hashTable.has('c')).toBeTruthy();

      expect(hashTable.hash('abd')).toBe(5);
      expect(hashTable.hash('bad')).toBe(5);
     expect(hashTable.hash('bda')).toBe(5);
     hashTable.set('bda', 'desert');

    const stringifier = value => `${value.key}:${value.value}`;

      expect(hashTable.buckets[9].key.toString(stringifier)).toBe('c');
      expect(hashTable.buckets[9].value.toString(stringifier)).toBe('earth');
      
      expect(hashTable.buckets[7].key.toString(stringifier)).toBe('a');
      expect(hashTable.buckets[7].value.toString(stringifier)).toBe('sky');
      
      expect(hashTable.buckets[5].key.toString(stringifier)).toBe('abd');
      expect(hashTable.buckets[5].value.toString(stringifier)).toBe('sky');
      
      expect(hashTable.buckets[6].key.toString(stringifier)).toBe('bad');
      expect(hashTable.buckets[6].value.toString(stringifier)).toBe('ocean');
      
     expect(hashTable.buckets[0].key.toString(stringifier)).toBe('bda');
     expect(hashTable.buckets[0].value.toString(stringifier)).toBe('desert');


      expect(hashTable.get('a')).toBe('sky');
      expect(hashTable.get('bad')).toBe('ocean');
      expect(hashTable.get('x')).not.toBeDefined();
      
      hashTable.deleteG('abd');
     
     expect(hashTable.buckets[5].key.toString(stringifier)).toBe('bad');
      expect(hashTable.buckets[5].value.toString(stringifier)).toBe('ocean');
     
       expect(hashTable.buckets[6].key.toString(stringifier)).toBe('bda');
      expect(hashTable.buckets[6].value.toString(stringifier)).toBe('desert');
     
     
      expect(hashTable.delete('not-existing')).toBeNull();

      expect(hashTable.get('abd')).not.toBeDefined();
      expect(hashTable.get('bad')).toBe('ocean');
      
      hashTable.set('bad', 'ocean-new');
      expect(hashTable.get('bad')).toBe('ocean-new');
  });


});
