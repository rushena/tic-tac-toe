class TicTacToe {
    constructor() {
        this.currentSymbol = 'x';
        this.grid = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.finished = false;
        this.step = 0;
        this.winner = null;
    }

    getCurrentPlayerSymbol() {
        return this.currentSymbol;
    }

    checkGrid() {
        const [a, b, c] = this.grid;

        if (a[0] === a[1] && a[0] === a[2] && a[0] !== null) {
            this.winner = a[0];
            this.finished = true;
            return this;
        }

        if (b[0] === b[1] && b[0] === b[2] && b[0] !== null) {
            this.winner = b[0];
            this.finished = true;
            return this;
        }

        if (c[0] === c[1] && c[0] === c[2] && c[0] !== null) {
            this.winner = c[0];
            this.finished = true;
            return this;
        }

        if (a[0] === b[1] && a[0] === c[2] && a[0] !== null) {
            this.winner = a[0];
            this.finished = true;
            return this;
        }

        if (a[2] === b[1] && a[2] === c[0] && a[2] !== null) {
            this.winner = a[2];
            this.finished = true;
            return this;
        }

        if (a[1] === b[1] && a[1] === c[1] && a[1] !== null) {
            this.winner = a[1];
            this.finished = true;
            return this;
        }

        if (a[0] === b[0] && a[0] === c[0] && a[0] !== null) {
            this.winner = a[0];
            this.finished = true;
            return this;
        }

        if (a[2] === b[2] && a[2] === c[2] && a[2] !== null) {
            this.winner = a[2];
            this.finished = true;
            return this;
        }
    }

    nextTurn(rowIndex, columnIndex) {
        if (!!this.winner || this.finished) return this;

        if (!!this.grid[rowIndex][columnIndex]) return this;

        if (this.step === 8) {
            this.finished = true;
        }

        const currentSymbol = this.getCurrentPlayerSymbol();

        this.grid[rowIndex][columnIndex] = currentSymbol;
        this.checkGrid();
        this.step += 1;

        this.currentSymbol = currentSymbol == 'x' ? 'o' : 'x';

        return this;
    }

    isFinished() {
        return this.finished;
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
        return this.step === 9;
    }

    isDraw() {
        return this.step === 9 && this.winner === null;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.grid[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
