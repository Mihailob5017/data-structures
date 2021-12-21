// Last IN First Out type of data
const stack = [1, 2, 3, 4, 5];
stack.push(6);
console.log(stack);
stack.pop();
console.log(stack);

// Create a palindrome
const isPalindrome = (word = '') => {
	let wordArr = word.split('');
	let reverseWord = '';
	for (let i = 0; i < word.length; i++) {
		reverseWord += wordArr[word.length - i - 1];
	}
	if (reverseWord === word)
		console.log(word.toUpperCase() + ' is a palindrome');
	else console.log(word.toUpperCase() + ' is not a palindrome');
};

isPalindrome('alice');
isPalindrome('bob');

// Create your own stack
class Stack {
	constructor() {
		this.count = 0;
		this.storage = {};
	}

	push(value) {
		this.storage[this.count] = value;
		this.count++;
	}
	pop() {
		// Check to see if the arr is empty
		if (this.count === 0) return;
		else {
			delete this.storage[this.count];
			this.count--;
		}
	}
	getElement(key) {
		console.log(this.storage[key]);
	}
}

function getSize() {
	console.log(this.count);
}

const newStack = new Stack();
console.log(newStack);
newStack.push('Alice');
newStack.push('Bob');
newStack.push('Connor');
newStack.push('Dave');
console.log(newStack);
newStack.pop();
newStack.pop();
console.log(newStack.getElement(0));
getSize.call(newStack);
