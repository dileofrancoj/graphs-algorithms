/*
    Este algoritmo es aplicado a grafos dirigidos.
    ¿Por qué? Los grafos que vamos a ver, por lo general, están formados por una componente conexa. 
    Al ser grafos no dirigidos y al ser una componente conexa, desde cualquier nodo se puede llegar hasta cualquier otro.
    Por eso, para este problema, debemos asegurarnos que el grafo sea dirigido.
    Time complexity: O(e) siendo e la cantidad de aristas.
*/

const { directedGraph: baseGraph, edges } = require("./models/graphs");
const { buildGraphFromEdges } = require("./helpers");

const undirectedGraph = buildGraphFromEdges(edges);

function recursiveHasPath(graph, source, destination) {
  if (source === destination) return true; // base case
  for (let neighbor of graph[source]) {
    if (recursiveHasPath(graph, neighbor, destination) === true) {
      return true;
    }
  }
  return false;
}

function hasPath(graph, source, destination) {
  const queue = [source];
  while (queue.length > 0) {
    const current = queue.shift();

    if (current === destination) return true;

    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
  return false;
}

/* 
Este caso, considera que el árbol tenga un ciclo entre algun par de nodos. 
Se establece una lógica de visitado para no caer en un loop infinito+
 */
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

const result = recursiveHasPath(baseGraph, "f", "k");
console.log("recursive hasPath?: ", result);

const result2 = hasPath(baseGraph, "f", "k");
console.log("hasPath?: ", result2);

const result3 = hasPathWithLoop(undirectedGraph, "i", "z");
console.log("hasPathWithLoop: ", result3);
