export function fermatPrimality(n){
    if (n === 1) return false;
    if (n === 2) return true;
    for(var i = 0; i < 10; i++){
	// check 10 times
	var a = 1 + Math.floor( (n-1) * Math.random()); // a is a number in the range 0..p-1
	var ap = 1;
	for (var j = 0; j < n-1; j++){
	    ap = (ap * a) %  n;
	}
	if (ap !== 1) return false;
	// we know for sure that p is composite
    }
    return true;
    // we have checked k times and each time the test succeeded
}
