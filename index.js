const LNode = (value = null, nextNode = null) => {
  return { value, nextNode };
};

const LinkedList = () => {
  let node;

  const head = () => node;

  const append = (value) => {
    if (node == undefined) {
      node = LNode(value);
      return;
    }

    let lastNode = node;
    while (lastNode.nextNode != null) {
      lastNode = lastNode.nextNode;
    }
    lastNode.nextNode = LNode(value);
  };

  const prepend = (value) => {
    if (node == undefined) {
      node = LNode(value);
      return;
    }

    node = LNode(value, node);
  };

  const size = () => {
    if (node == undefined) return 0;

    let lastNode = node;
    let count = 1;
    while (lastNode.nextNode != null) {
      lastNode = lastNode.nextNode;
      count++;
    }

    return count;
  };

  const tail = () => {
    if (node == undefined) return node;

    let lastNode = node;

    while (lastNode.nextNode != null) {
      lastNode = lastNode.nextNode;
    }

    return lastNode;
  };

  const at = (index) => {
    if (index > size() - 1 || index < 0) {
      throw new Error("Index out of bounds of list");
    }

    if (node == undefined) return node;

    let lastNode = node;
    let count = 0;
    while (count != index) {
      lastNode = lastNode.nextNode;
      count++;
    }

    return lastNode;
  };

  const pop = () => {
    if (size() == 0) {
      throw new Error("Cannot pop an empty list");
    } else if (size() == 1) {
      node = undefined;
      return;
    }

    at(size() - 2).nextNode = null;
  };

  const contains = (value) => {
    if (node == undefined) return false;
    if (node.value == value) return true;

    let lastNode = node;

    while (lastNode.nextNode != null) {
      lastNode = lastNode.nextNode;
      if (lastNode.value == value) return true;
    }

    return false;
  };

  const find = (value) => {
    if (node == undefined) return null;

    let lastNode = node;
    let count = 0;
    if (node.value == value) return count;

    while (lastNode.nextNode != null) {
      lastNode = lastNode.nextNode;
      count++;
      if (lastNode.value == value) return count;
    }

    return null;
  };

  const toString = () => {
    let string = "";
    if (node == undefined) return "Undefined";

    string += `( ${node.value} )`;

    let lastNode = node;

    while (lastNode.nextNode != null) {
      lastNode = lastNode.nextNode;
      string += ` -> ( ${lastNode.value} )`;
    }

    lastNode = lastNode.nextNode;
    string += ` -> null`;

    return string;
  };

  const insertAt = (value = null, index) => {
    if (index == undefined) {
      throw new Error("insertAt requires an index parameter.");
    }
    if (index == 0) {
      prepend(value);
      return;
    }

    if (index == size()) {
      append(value);
      return;
    }

    let newNode = LNode(value, at(index));

    at(index - 1).nextNode = newNode;
  };

  const removeAt = (index) => {
    if (index == undefined) {
      throw new Error("removeAt requires an index parameter.");
    }

    if (index == size() - 1) {
      pop();
      return;
    }

    at(index - 1).nextNode = at(index + 1);
  };

  return {
    removeAt,
    insertAt,
    toString,
    find,
    contains,
    pop,
    at,
    tail,
    size,
    head,
    append,
    prepend,
  };
};
