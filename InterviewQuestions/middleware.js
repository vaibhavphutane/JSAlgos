//Middleware is the programming pattern of providing hooks with a resume callback.

// constructor
function Node(cb, next) {
  this.cbFn = cb;
  this.next = next;
}


var Middleware = function() {
  this.list = null;
  this.tail = null;
  this.head = null;

  this.use = function(cb) {
    if(this.list === null) { 
      const newNode = new Node(cb, null);
      this.tail = newNode;
      this.list = newNode;
      this.head = newNode;
    }
    const newNode = new Node(cb, null);
    this.tail.next = newNode;
    this.tail = this.tail.next;
   }

  this.go = function(cb) {
     this.tail.next = new Node(cb, new Node(() => {}, () => {}));
      let node = this.head;
      while(node.next !== null) {
        if(node.next) {
          node.cbFn(node.next.cbFn);
          node = node.next;
        }
      }
   }
 }
 
 // usage
 var middleware = new Middleware();
 middleware.use(function(next) {
  console.log('called 1');
   var self = this; 
   setTimeout(function() {
     middleware.hook1 = true;
      next();
   }, 10);
 });
 
 middleware.use(function(next) {
   var self = this;
   console.log('called 2');
   setTimeout(function() {
     middleware.hook2 = true;
     next();
   }.bind(middleware), 10);
 });

 middleware.use(function(next) {
  var self = this;
  console.log('called 3');
  setTimeout(function() {
    self.hook2 = true;
    next();
  }, 10);
});
 
 var start = new Date();
 middleware.go(function() {
   console.log(middleware.hook1); // true
   console.log(middleware.hook2); // true
   console.log(new Date() - start); // around 20
 });

 