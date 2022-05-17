/*
    Este algoritmo es aplicado a grafos dirigidos.
    ¿Por qué? Los grafos que vamos a ver, por lo general, están formados por una componente conexa. 
    Al ser grafos no dirigidos y al ser una componente conexa, desde cualquier nodo se puede llegar hasta cualquier otro.
    Por eso, para este problema, debemos asegurarnos que el grafo sea dirigido.
    Time complexity: O(e) siendo e la cantidad de aristas.
*/

const { directedGraph: baseGraph, edges } = require("./models/graphs");

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


const result = recursiveHasPath(baseGraph, "f", "k");
console.log("recursive hasPath?: ", result);

const result2 = hasPath(baseGraph, "f", "k");
console.log("hasPath?: ", result2);

