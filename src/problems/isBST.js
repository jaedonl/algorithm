class Node {
    constructor(data) {        
        this.left = null
        this.right = null
        this.data = data
    }
}

const isBST = (root, left, right) => {
    if (root == null) return true

    // if root is smaller than left OR bigger than right, it's not a BST.
    if (left !== null && root.data <= left.data) return false
    if (right !== null && root.data >= right.data) return false
    
    // run isBST() recursively
    return isBST(root.left, left, root) && isBST(root.right, root, right)
}

const newNode = (data) => {
    let node = new Node(data)
    return (node)
}

let root = newNode(5);
root.left = newNode(3);
root.right = newNode(6);
root.left.left = newNode(2);
root.left.right = newNode(4);

if (isBST(root,null,null))
    console.log('BST')
else
    console.log('Not BST')


