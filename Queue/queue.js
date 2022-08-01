// Queue using array

// const queue = [];

// queue.unshift(1);
// queue.unshift(2);
// queue.unshift(3);
// queue.unshift(4);
// queue.unshift(5);

// console.log(queue);

// console.log(queue.pop());
// console.log(queue.pop());
// console.log(queue.pop());
// console.log(queue.pop());


// Queue using linked list

function Node(val) {
  this.data = val;
  this.next = null;
}

function Queue() {
  this.head = null;
  this.tail = null;
  this.size = 0;
}

Queue.prototype.push = function (val) {
  const node = new Node(val);
  if (!this.head) {
    this.head = node;
    this.tail = node;
    return ++this.size;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
  return ++this.size;
}

Queue.prototype.pop = function () {
  if (!this.size) return null;
  const node = this.head;
  if (this.size === 1) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = node.next;
  }
  this.size--;
  return node;
}

const queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);
queue.pop();
queue.pop();

console.log(queue);
