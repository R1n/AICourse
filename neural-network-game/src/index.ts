import { Game } from './game';
import * as readline from 'readline';

const game = new Game();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askForInputs = () => {
    rl.question('Enter first input (0 or 1) or type "exit" to quit: ', (input1) => {
        if (input1.toLowerCase() === 'exit') {
            rl.close();
            return;
        }
        rl.question('Enter second input (0 or 1) or type "exit" to quit: ', (input2) => {
            if (input2.toLowerCase() === 'exit') {
                rl.close();
                return;
            }
            const numInput1 = parseInt(input1);
            const numInput2 = parseInt(input2);
            if (!isNaN(numInput1) && !isNaN(numInput2)) {
                game.run([numInput1, numInput2]);
                askForInputs(); // Ask again after showing the prediction
            } else {
                console.log('Invalid input, please enter numbers only.');
                askForInputs(); // Ask again if input is invalid
            }
        });
    });
};

console.log('Neural Network Game');
askForInputs();
