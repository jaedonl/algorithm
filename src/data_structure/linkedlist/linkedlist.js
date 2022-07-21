class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }

    // add node at the end
    push(value) { // O(1) give next to tail node.
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++

        return this
    }

    // remove node at the end
    pop() { // O(n) start from head to find the previous node of tail node.
        // we need pre, temp.
        if (!this.head) return undefined            

        let temp = this.head
        let pre = this.head

        while (temp.next) {
            pre = temp
            temp = temp.next
        }

        this.tail = pre // if no more NEXT for temp, set pre as tail
        this.tail.next = null // and set tail.next as null
        this.length--

        if (this.length === 0) {
            this.head = null
            this.tail = null
        }   

        return temp
    }

    // add node at the beginning
    unshift(value) { 
        const newNode = new Node(value)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head  // new node's Next is pointing current Head.
            this.head = newNode // now, new node is a head of the linked list.
        }

        this.length++
        return this
    }

    // remove node at the beginning
    shift() {
        if (!this.head) return undefined

        let temp = this.head
        this.head = this.head.next 
        temp.next = null

        this.length--

        if (this.length === 0) {
            this.tail = null
        }
    }

    // get the index node from linked list
    get(index) { // O(n)
        if (index < 0 || index >= this.length) return undefined

        let temp = this.head

        for (let i = 0; i < index; i++) {
            temp = temp.next
        }
        return temp
    }   

    // change the index node value
    set(index, value) {
        let temp = this.get(index) // GET function we created above

        if (temp) {
            temp.value = value
            return true
        }
        return false
    }

    // insert value to index
    insert(index, value) {
        if (index === 0) return this.unshift(value)
        if (index === this.length) return this.push(value)
        if (index < 0 || index > this.length) return false
 
        const newNode = new Node(value)
        const temp = this.get(index-1)

        newNode.next = temp.next
        temp.next = newNode
        this.length++

        return true
    }

    // remove the index node
    remove(index) {
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()
        if (index < 0 || index > this.length) return undefined

        const before = this.get(index-1)
        const temp = before.next

        before.next = temp.next
        temp.next = null

        this.length--

        return temp
    }

    // reverse the linked list
    reverse() { // O(n) we change the head and tail, and change every node's pointer direction to opposite 
        let temp = this.head 
        this.head = this.tail
        this.tail = temp

        let next = temp.next
        let prev = null

        for (let i = 0; i < this.length; i++) {
            next = temp.next 
            temp.next = prev 
            prev = temp 
            temp = next 
        }
                
        return this
    }
}

let myLinkedList = new LinkedList(7)
myLinkedList.push(4)
