/*
    Este algoritmo tiene por objetivo recorrer solo una vez todos los nodos del grafo implementando una estructura tipo queue
*/

const { graph: baseGraph } = require("./models/graphs");

function bft(graph, source) {
  const queue = [source];
  while (queue.length > 0) {
    const current = queue.shift(); // agarro el primer elemento de la cola
    console.log(`Current node of graph: ${current}`);
    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
  return;
}

function recursiveBft(graph, source) {
  console.log(`Current node of graph (recursively): ${source}`);
  for (let neighbor of graph[source]) {
    recursiveBft(graph, neighbor);
  }
}

bft(baseGraph, "a");
console.log("-----------------------------");
recursiveBft(baseGraph, "a");
