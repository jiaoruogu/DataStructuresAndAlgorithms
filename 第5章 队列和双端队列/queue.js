/**
 * push
 * shift
 * peek
 * isEmpty
 * size
 */

export class Queue {
  #count;
  #lowestCount;
  #items;

  constructor() {
    this.#count = 0;
    this.#lowestCount = 0;
    this.#items = {};
  }

  push(element) {
    this.#items[this.#count] = element;
    this.#count++;
  }

  shift() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.#items[this.#lowestCount];
    delete this.#items[this.#lowestCount];
    this.#lowestCount++;
    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.#items[this.#lowestCount];
  }

  size() {
    return this.#count - this.#lowestCount;
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.#items = {};
    this.#count = 0;
    this.#lowestCount = 0;
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }

    let objectString = `${this.#items[this.#lowestCount]}`;
    for (let i = this.#lowestCount + 1; i < this.#count; i++) {
      objectString = `${objectString}, ${this.#items[i]}`;
    }
    return objectString;
  }
}


