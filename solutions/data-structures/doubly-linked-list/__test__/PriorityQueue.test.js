import PriorityQueue  from  '../PriorityQueue';



describe('PriorityQueue', () => {

 it('should create empty priority queue', () => {
    const queue = new PriorityQueue();
    expect(queue).not.toBeNull();
    expect(queue.store).not.toBeNull();
  });

  it('should enqueue data to priority  queue', () => {
    const queue = new PriorityQueue(  (a,b) => { return a.value < b.value } );


    queue.enqueue(4);
    queue.enqueue(3);
    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.toString()).toBe('1,2,3,4');
  });

  it('should be possible to enqueue/dequeue in order', () => {
    const queue = new PriorityQueue();

      queue.enqueue(2);

    queue.enqueue(1);

    expect(queue.getHighest()).toBe(1);
    expect(queue.getHighest()).toBe(2);
  });

  it('should peek data from priority  queue', () => {
    const queue = new PriorityQueue();

    expect(queue.peek()).toBeNull();

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.peek()).toBe(1);
    expect(queue.peek()).toBe(1);
  });

  it('should check if queue is empty', () => {
    const queue = new PriorityQueue();

    expect(queue.isEmpty()).toBeTruthy();

    queue.enqueue(1);

    expect(queue.isEmpty()).toBeFalsy();
  });

  it('should dequeue from queue in given  order', () => {
    const queue = new PriorityQueue();

    queue.enqueue(2);
    queue.enqueue(1);

    expect(queue.getHighest()).toBe(1);
    expect(queue.getHighest()).toBe(2);
    expect(queue.getHighest()).toBeNull();
    expect(queue.isEmpty()).toBeTruthy();
  });
});

