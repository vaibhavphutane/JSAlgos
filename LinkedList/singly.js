function Node(data) {
  this.data = data;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

LinkedList.prototype.addNode = function (val) {
  const newNode = new Node(val);
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
  this.length++;
  return this;
}

LinkedList.prototype.pop = function (node) {
  if (!this.head)
    return null
  if (this.length === 1) {
    this.head = null;
    this.tail = null;
    this.length--;
    return node;
  }
  if (node.next === this.tail) {
    const tail = this.tail;
    this.tail = node;
    this.tail.next = null;
    this.length--;
    return tail;
  }
  return this.pop(node.next);
}

// Remove node from start
LinkedList.prototype.shift = function () {
  if (!this.head)
    return null;
  const currentNode = this.head;
  this.head = currentNode.next;
  this.length--;
  if (!this.length) {
    this.tail = null;
  }
  return currentNode;
}

LinkedList.prototype.unshift = function (val) {
  const newNode = new Node(val);
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    const currentHead = this.head;
    this.head = newNode;
    newNode.next = currentHead;
  }
  this.length++;
  return this;
}

LinkedList.prototype.getNodeAt = function (position) {
  if (position < 0 || position >= this.length) return null;
  let count = 0;
  let currentNode = this.head;
  while (count !== position) {
    currentNode = currentNode.next;
    count++;
  }
  return currentNode;
}

LinkedList.prototype.setNodeAt = function (position, val) {
  const node = this.getNodeAt(position);
  if (!node)
    return null;
  node.data = val;
  return node;
}

LinkedList.prototype.insertAt = function (position, val) {
  if (position < 0 || position > this.length) return null;
  if (position === 0) {
    this.length++;
    return !!this.unshift(val);
  } else if (position === this.length) {
    this.length++;
    return !!this.addNode(val);
  } else {
    const newNode = new Node(val);
    const previousNode = this.getNodeAt(position - 1);
    const currentNode = previousNode.next;
    previousNode.next = newNode;
    newNode.next = currentNode;
    this.length++;
    return true;
  }
}

LinkedList.prototype.removeAt = function (position) {
  if (position < 0 || position >= this.length) return false;
  if (position === 0) return !!this.shift();
  if (position === this.length - 1)
    return !!this.pop(this.head);
  const previousNode = this.getNodeAt(position - 1);
  previousNode.next = previousNode.next.next;
  this.length--;
  return true
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

LinkedList.prototype.reverse = function () {
  if (!this.length) return null;
  if (this.length === 1) return this.head;

  let prev = null;
  let next = null;
  let currentNode = this.head;
  this.head = this.tail;
  this.tail = currentNode;

  while(currentNode) {
    next = currentNode.next;
    currentNode.next = prev;
    prev = currentNode;
    currentNode = next;
  }
  return this;
}

const list = new LinkedList();

list.addNode(1);
list.addNode(2);
list.addNode(3);
list.addNode(4);
list.addNode(5);
list.addNode(6);
list.addNode(7);
list.addNode(8);

// console.log('pop', list.pop(list.head))
// console.log('pop', list.pop(list.head))
// console.log('shift', list.shift())
// console.log('unshift', list.unshift('unshift'));
// console.log(list.findNode(list.head, 3));
// console.log('getNodeAt', list.getNodeAt(5));
// console.log('setNodeAt', list.setNodeAt(5, 10));
// console.log('insertNodeAt', list.insertAt(3, 11));
// console.log('removeAt', list.removeAt(6))
list.reverse();

list.print();

