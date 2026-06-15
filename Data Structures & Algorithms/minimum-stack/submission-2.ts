class MinStack {
    stack: number[];
    min: number;
    constructor() {
        this.stack = [];
        this.min = Infinity;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        if (this.stack.length === 0){
            this.stack.push(0);
            this.min = val;
        } else {
        this.stack.push(val - this.min);
        this.min = Math.min(this.min, val)
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        const diff = this.stack.pop();
        if (diff < 0)( this.min -= diff)
    }

    /**
     * @return {number}
     */
    top(): number {
        const top = this.stack[this.stack.length - 1];
        return top > 0 ? top + this.min : this.min;
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.min;
    }
}
