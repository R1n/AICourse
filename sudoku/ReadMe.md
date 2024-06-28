# Car Race Game

Welcome to the Sudoku Game! This project demonstrates the use of optimization logic and AI in a fun and interactive sudoku game developed using TypeScript.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Building the Project](#building-the-project)
    - [Running the Project](#running-the-project)
    - [Development Mode](#development-mode)
- [Project Structure](#project-structure)
- [License](#license)

## Introduction
Here's a Sudoku solver implemented in TypeScript using backtracking search with the Minimum Remaining Values (MRV) heuristic, Degree heuristic, and the Least Constraining Value heuristic to optimize performance.

Comparison of Algorithms:

* Backtracking with Heuristics: This implementation uses the Minimum Remaining Values (MRV) heuristic, Degree heuristic, and Least Constraining Value heuristic. It efficiently reduces the search space and prioritizes the most promising paths, making it highly effective for solving Sudoku puzzles.

* Simulated Annealing: This algorithm introduces randomness and gradually reduces it to find a solution. While it can escape local optima and is useful for larger, more complex problems, it is generally slower for structured problems like Sudoku compared to backtracking with heuristics.

* Genetic Algorithms: These algorithms simulate natural selection by evolving solutions over generations. They are good for exploring a wide solution space and can handle very large or very complex problems. However, they often require many iterations and are less efficient for problems with a specific structure like Sudoku.

* Branch and Bound: This algorithm systematically explores the search space by dividing it into smaller subproblems. It is highly effective for optimization problems with a clear objective function but may not be as efficient as heuristic-based backtracking for Sudoku.

* Dynamic Programming: Useful for problems with overlapping subproblems and optimal substructure. While it excels in problems like shortest paths and sequence alignment, it is not directly applicable to Sudoku due to the lack of overlapping subproblems.

* Linear and Non-Linear Programming: These techniques are suitable for problems that can be expressed with linear or non-linear equations and constraints. While powerful for optimization problems in operations research and economics, they are not naturally suited for the discrete nature of Sudoku puzzles.

## Getting Started

### Prerequisites

Before you begin, ensure you have Node.js and npm installed on your machine. You can follow the instructions in the link below to download and install Node.js and npm:

- [Downloading and Installing Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

### Installation

1. Clone the repository or download the source code to your local machine.

2. Navigate to the project directory:

   ```bash
   cd sudoku
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Install TypeScript globally if you haven't already:

   ```bash
   npm install typescript -g
   ```

### Building the Project

To compile the TypeScript code into JavaScript, run the following command:

```bash
npm run build
```

This will generate the compiled JavaScript files in the `dist` directory as specified in your `tsconfig.json`.

### Running the Project

After building the project, you can start it using Node.js:

```bash
npm start
```

### Development Mode

For development purposes, you can run the project in development mode using `ts-node`. This will allow you to see changes immediately without needing to rebuild manually:

```bash
npm run dev
```

## Project Structure

Here's a brief overview of the project structure:

```
sudoku/
│
├── src/
│   ├── index.ts
│   └── logic.ts
├── package.json
└── tsconfig.json
```

- **src/**: Contains the TypeScript source files.
    - **index.ts**: The main logic and entry point of the application.
- **package.json**: Manages the project's dependencies and scripts.
- **tsconfig.json**: Configures the TypeScript compiler options.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

