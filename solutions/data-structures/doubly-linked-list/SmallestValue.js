import DoublyLinkedList from './DoublyLinkedList';


export function smallestValue(dll){


   

    var currentNode = dll.head;

    if (currentNode === null) return null;
// if the list is empty we return null;

    var smallestSoFar = currentNode.value;

    while(currentNode.next){
	currentNode = currentNode.next;
	if (currentNode.value < smallestSoFar) 
	    smallestSoFar = currentNode.value;	
	
    }
    return smallestSoFar;
}
