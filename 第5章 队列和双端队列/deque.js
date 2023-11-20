/**
 * unshift
 * push
 * shift
 * pop
 *
 * peekFront
 * peekBack
 * isEmpty
 * size
 */

class Deque {
  constructor() {
    this.items = {};
    this.lowestCount = 0;
    this.count = 0;
  }

  unshift(element) {
    this.lowestCount--;
    this.items[this.lowestCount] = element;
  }

  shift() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  size() {
    return this.count - this.lowestCount;
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  toString() {
    let objectString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objectString = `${objectString}, ${this.items[i]}`;
    }
    return objectString;
  }
}

module.exports = {
  Deque,
};

// const deque = new Deque();
// console.log(deque.isEmpty()); // 输出 true
// deque.push('John');
// deque.push('Jack');
// console.log(deque.toString()); // John, Jack
// deque.push('Camila');
// console.log(deque.toString()); // John, Jack, Camila
// console.log(deque.size()); // 输出 3
// console.log(deque.isEmpty()); // 输出 false
// deque.shift(); // 移除 John
// console.log(deque.toString()); // Jack, Camila
// deque.pop(); // Camila 决定离开
// console.log(deque.toString()); // Jack
// deque.unshift('John'); // John 回来询问一些信息
// console.log(deque.toString()); // John, Jack
