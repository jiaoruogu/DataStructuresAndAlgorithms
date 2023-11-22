import { Stack } from "./stack-base-object.js";

function decimalToBinary(decNumber) {
  const stack = new Stack();
  let number = decNumber;
  let rem;
  let binaryString = "";

  while (number > 0) {
    rem = number % 2;
    stack.push(rem);
    number = Math.floor(number / 2);
  }

  while (!stack.isEmpty()) {
    binaryString += stack.pop().toString();
  }

  return binaryString;
}

function baseConverter(decNumber, base) {
  let stack = new Stack();
  const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let number = decNumber;
  let rem;
  let baseString = '';

  if (!(base >= 2 && base <= 36)) {
    return "";
  }

  while (number > 0) {
    rem = number % base;
    stack.push(rem);
    number = Math.floor(number / base);
  }

  while (!stack.isEmpty()) {
    baseString += `${digits[stack.pop()]}`;
  }

  return baseString;
}




console.log(baseConverter(100345, 8));