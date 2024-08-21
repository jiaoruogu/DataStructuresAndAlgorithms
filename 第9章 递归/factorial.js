function factorialIterative(number) {
  if (number < 0) {
    return undefined;
  }
  let total = 1;
  while (number > 1) {
    total *= number;
    number--;
  }

  return total;
}

function factorial(n) {
  if (n === 1 || n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

const result = factorial(6);
