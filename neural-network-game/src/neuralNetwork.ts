export class NeuralNetwork {
    private weights: number[];

    constructor(private inputSize: number, private outputSize: number) {
        this.weights = new Array(inputSize * outputSize).fill(0).map(() => Math.random());
    }

    public predict(inputs: number[]): number[] {
        const outputs: number[] = new Array(this.outputSize).fill(0);
        for (let i = 0; i < this.outputSize; i++) {
            for (let j = 0; j < this.inputSize; j++) {
                outputs[i] += inputs[j] * this.weights[i * this.inputSize + j];
            }
        }
        return outputs.map(this.activationFunction);
    }

    private activationFunction(x: number): number {
        return x > 0 ? 1 : 0; // Simple step function
    }
}
