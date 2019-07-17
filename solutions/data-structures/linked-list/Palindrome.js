import LinkedList from './LinkedList';

import { reverse, reverseInPlace } from "./ReverseInPlace";

export function palindrome(ll){


    // The simplest solution is to reverse the list, and check the reversed an original list are equal.

    var rev = reverse(ll);

    var node2 = rev.head;
    var node1 = ll.head;
    
    while (node1 && node2){

	if (node1.value !== node2.value) 
	    return false;
	node1 = node1.next;
	node2 = node2.next;
    }

 return node1 === node2;
}
export function palindromeInPlace(ll){
    if (!ll) return ll;
    var len = 0;
    var node1 = ll.head;
    while (node1){
	len++;
	node1 = node1.next;
    }
    if (len < 2) return true;

    // Now find the middle point.

    var half = len/2;
    node1 = ll.head; 
    for(var i =0; i < half; i++){
	node1 = node1.next;
    }
    var middle = node1;
    var n = middle;
    var nl = new LinkedList();
    nl.head = middle;
    nl.tail = n;
    var rev = reverseInPlace(nl);
    
    n = rev.head;
    var node2 = rev.head;
    node1 = ll.head;
    i = 0;
    while (i < half && node1 && node2){
	if (node1.value !== node2.value) 
	    return false;
	node1 = node1.next;
	node2 = node2.next;
	i++;
    }


    var mid =  reverseInPlace(rev);
    middle.next = mid;
    ll.tail = mid.tail;

 return true;
}
