/*
    Este algoritmo tiene por objetivo recorrer solo una vez todos los nodos del grafo
    Para este caso, usaremos una Pila para recorrer la estructura
*/

function dft(graph, source) {
  const stack = [source];
  while (stack.length > 0) {
    const current = stack.pop(); // retorno el ùltimo elemento de la pila
    console.log(`Current node of graph: ${current}`);
    // Recorro todos los Nodos enlazados al elemento actual
    for (let neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }
  return stack;
}

function dftRecursive(graph, source) {
  console.log(`Current node of graph (recursively): ${source}`);
  for (let neighbor of graph[source]) {
    dftRecursive(graph, neighbor);
  }
}

const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

dft(graph, "a");
dftRecursive(graph,"a")
