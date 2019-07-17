import DoublyLinkedList from './DoublyLinkedList';




export function reverseDLL(dll){

    var currentNode = dll.tail;
    if (!currentNode) return dll;
    // the empty list is its own reverse.

    var res = new DoublyLinkedList();
    
    while(currentNode.previous){
	res.append(currentNode.value);
	currentNode = currentNode.previous;
    }
// append the last value.  
    res.append(currentNode.value);
    return res;
}


export function reverseInPlace(dll){

    var currentNode = dll.head;
    if (!currentNode) return dll;
    // the empty list is its own reverse.

    var nextNode  = currentNode.next;

    while( currentNode && nextNode){
	var thirdNode = nextNode.next;
	currentNode.prev = nextNode;
	nextNode.next = currentNode;
	currentNode = nextNode;
	nextNode = thirdNode;
    }
    currentNode.prev = null;
    dll.head.next = null;

    var temp = dll.head;
    dll.head = dll.tail;
    dll.tail = temp;
    return dll;
}
