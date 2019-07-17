
import Heap from './Heap';


export function mergeNSortedArrays( arrs){

    // we get n sorted arrays in arrs.

    var n = arrs.length;

    // we make a heap of size n

    var h = new Heap(n+2, (a,b) => { return a.v < b.v});

    for (var i =0; i < n; i++){
	h.insertKey({x: i,y: 0,v: arrs[i][0]});
    }

    var res = [];
    
    var top = h.extractMin();

    while(!h.isEmpty() || top ){
	res.push(top.v);
	if (arrs[top.x] && arrs[top.x].length > top.y + 1  ){
	    h.insertKey({  x: top.x,
			   y:top.y + 1, 
			   v: arrs[top.x][top.y +1 ]});
	}
	top = h.extractMin();
	}

    return res;
    
}
