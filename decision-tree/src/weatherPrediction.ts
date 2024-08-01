export interface Sample {
    label: string;
    features: Record<string, any>;
}

interface NodeExample {
    classify(instance: Record<string, any>): string | undefined;
}

class LeafNode implements NodeExample {
    label: string | undefined;

    constructor(label: string | undefined) {
        this.label = label;
    }

    classify(): string | undefined {
        return this.label;
    }
}

class InternalNode implements NodeExample {
    featureName: string;
    featureValue: any;
    treeIfFalse: NodeExample;
    treeIfTrue: NodeExample;

    constructor(featureName: string, featureValue: any, treeIfFalse: NodeExample, treeIfTrue: NodeExample) {
        this.featureName = featureName;
        this.featureValue = featureValue;
        this.treeIfFalse = treeIfFalse;
        this.treeIfTrue = treeIfTrue;
    }

    private condition(instance: Record<string, any>): boolean {
        return instance[this.featureName] === this.featureValue;
    }

    classify(instance: Record<string, any>): string | undefined {
        if (this.condition(instance)) {
            return this.treeIfTrue.classify(instance);
        } else {
            return this.treeIfFalse.classify(instance);
        }
    }
}

export default class SimpleDecisionTree {
    private static majorityVoteCount(samples: Sample[]): number {
        const histogram: Record<string, number> = {};
        samples.forEach(sample => {
            histogram[sample.label] = (histogram[sample.label] || 0) + 1;
        });
        return Math.max(...Object.values(histogram));
    }

    private internalTrain(
        labeledSamples: Sample[],
        remainingFeatureValuePairs: [string, any][],
        remainingDepth: number
    ): NodeExample {
        const histogram: Record<string, number> = {};
        labeledSamples.forEach(sample => {
            histogram[sample.label] = (histogram[sample.label] || 0) + 1;
        });

        if (Object.keys(histogram).length === 0) {
            return new LeafNode(undefined);
        } else if (Object.keys(histogram).length === 1 || remainingFeatureValuePairs.length === 0 || remainingDepth === 0) {
            const targetLabel = Object.keys(histogram).reduce((a, b) => (histogram[a] > histogram[b] ? a : b));
            return new LeafNode(targetLabel);
        }

        let bestScore = 0;
        let bestPair: [string, any] | undefined;
        let bestNo: Sample[] = [];
        let bestYes: Sample[] = [];

        for (const [fName, fValue] of remainingFeatureValuePairs) {
            const noList: Sample[] = [];
            const yesList: Sample[] = [];

            for (const sample of labeledSamples) {
                const v = sample.features[fName];
                if (v !== fValue) {
                    noList.push(sample);
                } else {
                    yesList.push(sample);
                }
            }

            const score = SimpleDecisionTree.majorityVoteCount(noList) + SimpleDecisionTree.majorityVoteCount(yesList);
            if (score > bestScore) {
                bestScore = score;
                bestPair = [fName, fValue];
                bestNo = noList;
                bestYes = yesList;
            }
        }

        if(!bestPair) {
            const targetLabel = Object.keys(histogram)
                .reduce((a, b) => histogram[a] > histogram[b] ? a : b);
            return new LeafNode(targetLabel);
        }

        const nextFeatures = remainingFeatureValuePairs
            .filter(([kv]) => kv !== bestPair?.[0] || kv !== bestPair?.[1])

        const leftNode = this.internalTrain(bestNo, nextFeatures, remainingDepth - 1);
        const rightNode = this.internalTrain(bestYes, nextFeatures, remainingDepth - 1);

        return new InternalNode(bestPair[0], bestPair[1], leftNode, rightNode);
    }

    train(dataset: { trainingSet: Sample[]; featureValuePairs(): [string, any][] }, maxDepth: number): NodeExample {
        return this.internalTrain(dataset.trainingSet, dataset.featureValuePairs(), maxDepth);
    }
}
