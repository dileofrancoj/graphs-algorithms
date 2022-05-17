/* 
Este caso, considera que el árbol tenga un ciclo entre algun par de nodos. 
Se establece una lógica de visitado para no caer en un loop infinito+
*/

const { buildGraphFromEdges } = require("./helpers");

const undirectedGraph = buildGraphFromEdges(edges);

function hasPathWithLoop(graph, source, destination, visited = new Set()) {
  if (source === destination) return true;
  if (visited.has(source)) return false;

  visited.add(source);

  for (let neighbor of graph[source]) {
    if (hasPathWithLoop(graph, neighbor, destination, visited)) {
      return true;
    }
  }
  return false;
}

const result = hasPathWithLoop(undirectedGraph, "i", "z");
console.log("hasPathWithLoop: ", result);
