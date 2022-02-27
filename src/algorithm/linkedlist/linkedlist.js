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

    }
}

let myLinkedList = new LinkedList(7)
myLinkedList.push(4)
 