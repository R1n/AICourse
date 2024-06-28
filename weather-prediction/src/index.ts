import { infer, INode, ICptWithParents, ICptWithoutParents, INetwork, ICombinations } from 'bayesjs';

// Define the structure of the nodes
const cloudiness: INode = {
    id: 'Cloudiness',
    states: ['Clear', 'Cloudy'],
    parents: [],
    cpt: {
        Clear: 0.6,
        Cloudy: 0.4,
    } as ICptWithoutParents,
};

const humidity: INode = {
    id: 'Humidity',
    states: ['Low', 'High'],
    parents: [],
    cpt: {
        Low: 0.7,
        High: 0.3,
    } as ICptWithoutParents,
};

const rain: INode = {
    id: 'Rain',
    states: ['No', 'Yes'],
    parents: ['Cloudiness', 'Humidity'],
    cpt: [
        { when: { Cloudiness: 'Clear', Humidity: 'Low' }, then: { No: 0.9, Yes: 0.1 } },
        { when: { Cloudiness: 'Clear', Humidity: 'High' }, then: { No: 0.8, Yes: 0.2 } },
        { when: { Cloudiness: 'Cloudy', Humidity: 'Low' }, then: { No: 0.5, Yes: 0.5 } },
        { when: { Cloudiness: 'Cloudy', Humidity: 'High' }, then: { No: 0.2, Yes: 0.8 } },
    ] as ICptWithParents,
};

// Create the network
const network: INetwork = {
    Cloudiness: cloudiness,
    Humidity: humidity,
    Rain: rain,
};

// Function to make a prediction
const predictRain = (cloudinessState: string, humidityState: string): string => {
    const evidence: ICombinations = { Cloudiness: cloudinessState, Humidity: humidityState};

    //Calculate probabilities for both Yes and No answers
    const probRainYes = infer(network, {Rain: 'Yes'}, evidence);
    const probRainNo = infer(network, {Rain: 'No'}, evidence);

    const predictedState = probRainYes > probRainNo ? 'Yes' : 'No';

    console.log(`Probability of Rain given the evidence - Yes: ${probRainYes}, No: ${probRainNo}`);

    return predictedState;
};

// Example usage
console.log(predictRain('Clear', 'Low')); // Example output: 'No'
console.log(predictRain('Cloudy', 'High')); // Example output: 'Yes'
