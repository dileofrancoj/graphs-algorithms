# Grafos

Segun wikipedia, un grafo es un conjunto de objetos llamados vértices o nodos unidos por enlaces llamados aristas o arcos, que permiten representar relaciones binarias entre elementos de un conjunto.

Claro que matemáticamente tienen una definición un poco más rigurosa.

Def: <b>G = (Vg, Ag, f)</b>

Vg y Ag son conjuntos finitos y, particularmente Vg es un conjunto no vacío.
<b>Vg son los vertices o nodos de G</b>

<b>Ag son las aristas de G</b>

<b>f: Es una regla de asignación que relaciona los nodos con las aristas.</b>

### Aclaración 1

Este README no pretende ser un documento formal respecto de la teoría de grafos. Si quieren un curso teórico de grafos, pueden mandarme un mensaje para poder realizar uno.

### Aclaración 2

En este repo, se hará hincapié en árboles. Más precisamente en árboles binarios (dirigidos y no dirigidos).

# Árboles

En teoría de grafos, un árbol es un grafo en el que cualquier par de vértices están conectados por exactamente un camino.

## Árbol binario

Un árbol es llamado k-ario si cada nodo tiene, como máximo, k hijos. Un caso particularmente importante es el de un árbol 2-ario, al cual se denomina árbol binario.

Un árbol binario tiene la siguiente estructura:

                    A
                /       \
               B         C
             /   \     /   \
            F    G    E     D

Particularmente, este es un árbol binario completo y balanceado.

Este también es un árbol binario:

                    A
                /       \
               B         C
             /   \     /
            F    G    E

Recordemos que para que sea binario, como máximo cada nodo puede tener 2 hijos. En este caso, C tiene un solo hijo (Em que es una hoja del árbol) dando lugar a un árbol binario incompleto.

# Algoritmos

- Traverse a binary tree (DFT): Recorrer mediante depth first traversal
- Traverse a binary tree (BFT): Recorrer mediante Breadth First Traversal
- Tree Includes
- Has path
- Tree SUM
- Tree min value
- Connected components
- Shortest path
- Island count
