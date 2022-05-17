const isSameTree = (p, q) => {
    if ((!p && q) || (p && !q) || (p && q && p.val !== q.val)) return false

    if (p && q) return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
    return true
}