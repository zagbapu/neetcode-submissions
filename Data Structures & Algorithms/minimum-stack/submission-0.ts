class MinStack {
    array: number[];
    min: number;
    constructor() {
        this.array = [];
        this.min = Infinity;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.array.push(val);
        this.min = Math.min(this.min, val)
        console.log(`Array: ${this.array}, Min: ${this.min}`)
    }

    /**
     * @return {void}
     */
    pop(): void {
        const val = this.array.pop();
        this.min = Math.min(...this.array)
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.array[this.array.length - 1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.min;
    }
}
