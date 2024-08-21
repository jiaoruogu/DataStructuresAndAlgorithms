

interface Strategy {
  execute: () => void
}

class FirstStrategy implements Strategy {
  execute() {
      console.log("FirstStrategy");
  }
}

class SecondStrategy implements Strategy {
  execute() {
      console.log("SecondStrategy");
  }
}

class Thrid implements Strategy {
  execute(): void {
      
  }
}

class Context {
  strategy: Strategy

  constructor(strategy: Strategy) {
    this.strategy = strategy
  }

  execute() {
    this.strategy.execute()
  }
}

let a = new Context(new FirstStrategy())

a.execute()