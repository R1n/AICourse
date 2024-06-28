import * as readline from 'readline';

import {Symbol, And, Implication, Biconditional} from './logic';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Define symbols for race conditions
const fastCar = new Symbol('fastCar');
const goodWeather = new Symbol('goodWeather');
const skilledDriver = new Symbol('skilledDriver');
const winsRace = new Symbol('winsRace');

// Define the knowledge base
const knowledgeBase = [
    new Implication(fastCar, winsRace), // If the car is fast, then it wins the race
    new Implication(new And(goodWeather, skilledDriver), fastCar), // If the weather is good and the driver is skilled, then the car is fast
    new Biconditional(winsRace, new And(fastCar, new And(goodWeather, skilledDriver))) // The car wins the race if and only if the car is fast, the weather is good, and the driver is skilled
];

// Evaluate the knowledge base
const evaluateKnowledgeBase = (kb: any[], model: any) =>
    kb.every((expression) => expression.evaluate(model));

const askQuestion = (question: string): Promise<string> => {
    return new Promise((resolve) => rl.question(question, resolve));
};

const startGame = async () => {
    console.log("Welcome to the Car Race Logic Game!");

    const fastCarInput = await askQuestion("Is the car fast? (yes/no): ");
    const goodWeatherInput = await askQuestion("Is the weather good? (yes/no): ");
    const skilledDriverInput = await askQuestion("Is the driver skilled? (yes/no): ");

    const model = {
        fastCar: fastCarInput.toLowerCase() === 'yes',
        goodWeather: goodWeatherInput.toLowerCase() === 'yes',
        skilledDriver: skilledDriverInput.toLowerCase() === 'yes',
        winsRace: true,
    };

    const result = evaluateKnowledgeBase(knowledgeBase, model);

    console.log("Can the car win the race based on the given conditions?", result);

    rl.close();
};

startGame();
