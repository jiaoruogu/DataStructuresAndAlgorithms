// class FirstStrategy {
//   execute() {
//     console.log("FirstStrategy");
//   }
// }

// class SecondStrategy {
//   execute() {
//     console.log("SecondStrategy");
//   }
// }


// class Context {
//   constructor(strategy) {
//     this.strategy = strategy
//   }

//   execute() {
//     this.strategy.execute()
//   }
// }

// let context = new Context(new FirstStrategy())
// context.execute()
// context = new Context(new SecondStrategy())

// context.execute()


let obj = {
  a() {
    console.log('a');
  },
  b() {
    console.log('b');
  },
  c() {
    console.log('c');
  }
}

function context(type) {
  return obj[type] && obj[type]()
}

context('a')
context('b')
context('c')

