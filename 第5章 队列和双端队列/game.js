const { Queue } = require('./queue')


function hotPotato(elementList, num) {
  const queue = new Queue()
  const elimitatedList = []

  for (let i = 0; i < elementList.length; i++) {
    queue.push(elementList[i])
  }

  while(queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.push(queue.shift())
    }
    elimitatedList.push(queue.shift())
  }

  return {
    eliminated: elimitatedList,
    winner: queue.shift()
  }
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']; 
const result = hotPotato(names, 7);

result.eliminated.forEach(name => { 
  console.log(`${name}在击鼓传花游戏中被淘汰。`); 
 }); 
 console.log(`胜利者： ${result.winner}`);