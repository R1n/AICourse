class SudokuSolver {
    private board: number[][];
    private size: number;
    private boxSize: number;

    constructor(board: number[][]) {
        this.board = board;
        this.size = board.length;
        this.boxSize = Math.sqrt(this.size);
    }

    // Check if placing 'num' at board[row][col] is valid
    private isValid(row: number, col: number, num: number): boolean {
        for (let x = 0; x < this.size; x++) {
            if (this.board[row][x] === num || this.board[x][col] === num) {
                return false;
            }
        }

        const startRow = row - (row % this.boxSize);
        const startCol = col - (col % this.boxSize);

        for (let i = 0; i < this.boxSize; i++) {
            for (let j = 0; j < this.boxSize; j++) {
                if (this.board[i + startRow][j + startCol] === num) {
                    return false;
                }
            }
        }
        return true;
    }

    // Find the best empty spot to fill next
    private getUnassignedLocation(): [number, number] | null {
        let minCount = this.size + 1;
        let row = -1;
        let col = -1;

        for (let r = 0; r < this.size; r++) {
            for (let c = 0; c < this.size; c++) {
                if (this.board[r][c] === 0) {
                    let count = 0;
                    for (let num = 1; num <= this.size; num++) {
                        if (this.isValid(r, c, num)) {
                            count++;
                        }
                    }
                    if (count < minCount) {
                        minCount = count;
                        row = r;
                        col = c;
                    }
                }
            }
        }
        return row === -1 || col === -1 ? null : [row, col];
    }

    // Get the numbers that fit best in the spot
    private getLeastConstrainingValues(row: number, col: number): number[] {
        const validNumbers: number[] = [];
        for (let num = 1; num <= this.size; num++) {
            if (this.isValid(row, col, num)) {
                validNumbers.push(num);
            }
        }
        return validNumbers.sort((a, b) => {
            const aConstraints = this.countConstraints(row, col, a);
            const bConstraints = this.countConstraints(row, col, b);
            return aConstraints - bConstraints;
        });
    }

    // Count how many options will be left if 'num' is placed at board[row][col]
    private countConstraints(row: number, col: number, num: number): number {
        let constraints = 0;
        for (let x = 0; x < this.size; x++) {
            if (this.board[row][x] === 0 && this.isValid(row, x, num)) constraints++;
            if (this.board[x][col] === 0 && this.isValid(x, col, num)) constraints++;
        }
        const startRow = row - (row % this.boxSize);
        const startCol = col - (col % this.boxSize);
        for (let i = 0; i < this.boxSize; i++) {
            for (let j = 0; j < this.boxSize; j++) {
                if (this.board[i + startRow][j + startCol] === 0 && this.isValid(i + startRow, j + startCol, num)) {
                    constraints++;
                }
            }
        }
        return constraints;
    }

    // Main function to solve the Sudoku using backtracking
    private solveSudoku(): boolean {
        const location = this.getUnassignedLocation();
        if (location === null) return true;

        const [row, col] = location;
        const leastConstrainingValues = this.getLeastConstrainingValues(row, col);

        for(const num of leastConstrainingValues) {
            if(this.isValid(row, col, num)){
                this.board[row][col] = num;
                if(this.solveSudoku()) return true;

                this.board[row][col] = 0;
            }
        }

        return false;
    }

    // Start solving the Sudoku
    public solve(): boolean {
        return this.solveSudoku();
    }

    // Print the Sudoku board
    public printBoard(): void {
        for (let r = 0; r < this.size; r++) {
            console.log(this.board[r].join(' '));
        }
    }
}

const board: number[][] = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

const solver = new SudokuSolver(board);
if (solver.solve()) {
    console.log('Sudoku solved successfully:');
    solver.printBoard();
} else {
    console.log('No solution exists.');
}
