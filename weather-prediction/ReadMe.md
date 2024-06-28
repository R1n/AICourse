# Weather Prediction

Welcome to the Weather Prediction! 

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

We'll create a Bayesian Network to predict rain based on cloudiness and humidity.

## Getting Started

### Prerequisites

Before you begin, ensure you have Node.js and npm installed on your machine. You can follow the instructions in the link below to download and install Node.js and npm:

- [Downloading and Installing Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

### Installation

1. Clone the repository or download the source code to your local machine.

2. Navigate to the project directory:

   ```bash
   cd weather-prediction
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
weather-prediction/
│
├── src/
│   ├── index.ts
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
