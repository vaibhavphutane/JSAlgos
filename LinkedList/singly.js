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
  if (position < 0 || position >= this.length) return null;
  
  const newNode = new Node(val);
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode
    this.length++;
    return this;
  }
  let count = 0;
  let currentNode = this.head;
  while(count !== position - 1) {
    currentNode = currentNode.next;
    count++;
  }
  const nextNode = currentNode.next;
  currentNode.next = newNode;
  newNode.next = nextNode;
  return this;
}

const list = new LinkedList();

list.addNode(1);
list.addNode(2);
list.addNode(3);
list.addNode(4);
list.addNode(5);
list.addNode(6);

// console.log('pop', list.pop(list.head))
// console.log('pop', list.pop(list.head))
// console.log('shift', list.shift())
// console.log('unshift', list.unshift('unshift'));
// console.log(list.findNode(list.head, 3));
// console.log('getNodeAt', list.getNodeAt(5));
// console.log('setNodeAt', list.setNodeAt(5, 10));
// console.log('insertNodeAt', list.insertAt(3, 11));
list.insertAt(3, 11)

console.log(list);

