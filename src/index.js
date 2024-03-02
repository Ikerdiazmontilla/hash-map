import './style.css';
import { List } from './list';

class HashMap {
  constructor(arrLength = 16) {
    this.array = Array.from({ length: arrLength }, () => null);
    this.length = arrLength;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i += 1) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.length;
    }

    return hashCode;
  }

  set(key, value) {
    const hashCode = this.hash(key);
    if (this.array[hashCode] === null) {
      const list = new List();
      list.append(key, value);
      this.array[hashCode] = list;
    } else {
      const list = this.array[hashCode];
      list.append(key, value);
    }
  }

  get(key) {
    const hashCode = this.hash(key);
    if (this.array[hashCode] === null) {
      return null;
    }
    const list = this.array[hashCode];
    return list.get(key);
  }

  has(key) {
    const hashCode = this.hash(key);
    if (this.array[hashCode] === null) {
      return false;
    }
    const list = this.array[hashCode];
    return list.contains(key);
  }

  remove(key) {
    const hashCode = this.hash(key);
    if (this.array[hashCode] === null) {
      return false;
    }
    const list = this.array[hashCode];
    return list.remove(key);
  }

  size() {
    let total = 0;
    this.array.forEach(slot => {
      if (slot !== null) {
        total += slot.size();
      }
    });
    return total;
  }

  clear() {
    this.array.fill(null);
  }

  keys() {
    let keys = [];
    this.array.forEach(slot => {
      if (slot !== null) {
        keys = keys.concat(slot.keys());
      }
    });
    return keys;
  }

  values() {
    let values = [];
    this.array.forEach(slot => {
      if (slot !== null) {
        values = values.concat(slot.values());
      }
    });
    return values;
  }

  entries() {
    let entries = [];
    this.array.forEach(slot => {
      if (slot !== null) {
        entries = entries.concat(slot.entries());
      }
    });
    return entries;
  }
}

const map = new HashMap();
map.set('iker', 'diaz');
// map.set('juan', 'caballo');
// map.set('caden', 'witmaier');

// console.log(map);
