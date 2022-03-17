class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }

    push(value) { // o(1)
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode // set new node as tail's next
            newNode.prev = this.tail // set now node's prev to current tail node
            this.tail = newNode // set tail to new node.
        }
        this.length++

        return this
    }

    pop() { // o(1)
        if (this.length === 0) return undefined
        
        let temp = this.tail // copy tail value to temp
        
        if (this.length === 1) { // if there is no more after we pop above
            this.head = null
            this.tail = null
        } else {
            this.tail = this.tail.prev // set tail's prev as tail
            this.tail.next = null // disconnect new tail's next object (which was an old tail)
            temp.prev = null // disconnect original tail's prev
        }        
        this.length--
        
        return temp // return popped node
    }

    unshift(value) { // o(1)
        const newNode = new Node(value)
    
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
        this.length++

        return this
    }

    shift() { // o(1)
        if (this.length === 0) return undefined
        
        let temp = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = this.head.next
            this.head.prev = null
            temp.next = null
        }
        this.length--

        return temp
    }

    get(index) { // o(n)
        if (index < 0 || index >= this.length) return undefined

        let temp = this.head

        if (index < this.length/2) {
            for (let i = 0; i < index; i++) {
                temp = temp.next            
            }
        } else {
            temp = this.tail
            for (let i = this.length-1; i < index; i--) {
                temp = temp.prev                
            }
        }
            
        return temp
    }

    set(index, value) { // o(n)
        let temp = this.get(index)

        if (temp) {
            temp.value = value
            return true
        }
        return false
    }

    insert(index, value) { // o(n)
        if (index === 0) return this.unshift(value)
        if (index === this.length) return this.push(value)
        if (index < 0 || index > this.length) return false

        const newNode = new Node(value)
        const before = this.get(index - 1)
        const after = before.next

        before.next = newNode
        newNode.prev = before
        newNode.next = after
        after.prev = newNode
        
        this.length++

        return true
    }

    remove(index) { // o(n)
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()
        if (index < 0 || index > this.length) return undefined

        const temp = this.get(index)        

        temp.prev.next = temp.next
        temp.next.prev = temp.prev
        
        temp.prev = null
        temp.next = null

        this.length--

        return temp
    }
}