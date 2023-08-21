class Queue {
    constructor() {
        this.items = []
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        return this.items.shift()
    }
    isEmpty() {
        return this.items.length === 0
    }
    peek() {
        if (!this.isEmpty()) {
            return this.items[0]
        }
        return null
    }

    size() {
        return this.items.length;
    }

    print() {
        return this.items
    }
}

let my = new Queue();
console.log(my.isEmpty());
my.enqueue(10)
my.enqueue(20)
my.enqueue(30)
my.enqueue(40)
my.dequeue();
console.log(my.peek())
console.log(my.print());