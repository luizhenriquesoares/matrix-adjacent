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
  this.matrix = np.zeros(this.numVertices, this.numVertices)

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

  this.addEdge()
}

AdjacentMatrixGraph(Graph())
