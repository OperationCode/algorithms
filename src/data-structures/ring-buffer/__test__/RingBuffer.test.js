import RingBuffer from '../RingBuffer';

describe('RingBuffer', () => {
  it('should create empty ringbuffer', () => {
    const ringbuffer = new RingBuffer();
    expect(ringbuffer).not.toBeUndefined();
    expect(ringbuffer.buffer).not.toBeUndefined();
  });

  it('should insert data to ringbuffer', () => {
    const ringbuffer = new RingBuffer();

    ringbuffer.push(1);
    ringbuffer.push(2);

    expect(ringbuffer.toString()).toBe('1,2');
  });

  it('should return the data in the same order it was inserted', () => {
    const ringbuffer = new RingBuffer();

    const data = [2,5,1,5,2,6,7,8,2,3];
    
    for (let v of data) {
      ringbuffer.push(v);
    }

    expect(ringbuffer.getBuffer()).toEqual(data.slice(data.length - 10));
  });
});
