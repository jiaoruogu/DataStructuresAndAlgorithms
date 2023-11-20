/**
 *
 * method:
 *
 * push
 * pop
 * peek
 * isEmpty
 * clear
 * size
 *
 */

class StackBaseArray {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    this.items.length = 0;
  }

  size() {
    return this.items.length;
  }
}



const stack = new StackBaseObject();

console.log(stack.isEmpty());

stack.push(5);
stack.push(8);

const a = stack.pop()

console.log(stack.peek());
