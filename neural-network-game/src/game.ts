import { NeuralNetwork } from './neuralNetwork';

export class Game {
    public nn: NeuralNetwork;
    private trainingData: { inputs: number[], outputs: number[] }[];

    constructor() {
        this.nn = new NeuralNetwork(2, 1);
        this.trainingData = [
            { inputs: [0, 0], outputs: [0] },
            { inputs: [0, 1], outputs: [1] },
            { inputs: [1, 0], outputs: [1] },
            { inputs: [1, 1], outputs: [0] }
        ];
    }

    public run(inputs: number[]) {
        const prediction = this.nn.predict(inputs);
        console.log(`Input: ${inputs}, Predicted: ${prediction}`);
    }
}

