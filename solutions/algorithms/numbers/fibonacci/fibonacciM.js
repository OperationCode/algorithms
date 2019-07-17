
/**
 * Return a fibonacci sequence as an array.
 *
 * @param n
 * @return {number[]}
 */
export default function fibonacciM(n) {
var mem = new Array(n);
return fibonacciMem(n, mem);
}

function fibonacciMem(n,mem){
 if (n ===0) return 0;
     if (n ===1) return 1;
     if (mem[n]) return mem[n];
     mem[n] =  fibonacciMem(n-1,mem) + fibonacciMem(n-2,mem);	 
     return mem[n];
}


