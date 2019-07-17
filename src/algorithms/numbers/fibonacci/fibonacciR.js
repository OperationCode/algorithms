/**
 * Return a fibonacci sequence as an array.
 *
 * @param n
 * @return {number[]}
 */
export default function fibonacciR(n) {
   if (n ===0) return 0;
     if (n ===1) return 1;
    
     return  fibonacciR(n-1) + fibonacciR(n-2);	
}
