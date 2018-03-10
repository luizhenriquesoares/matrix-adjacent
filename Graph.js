const np = require('numjs')

/**
 * 
 * Class Graph Abstract
 * 
 * this respreset base class with all methods
 * 
 * @param {*} numVertices 
 * @param {*} directed 
 */
const Graph = (numVertices, directed = false) => {

  this.numVertices = numVertices
  this.directed = directed

  this.addEdge = (v1, v2, weight) => {
  }
  this.getAdjacentVertices = (v) => {
  }
  this.display = () => {
  }

  return {
    addEdge: this.addEdge,
    getAdjacentVertices: this.getAdjacentVertices,
    display: this.display
  }
}

/**
 * 
 * @param {*} Graph 
 */
const AdjacentMatrixGraph = (Graph) => {
  const numVertices = Graph
  this.matrix = np.zeros(numVertices, numVertices)

  this.addEdge = (v1, v2, weight = 1) => {
    if (v1 >= this.numVertices || v2 >= this.numVertices || v1 < 0 || v2 < 0)
      return throws(`Vertices estão fora dos limites: ${v1, v2}`)

    if (weight < 1)
      return throws('Uma aresta não pode ter peso < 1')

    this.matrix[v1][v2] = weight
    if (this.directed == false) {
      this.matrix[v1][v2] = weight
    }
  }

  this.GetAdjacentVertices = (v) => {
    if (V < 0 || v >= this.numVertices)
      return throws(`Não pode acessar o node ${v}`)

    const adjacentVertices = []

    this.numVertices.map((numVertice, i) => {
      if (this.matrix[v][i] > 0) {
        adjacentVertices.push(i)
      }

      return adjacentVertices
    })

    this.display = () => {
      this.numVertices.map((res, i) => {
        this.getAdjacentVertices[i].map((vertice, j) => {
          console.log(`${i} ----> ${v}`)
        })
      })
    }
  }
}

const g = AdjacentMatrixGraph(Graph())
console.log(g)
// Add Arestas
// g.addEdge(0, 1)
// g.addEdge(0, 2)

// console.log('Matrix de Adjacência')
// console.log(g.matrix)

// console.log('========================================')
// console.log('Visualizando conexões (Arestas): ')
// for (let i = 0; i < 3; i++) {
//   console.log(`Node ${i} conectado a ${g.getAdjacentVertices[i]}`)
// }

// console.log('=============================================')

// console.log('Visualizando grafo:')
// g.display()
