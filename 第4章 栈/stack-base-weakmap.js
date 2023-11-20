

const items =  new WeakMap()


class Stack {
  constructor() {
    items.set(this, [])
  }

  push(element) {
    const s = items.get(this)
    s.push(element)
  }

  // ...
}