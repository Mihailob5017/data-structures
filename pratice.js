const validParentisis = (string = '') => {
	// Define a stack
	let stack = [];
	// Loop through each element in a given string
	for (let i = 0; i < string.length; i++) {
		let char = stack[stack.length - 1];
		// If an element is (  [  { push it onto the stack
		console.log(string);
		if (string[i] === '(' || string[i] === '[' || string[i] === '{') {
			console.log(
				`Iteration ${i} location [first if] ------------------------------------------------------------`
			);
			console.log(`String[i]: ${string[i]}  Char: ${char}`);
			console.log(`Pushing ${string[i]} in stack`);
			stack.push(string[i]);
			console.log(stack);
		}
		// Pop the opening bracket off the stack
		// If there is a coresponding closing bracket in the string
		else if (
			(char === '(' && string[i] === ')') ||
			(char === '[' && string[i] === ']') ||
			(char === '{' && string[i] === '}')
		) {
			console.log(
				`Iteration ${i} location [second if] ------------------------------------------------------------`
			);
			console.log(`String[i]: ${string[i]}   Char: ${char}`);
			console.log(`Poping ${char} from stack`);
			stack.pop();
			console.log(stack);
		} else return false;
	}

	return stack.length ? false : true;
};

console.log(validParentisis('([({})]())'));

// Better way to do it
var isValid = function (s) {
	let stack = [];
	let openingBrackets = '([{';
	let closingBrackets = ')]}';
	let bracketPair = {
		'}': '{',
		']': '[',
		')': '(',
	};

	for (let currChar of s) {
		if (openingBrackets.includes(currChar)) stack.push(currChar);
		else if (closingBrackets.includes(currChar)) {
			//                Meaning that there was no element beforehand and its beggining with a closing bracket
			if (stack.length === 0) return false;
			//                 Bracketpair of [')'] is '(' and if the last element added in the stack is equal pop it so that we lose a pair
			if (stack[stack.length - 1] === bracketPair[currChar]) stack.pop();
			else return false;
		}

		return stack.length === 0;
	}
};
console.log('---------------------------------------');

Array.prototype.printAll = function () {
	for (let i of this) console.log(i);
};
[1, 2, 3, 4, 5, 6].printAll();
// console.log(arr.printAll());
