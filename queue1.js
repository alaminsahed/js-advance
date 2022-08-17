class Queue {
    constructor() {
        this.items = {};
        this.rear = 0;
        this.front = 0;
    }

    enqueue(element) {
        this.items[this.rear] = element;
        this.rear++;
    }

    dequeue() {
        const item = this.items[this.front];
        delete this.items[this.front]
        this.front++
        return item;
    }

    isSize() {
        return this.rear - this.front;
    }

    isEmpty() {
        return this.rear - this.front === 0;
    }

    peek() {
        return this.items[this.front]
    }

    print() {
        return this.items;
    }

}

let queue = new Queue();

console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.dequeue();
console.log(queue.isSize());
console.log(queue.print())
