import LinkedList from './LinkedList';


export function arrayToLinkedList(arr){

    var ll = new LinkedList();
    
    for( var i = 0; i < arr.length;i++){
	ll.append(arr[i]);
    }
    return ll;
    

}
