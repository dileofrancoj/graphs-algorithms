const { buildGraphFromEdges } = require("../helpers");
/* 
nodeA represents the starts node and nodeB represents de finally node 
For this approach i'll use the BFS base algorithm
*/

function shortestPath(edges, nodeA, nodeB) {
  if (!nodeA || !nodeB) throw new Error("Nodes are mandatory");
  const graph = buildGraphFromEdges(edges);
  const visited = new Set([nodeA]); // cycle prevention starts with nodeA
  const queue = [[nodeA, 0]]; // Matrix contain the pair node,distance
  while (queue.length > 0) {
    const [node, distance] = queue.shift();
    if (node === nodeB) return distance;
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        queue.push([neighbor, distance + 1]);
        visited.add(neighbor);
      }
    }
  }
  return -1;
}

const currentEdges = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];

console.log(shortestPath(currentEdges, "w", "z"));
