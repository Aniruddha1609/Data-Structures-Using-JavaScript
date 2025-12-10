class createQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.length = capacity;
    this.front = -1;
    this.rear = -1;
    this.currentLength = 0;
  }

  isFull() {
    return this.currentLength === this.length;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.length;
      this.items[this.rear] = element;
      this.currentLength += 1;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {
    if (!this.isEmpty()) {
      this.items[this.front] = null;
      this.front = (this.front + 1) % this.length;
      this.currentLength -= 1;
      if (this.isEmpty()) {
        this.rear = -1;
        this.front = -1;
      }
    }
  }

  peek() {
    return this.items[this.front];
  }

  display() {
    while (this.items[this.front] !== null) {
      console.log(this.items[this.front]);
      this.front = (this.front + 1) % this.length;
    }
  }
}

const queue = new createQueue(5);
console.log(queue.isFull());
console.log(queue.isEmpty());
queue.enqueue(3);
queue.enqueue(7);
queue.enqueue(19);
queue.enqueue(16);
queue.enqueue(24);
queue.dequeue();
queue.dequeue();
queue.enqueue(28);
console.log(queue);
queue.display();
