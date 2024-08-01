import SimpleDecisionTree, { Sample } from './weatherPrediction';

type Weather = "sunny" | "rainy" | "cloudy";

interface WeatherSample extends Sample {
    label: Weather;
    features: {
        temperature: string; // "hot", "mild", "cold"
        humidity: string;    // "high", "normal"
        wind: string;        // "strong", "weak"
    };
}

const trainingSet: WeatherSample[] = [
    { label: "sunny", features: { temperature: "hot", humidity: "high", wind: "weak" } },
    { label: "sunny", features: { temperature: "hot", humidity: "high", wind: "strong" } },
    { label: "rainy", features: { temperature: "mild", humidity: "high", wind: "weak" } },
    { label: "cloudy", features: { temperature: "cold", humidity: "normal", wind: "weak" } },
    { label: "cloudy", features: { temperature: "mild", humidity: "normal", wind: "strong" } },
    // Add more training data as needed
];

const featureValuePairs: [string, any][] = [
    ["temperature", "hot"],
    ["temperature", "mild"],
    ["temperature", "cold"],
    ["humidity", "high"],
    ["humidity", "normal"],
    ["wind", "strong"],
    ["wind", "weak"]
];

const dataset = {
    trainingSet,
    featureValuePairs: () => featureValuePairs
};

const decisionTree = new SimpleDecisionTree();
const tree = decisionTree.train(dataset, 3);

// Prediction Game
function predictWeather(features: { temperature: string; humidity: string; wind: string }): string | undefined {
    return tree.classify(features);
}

// Example usage
const userFeatures = {
    temperature: "hot",
    humidity: "high",
    wind: "weak"
};

console.log(`The weather prediction is: ${predictWeather(userFeatures)}`);
