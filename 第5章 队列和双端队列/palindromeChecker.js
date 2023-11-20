const { Deque } = require('./deque')

function palindromeCheckerInitVerson(aString) {
  const bString = aString.split('').reverse().join('')
  return aString === bString
}


function palindromeChecker(aString) {
  if (aString === undefined || aString === null || (aString !== null && aString.length === 0)) {
    return false
  }
  const deque = new Deque()
  const lowerString = aString.toLocaleLowerCase().split(' ').join('')
  let isEqual = true
  let firstChild, lastChild

  for (let i = 0; i < lowerString.length; i++) {
    deque.push(lowerString.charAt(i))    
  }

  while (deque.size() > 1 && isEqual) {
    firstChild = deque.shift()
    lastChild = deque.pop()
    if (firstChild !== lastChild) {
      isEqual = false
    }
  }

  return isEqual
}


console.log('a', palindromeChecker('a')); 
console.log('aa', palindromeChecker('aa')); 
console.log('kayak', palindromeChecker('kayak')); 
console.log('level', palindromeChecker('level')); 
console.log('Was it a car or a cat I saw', palindromeChecker('Was it a car or a cat I saw')); 
console.log('Step on no pets', palindromeChecker('Step on no pets'));
