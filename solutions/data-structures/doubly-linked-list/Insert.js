import DoublyLinkedList from './DoublyLinkedList';
import DoublyLinkedListNode from './DoublyLinkedListNode';

export function insert(dll, el,comp){

    var node = dll.head;
    
    var newNode = new DoublyLinkedListNode(el);

    while(node && comp(node, newNode)){
	node = node.next;
    }

// either node is the node after where newNode should be, or is null
// If it is null, we put newNode on the end of the list, append will fix up the tail, so we do not need to set it.

    if (!node){
	dll.append(el);
	return dll;
    }
    if (node.previous){
	// if there is an earlier node, have it point at the current node.
	node.previous.next = newNode;
    } else
    {
	// the inserted node is the first, so set head to be newNode.
	dll.head = newNode;
    }
    // fix the forward and backward links
    newNode.next = node;
    newNode.previous = node.previous
    node.previous = newNode;
    return dll;
    
}
