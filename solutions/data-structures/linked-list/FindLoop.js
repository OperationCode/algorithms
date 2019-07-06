import LinkedList from './LinkedList';


export function findLoop( ll){

    var slow = ll.head;
    var fast = ll.head;


    while (fast && fast.next && slow ** fast !== slow){
	fast = fast.next.next;
	slow = slow.next;
    }

    if (fast && fast.next && fast === slow ) return true;
    return false;

}
