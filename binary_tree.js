class BinaryTree {
	constructor() {
		this.root = null;
	}
	searchForInsert(currentLocationNode, data) {
		if (data < currentLocationNode.data) {
			if (currentLocationNode.left === null) {
				currentLocationNode.left = new TreeNode(data);
				return;
			} else {
				return this.searchForInsert(currentLocationNode.left, data);
			}
		} else if (data > currentLocationNode.data) {
			if (currentLocationNode.right === null) {
				currentLocationNode.right = new TreeNode(data);
				return;
			} else {
				return this.searchForInsert(currentLocationNode.right, data);
			}
		} else {
			return null;
		}
	}
    remove(node)

	tranverseToMin() {
		let node = this.root;
		while (node.left !== null) {
			node = node.left;
		}
		console.log(node);
	}
	tranverseToMax() {
		let node = this.root;
		while (node.right !== null) {
			node = node.right;
		}
		console.log(node);
	}
	findNode(value) {
		let node = this.root;
		while (node !== null || value != node.data) {
			if (value > node.data) {
				console.log('Going Right');
				node = node.right;
			} else if (value < node.data) {
				console.log('Going Left');
				node = node.left;
			}
		}
		if (node === null) {
			console.log('Doesnt Exist');
			return;
		}
		console.log(node);
	}

	add(data) {
		// Get the current root value
		const node = this.root;
		// If there isnt any sets the node with a current root value
		if (node === null) {
			this.root = new TreeNode(data);
			return;
		} else {
			return this.searchForInsert(node, data);
		}
	}
}

class TreeNode {
	constructor(value, left = null, right = null) {
		this.data = value;
		this.left = left;
		this.right = right;
	}
}

const binarySearchTree = new BinaryTree();
binarySearchTree.add(10);
binarySearchTree.add(21);
binarySearchTree.add(30);
binarySearchTree.add(5);
binarySearchTree.add(7);
binarySearchTree.add(11);
binarySearchTree.add(22);
binarySearchTree.add(3);

console.log(binarySearchTree);
binarySearchTree.tranverseToMin();
binarySearchTree.tranverseToMax();
// binarySearchTree.findNode(100);
