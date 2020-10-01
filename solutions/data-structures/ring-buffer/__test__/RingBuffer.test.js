import RingBuffer from '../RingBuffer';

describe('RingBuffer', () => {
  it('should create empty RingBuffer', () => {
    const RingBuffer = new RingBuffer();
    expect(RingBuffer).not.toBeUndefined();
    // expect(RingBuffer.store).not.toBeUndefined();
  });

  it('should insert data to RingBuffer', () => {
    const RingBuffer = new RingBuffer();

    RingBuffer.push(1);
    RingBuffer.push(2);

    expect(RingBuffer.toString()).toBe('1,2');
  });

  it('should check if RingBuffer is empty', () => {
    const RingBuffer = new RingBuffer();

    expect(RingBuffer.isEmpty()).toBeTruthy();

    RingBuffer.push(1);

    expect(RingBuffer.isEmpty()).toBeFalsy();
  });

  it('should return the data in the same order it was inserted', () => {
    const RingBuffer = new RingBuffer();

    expect(RingBuffer.isEmpty()).toBeTruthy();

    const data = [2,5,1,5,2,6,7,8,2,3,5,7,1,2,3]
    
    for (let v of data) {
      RingBuffer.push(v);
    }

    expect(RingBuffer.getBuffer().toBe(data);
  });
});
