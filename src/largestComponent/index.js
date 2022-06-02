const { notConnectedGraph } = require("../models/graphs");

function largestPath(graph) {
  let longest = 0;
  const visited = new Set();
  for (let node in graph) {
    const size = exploreSize(graph, node, visited);
    if (size > longest) longest = size;
  }
  return longest;
}

function exploreSize(graph, node, visited) {
  if (visited.has(node)) return 0;
  let size = 1;
  visited.add(node);

  for (let neighbor of graph[node]) {
    size += exploreSize(graph, neighbor, visited);
  }

  return size;
}

console.log(largestPath(notConnectedGraph));
