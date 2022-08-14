class Stack {
    constructor() {
        this.items = []
    }

    push(element) {
        this.items.push(element)
    }
    pop() {
        return this.items.pop()
    }
    peak() {
        return this.items[this.items.length - 1]
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length
    }
}

const stack = new Stack();
stack.push(10)
stack.push(20)
stack.pop()
console.log(stack.items);