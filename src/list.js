class List {
  constructor() {
    this.next = null;
  }

  append(key, value, position = this) {
    if (position[key]) {
      position[key] = value;
    } else if (position.next === null) {
      position.next = { [key]: value, next: null };
    } else {
      this.append(key, value, position.next);
    }
  }

  size(num = 0, position = this) {
    if (position.next === null) {
      return num;
    }
    return this.size(num + 1, position.next);
  }

  get(key, position = this) {
    if (position[key]) {
      return position[key];
    }
    if (position.next === null) {
      return null;
    }
    return this.get(key, position.next);
  }

  pop(position = this) {
    if (position.next.next === null) {
      const lastNode = { ...position.next };
      position.next = null;
      return lastNode;
    }
    return this.pop(position.next);
  }

  contains(key, position = this) {
    if (position[key]) {
      return true;
    }
    if (position.next === null) {
      return false;
    }
    return this.contains(key, position.next);
  }

  find(value, position = this, count = 0) {
    if (value === position.value) {
      return count;
    }
    if (position.next === null) {
      return false;
    }
    return this.find(value, position.next, count + 1);
  }

  keys(position = this, keys = []) {
    if (position.next === null) {
      return keys;
    }
    const k = Object.keys(position.next);
    k.pop();
    keys = keys.concat(k);
    return this.keys(position.next, keys);
  }

  values(position = this, values = []) {
    if (position.next === null) {
      return values;
    }
    const v = Object.values(position.next);
    v.pop();
    values = values.concat(v);
    return this.values(position.next, values);
  }

  entries(position = this, entries = []) {
    if (position.next === null) {
      return entries;
    }
    const v = Object.values(position.next);
    v.pop();
    const k = Object.keys(position.next);
    k.pop();
    const entry = [k[0], v[0]];
    entries.push(entry);
    return this.entries(position.next, entries);
  }

  remove(key, position = this) {
    if (position.next[key]) {
      delete position[key];
      position.next = position.next.next;
      return true;
    }
    if (position.next === null) {
      return false;
    }
    return this.remove(key, position.next);
  }
}

export { List };
