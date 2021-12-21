// The difference for between a queue and a stack is that the queue is FIRST IN FIRST OUT (FIFO)

class Queue {
	constructor() {
		this.collection = [];
		this.size = 0;
	}
	add(el) {
		this.collection.push(el);
		this.size++;
	}
	remove() {
		this.collection.shift();
		this.size--;
	}
	front() {
		console.log(this.collection[0]);
	}
	size() {
		console.log(this.size);
	}
}

const que = new Queue();
que.add(12);
que.add(22);
que.add(32);
console.log(que);
que.remove();
console.log(que);
que.add(32);

class PrQueue {
	constructor() {
		this.collection = [];
		this.size = 0;
	}
	add(el) {
		if (this.collection.length === 0) {
			this.collection.push(el);
			this.size++;
		}
		for (let i = 0; i < this.collection.length; i++) {
			if (el.priority >= this.collection[i].priority) {
				this.collection.splice(i, 0, el);
				this.size++;
				return;
			}
		}
		this.collection.push(el);
		this.size++;
	}
	removeFirst() {
		this.collection.shift();
	}
	removeLast() {
		this.collection.pop();
	}

	sortByPriority() {
		let priorityObject = {};
		for (let i = 0; i < this.collection.length; i++) {
			priorityObject[this.collection[i].priority] = this.collection.filter(
				(el) => el.priority === this.collection[i].priority
			);
		}

		console.log(priorityObject);
	}
}
const prQue = new PrQueue();

prQue.add({ value: 'Alice', priority: 2 });
prQue.add({ value: 'Bob', priority: 2 });
prQue.add({ value: 'Stefany', priority: 5 });
prQue.add({ value: 'Griby', priority: 1 });
prQue.add({ value: 'Ivan', priority: 4 });
console.log(prQue);
prQue.sortByPriority();
