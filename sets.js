// Like an array, just it doesnt have any duplicates
class MySet {
	constructor() {
		this.collection = [];
	}
	has(el) {
		return this.collection.indexOf(el) !== -1;
	}
	add(el) {
		if (!this.has(el)) {
			this.collection.push(el);
			console.log('Successfully Added');
		} else {
			console.log('Element Already exists');
		}
	}
	remove(element) {
		if (this.has(element)) {
			this.collection = this.collection.filter((el) => element !== el);
			console.log('Successfully removed element');
		} else {
			console.log('Element doesnt exist in the Set');
		}
	}
	getCollection() {
		return this.collection;
	}

	getUnion(set2 = new MySet()) {
		const union = [...this.collection];
		set2.getCollection().forEach((element) => {
			if (!union.includes(element)) union.push(element);
		});

		console.log(union);
	}
	getIntersection(set2 = new MySet()) {
		const arg = [...this.collection, ...set2.collection];
		const intersection = [];
		for (let i = 0; i < arg.length; i++) {
			for (let j = 0; j < i; j++) {
				if (arg[j] === arg[i]) intersection.push(arg[i]);
			}
		}

		console.log(intersection);
	}
}

const set1 = new MySet();
const set2 = new MySet();

set1.add(1);
set1.add(2);
set1.add(2);
set1.add(4);
set2.add(2);
set2.add(3);
set2.add(5);
console.log(set1.getCollection());
console.log(set2.getCollection());
console.log(set1.getUnion(set2));
console.log(set1.getIntersection(set2));
