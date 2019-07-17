import DoublyLinkedList from './DoublyLinkedList';


export function merge(dll1,dll2,comp){


    var res = new DoublyLinkedList();


    var node1 = dll1.head;
    var node2 = dll2.head;

    while (node1 && node2){
	if ( comp(node1,node2)){
	    res.append(node1);
	    node1 = node1.next;
	    continue;
	}
	if (!comp(node1,node2)){
	    res.append(node2);
	    node2 = node2.next;
	}
    }
    while(node1) {  
	res.append(node1);
	node1 = node1.next;
    }


    while(node2) {  
	res.append(node2);
	node2 = node2.next;
    }

return res;

}
