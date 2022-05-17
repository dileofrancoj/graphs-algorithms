const { numericGraph } = require("../models/graphs");

function connectedComponents(graph) {
  const visited = new Set();
  let count = 0;
  for (let node in graph) {
    if (exploreSubgraph(graph, node, visited)) {
      count += 1;
    }
  }

  return count;
}

function exploreSubgraph(graph, current, visited) {
  if (visited.has(String(current))) return false;
  visited.add(String(current));
  for (let neighbor of graph[current]) {
    exploreSubgraph(graph, neighbor, visited);
  }
  return true;
}

console.log(connectedComponents(numericGraph));
