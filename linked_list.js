class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Linkedlist {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  display() {
    console.log(`The elements in the list are:`);

    if (this.size === 0) {
      console.log(`List is empty`);
    } else {
      let curr = this.head;
      while (curr) {
        console.log(curr.value);
        curr = curr.next;
      }
    }
  }
}

const list = new Linkedlist();
console.log(`Is list empty? `, list.isEmpty());
console.log(`Size of list is `, list.getSize());
list.prepend(16);
list.prepend(56);
list.prepend(93);
list.prepend(46);
list.display();
