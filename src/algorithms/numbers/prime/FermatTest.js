/**
 * @param {number} number
 * @return {boolean}
 */


export function fermatTest(n){
    if (n === 1 ) return false;
    if (n === 2) return true;
    var a = Math.ceil(Math.sqrt(n));
    var b = a*a - n;
    var squareRootb = Math.sqrt(b);
    while(a <= (n+1)/2  && b !== squareRootb * squareRootb ){
	a++;
	b = a*a - n;
	squareRootb = Math.floor( Math.sqrt(b));
    }
 //   console.log([n, squareRootb, a, (n+1)/2]);
    if (a === (n+1)/2) return true;
    return false;
}
