Filename: complexCode.js

/*
  Title: Complex Code with Advanced Algorithms
  Description: This code implements various complex algorithms like sorting, searching, graph traversal, and mathematical operations.
  Author: AI Assistant
*/

// Example: Seive of Eratosthenes Algorithm - Find all prime numbers up to a given number
function findPrimes(n) {
  let primes = [];
  let sieve = Array(n + 1).fill(true);

  for (let p = 2; p * p <= n; p++) {
    if (sieve[p]) {
      for (let i = p * p; i <= n; i += p) {
        sieve[i] = false;
      }
    }
  }

  for (let p = 2; p <= n; p++) {
    if (sieve[p]) {
      primes.push(p);
    }
  }

  return primes;
}

// Example: Binary Search Algorithm
function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

// Example: QuickSort Algorithm
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[Math.floor(arr.length / 2)];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === Math.floor(arr.length / 2)) {
      continue;
    }

    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example: Fibonacci Series - Recursive Approach
function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// Example: Depth First Search (DFS) using Stack (Graph Traversal)
class Graph {
  constructor() {
    this.vertices = [];
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    this.vertices.push(vertex);
    this.adjacencyList.set(vertex, []);
  }

  addEdge(source, destination) {
    this.adjacencyList.get(source).push(destination);
    this.adjacencyList.get(destination).push(source);
  }

  dfs(startVertex) {
    let visited = {};
    let stack = [];

    stack.push(startVertex);

    while (stack.length) {
      let currentVertex = stack.pop();

      if (!visited[currentVertex]) {
        visited[currentVertex] = true;
        let neighbors = this.adjacencyList.get(currentVertex);

        for (let neighbor of neighbors) {
          stack.push(neighbor);
        }
      }
    }

    return Object.keys(visited);
  }
}

// Example: Matrix Multiplication
function matrixMultiplication(matrixA, matrixB) {
  let rowsA = matrixA.length;
  let colsA = matrixA[0].length;
  let colsB = matrixB[0].length;

  let result = Array(rowsA)
    .fill()
    .map(() => Array(colsB).fill(0));

  for (let i = 0; i < rowsA; i++) {
    for (let j = 0; j < colsB; j++) {
      for (let k = 0; k < colsA; k++) {
        result[i][j] += matrixA[i][k] * matrixB[k][j];
      }
    }
  }

  return result;
}

// Example: Advanced Math Operations
function calculateAdvancedMathOperations(a, b, c) {
  let result = Math.pow(a, b) + Math.sqrt(c);

  return result;
}

// Example: Complex Recursive Function
function complexRecursiveFunction(n) {
  if (n <= 0) {
    return 1;
  }

  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += complexRecursiveFunction(i);
  }

  return sum;
}

// Example: Usage of Complex Code Functions
let primeNumbers = findPrimes(100);
console.log("Prime Numbers:", primeNumbers);

let sortedArray = [2, 5, 7, 1, 3, 4, 9, 6, 8];
console.log("Binary Search:", binarySearch(sortedArray, 9));

let quickSortedArray = quickSort(sortedArray);
console.log("Quick Sort:", quickSortedArray);

let fibonacciSeries = fibonacciRecursive(10);
console.log("Fibonacci Series:", fibonacciSeries);

let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("B", "C");
console.log("Graph Traversal (DFS):", graph.dfs("A"));

let matrixA = [
  [1, 2, 3],
  [4, 5, 6],
];
let matrixB = [
  [7, 8],
  [9, 10],
  [11, 12],
];
let matrixProduct = matrixMultiplication(matrixA, matrixB);
console.log("Matrix Multiplication:", matrixProduct);

let mathResult = calculateAdvancedMathOperations(2, 3, 16);
console.log("Advanced Math Operations:", mathResult);

let recursiveResult = complexRecursiveFunction(5);
console.log("Complex Recursive Function:", recursiveResult);

// ... (more advanced and complex code)

// End of code