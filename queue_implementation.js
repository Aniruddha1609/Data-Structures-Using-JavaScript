class constructQueue {
  constructor(capacity) {
    this.capacity = capacity;
    this.items = new Array(this.capacity);
    this.currentLength = 0;
    this.front = -1;
    this.rear = -1;
  }

  isFull() {
    return this.capacity === this.currentLength;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  enqueue(element) {
    if (!this.isFull()) {
      this.rear = this.rear + 1;
      this.items[this.rear] = element;
      this.currentLength += 1;
      if (this.rear === 0) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {
    if (!this.isEmpty()) {
      this.items[this.front] = null;
      this.front += 1;
      this.currentLength -= 1;
      if (this.isEmpty()) {
        this.front = -1;
        this.rear = -1;
      }
    }
  }

  peek() {
    return this.items[this.front];
  }

  display() {
    while (this.front != this.capacity) {
      console.log(this.items[this.front]);
      this.front++;
    }
  }
}

const queue = new constructQueue(5);
queue.enqueue(5);
queue.enqueue(8);
queue.enqueue(4);
queue.enqueue(16);
queue.enqueue(28);
queue.enqueue(18);
queue.dequeue();
console.log(queue.peek());
console.log(queue);
queue.display();
