import LinkedList from './LinkedList';


export function reverse(ll){

    var res = new LinkedList();
    
    var node = ll.head;
    
    while(node){
	res.prepend(node.value);
	node = node.next;
    }

    return res;

}

export function reverseInPlace(ll){

    if (!ll) return ll;
    var node1 = ll.head;

    if (!node1 || !node1.next) return ll;

    // zero and one element lists are already reversed
    
    var node2 = node1.next;

    while(node2.next){

	var tmp = node2.next;
	node2.next = node1;
	node1 = node2;
	node2 = tmp;
    }
    
    node2.next = node1;
    ll.head.next = null;
    ll.tail = ll.head;
    ll.head = node2;
    return ll;
}
