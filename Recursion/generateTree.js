const arr = [
  { id: 1, parentid: 0 },
  { id: 2, parentid: 1 },
  { id: 3, parentid: 1 },
  { id: 4, parentid: 2 },
  { id: 5, parentid: 0 },
  { id: 6, parentid: 0 },
  { id: 7, parentid: 4 },
];

const findNode = (id, tree) => {
  for (const node of tree) {
    if (node.id === id) {
      return node;
    }
    if (node.children) {
      return findNode(id, node.children);
    }
  }
  return null;
};

const generateTree = (data) => {
  const tree = [];
  for (const node of data) {
    if (node.parentid === 0) {
      tree.push({ ...node, children: [] });
    } else {
      const foundNode = findNode(node.parentid, tree);
      if (foundNode) {
        foundNode.children.push({ ...node, children: [] });
      }
    }
  }
  return tree;
};

console.log(generateTree(arr));
