const graph = {
  A: ['B', 'C'],
  B: ['A', 'D'],
  D: ['B', 'E', 'F'],
  F: ['D', 'E'],
  E: ['C', 'D', 'F'],
  C: ['A', 'E'],
}

const dfs = (vertex, visited, result) => {
  
  if(!vertex)
    return;
  
  visited[vertex] = true;
  result.push(vertex);

  const adjcents = graph[vertex];

  for(let ad of adjcents) {
    if(!visited[ad]) {
      dfs(ad, visited, result);
    }
  }
  return result;
};

console.log(dfs('A', {}, []));

     
 