const isSymmetric = (root) => {
    if (!root) return true
    
    return helper(root.left, root.right)
}

const helper = (left, right) => {
    if ((!left && right) || (left && !right) || (left && right && left.val !== right.val)) return false

    if (left && right) return helper(left.left, right.right) && helper(left.right, right.left)
    return true
}