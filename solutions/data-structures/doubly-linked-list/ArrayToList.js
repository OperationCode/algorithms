import DoublyLinkedList from './DoublyLinkedList';




export function arrayToList(arr){

    var dll = new DoublyLinkedList();
    
    for( var i = 0; i < arr.length;i++){
	dll.append(arr[i]);

    }
    return dll;
    

}
