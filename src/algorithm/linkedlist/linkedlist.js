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
    pop() { // O(n) start from head to find the previous node of tail node.
        // we need pre, temp.
        if (!this.head) return undefined            

        let temp = this.head
        let pre = this.head

        while (!temp.next) {
            pre = temp
            temp = temp.next

            if (!temp.next) {
                this.tail = pre
            }
        }

        this.length--
        return this
    }
}

let myLinkedList = new LinkedList(7)
myLinkedList.push(4)
