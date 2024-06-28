# Car Race Game

Welcome to the Car Race Game! This project demonstrates the use of propositional logic and AI in a fun and interactive car racing game developed using TypeScript.

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

Propositional logic deals with statements that can be either true or false. Logical connectives are used to combine these statements into more complex expressions. In this project, you'll learn about logical connectives such as Not (¬), And (∧), Or (∨), Implication (→), and Biconditional (↔) through a car race game simulation.

## Getting Started

### Prerequisites

Before you begin, ensure you have Node.js and npm installed on your machine. You can follow the instructions in the link below to download and install Node.js and npm:

- [Downloading and Installing Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

### Installation

1. Clone the repository or download the source code to your local machine.

2. Navigate to the project directory:

   ```bash
   cd car-race-game
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
car-race-game/
│
├── src/
│   ├── index.ts
│   └── logic.ts
├── package.json
└── tsconfig.json
```

- **src/**: Contains the TypeScript source files.
    - **index.ts**: The main entry point of the application.
    - **logic.ts**: Contains the logic and rules for the car race game.
- **package.json**: Manages the project's dependencies and scripts.
- **tsconfig.json**: Configures the TypeScript compiler options.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
