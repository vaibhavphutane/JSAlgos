function Node(val) {
  this.data = val;
  this.next = null;
  this.prev = null;
}

function LinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

LinkedList.prototype.push = function (val) {
  const node = new Node(val);
  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    node.prev = this.tail
    this.tail = node;
    node.next = null;
  }
  this.length++;
  return this;
}

LinkedList.prototype.pop = function () {
  if (!this.head) return null;
  if (this.length === 1) {
    this.head = null;
    this.tail = null;
  } else {
    const prevNode = this.tail.prev;
    this.tail = prevNode;
    this.tail.next = null
  }
  this.length--;
  return this;
}



LinkedList.prototype.print = function () {
  if (!this.length) return null;
  let currentNode = this.head;
  let list = this.head.data;
  while (currentNode.next) {
    currentNode = currentNode.next;
    list = `${list} -> ${currentNode.data}`;
  }
  console.log(list);
}

const dll = new LinkedList();

dll.push(1);
dll.push(2);
dll.push(3);
dll.push(4);
dll.push(5);
dll.push(6);
dll.push(7);

dll.pop();
dll.pop();

console.log(dll);

dll.print();

