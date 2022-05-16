/*
    Este algoritmo tiene por objetivo recorrer solo una vez todos los nodos del grafo
    Para este caso, usaremos una Pila para recorrer la estructura
*/

function depthFirstTraversal(graph, source) {
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

const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

depthFirstTraversal(graph, "a");
