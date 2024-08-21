import { defaultToString, ValuePair } from "./util.js";




/**
 * set(key, value)
 * remove(key)
 * hasKey(key)
 * get(key)
 * clear()
 * size()
 * isEmpty()
 * keys()
 * values()
 * keyValues()
 * forEach(callbackFn)
 */
export default class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = {}
  }

  hasKey(key) {
    return this.table[this.toStrFn(key)] != null
  }

  set(key, value) {
    if (!this.hasKey(key)) {
      this.table[this.toStrFn(key)] = new ValuePair(key, value)
      return true
    }
    return false
  }

  removeKey(key) {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)]
      return true
    }
    return false
  }

  get(key) {
    if (this.hasKey(key)) {
      return this.table[this.toStrFn(key)]
    }
    return undefined
  }

  keyValues() {
    return Object.values(this.table)
  }

  values() {
    return this.keyValues().map(valuePair => valuePair.value)
  }

  forEach(callbackFn) {
    const valuePairs = this.keyValues()
    for (let i = 0; i < valuePairs.length; i++) {
      const result = callbackFn(valuePairs[i].key, valuePairs[i].value)
      if (result === false) {
        break
      }
    }
  }

  size() {
    return Object.keys(this.table).length
  }

  isEmpty() {
    return this.size() === 0
  }

  clear() {
    this.table = {}
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    const valuePairs = this.keyValues();
    let objString = `${valuePairs[0].toString()}`;
    for (let i = 1; i < valuePairs.length; i++) {
      objString = `${objString},${valuePairs[i].toString()}`;
    }
    return objString;
  }
}


