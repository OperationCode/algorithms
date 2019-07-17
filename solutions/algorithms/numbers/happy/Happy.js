

export function  digitSquareSum(n) {
    var sum = 0, d;
    var m = n;
    while(m > 9){
        d = m % 10;
        sum += d * d; 
        m = Math.floor(m/ 10);
    }
    sum += m * m;
    return sum;
}


export function  isHappy( n) {
    var seen = new Object(); 
    var curr = digitSquareSum(n);
    seen[n] = true;
    while(!seen[curr]){
	seen[curr] = true;
	curr =  digitSquareSum(curr);
    }
    return curr === 1;
}



export function  isHappyConstantSpace( n) {
    var slow = digitSquareSum(n) , fast = digitSquareSum(digitSquareSum(n)) ;
    
    while( slow != fast){
        slow = digitSquareSum(slow);
        fast = digitSquareSum(digitSquareSum(fast));
    } 
  return (slow == 1);
}
