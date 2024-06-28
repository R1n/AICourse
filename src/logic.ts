class Symbol {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    evaluate(model: Record<string, boolean>): boolean {
        return model[this.name];
    }
}

class Not {
    private operand: any;
    constructor(operand: any) {
        this.operand = operand;
    }

    evaluate(model: Record<string, boolean>): boolean {
        return !this.operand.evaluate(model);
    }
}

class And {
    private operands: (Symbol | And)[];
    constructor(...operands: (Symbol | And)[]) {
        this.operands = operands;
    }

    evaluate(model: Record<string, boolean>): boolean {
        return this.operands.every(operand => operand.evaluate(model));
    }
}

class Or {
    private operands: any[];
    constructor(...operands: any[]) {
        this.operands = operands;
    }

    evaluate(model: Record<string, boolean>): boolean {
        return this.operands.some(operand => operand.evaluate(model));
    }
}

class Implication {
    private left: any;
    private right: any;
    constructor(left: any, right: any) {
        this.left = left;
        this.right = right;
    }

    evaluate(model: Record<string, boolean>): boolean {
        return !this.left.evaluate(model) || this.right.evaluate(model);
    }
}

class Biconditional {
    private left: any;
    private right: any;
    constructor(left: any, right: any) {
        this.left = left;
        this.right = right;
    }

    evaluate(model: Record<string, boolean>): boolean {
        return this.left.evaluate(model) === this.right.evaluate(model);
    }
}

export { Symbol, Not, And, Or, Implication, Biconditional };
