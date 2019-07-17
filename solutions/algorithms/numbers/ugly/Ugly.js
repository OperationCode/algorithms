export function  isUgly( num) {
    if (num === 0) return false;
    while(num%2 === 0) num/=2;
    while(num%3 === 0) num/=3;
    while(num%5 === 0) num/=5;
    return num == 1;
}


 export function nthUglyNumber( n) {
    if(n <= 0) return false;
    if(n === 1) return 1;
   var uglies = new Array(n+1);
    uglies[0] = 1; // first ugly is 1
    var last =1;
     const ugly = [2,3,5];
    for(var i  = 1; i <= n ; i ++)
    {
        var next = last *5;
        for(var j = 0; j < uglies.length; j++){
            ugly.forEach(function(k){
                if (uglies[j]*k > last && uglies[j]*k < next){next = uglies[j]*k;};
		});
        }
        uglies[i] = (last = next);
    }
    return uglies[n-1];
}


export function nthUglyNumberLinear( n) {
    if(n <= 0) return false;
    if(n === 1) return 1;
    var uglies = new Array(n);
    uglies[0] = 1; // first ugly is 1
    var p2 =0, p3 = 0, p5 = 0;
    for(var i  = 1; i < n ; i ++)
    {
        uglies[i] = Math.min(uglies[p2]*2,
                        Math.min(uglies[p3]*3,uglies[p5]*5));
        if ( uglies[i]== uglies[p2]*2) p2++;
        if ( uglies[i]== uglies[p3]*3) p3++;
        if ( uglies[i]== uglies[p5]*5) p5++;
    }
    return uglies[n-1];
}




export function superUglyNumber(n, primes) {
    if(n <= 0) return 1;
    var uglies = new Array(n); // initialize to n
     for(var i  = 0; i < n ; i ++)
	 uglies[i] = Number.MAX_SAFE_INTEGER;
    var pl = primes.length;
    var places = new Array(pl);
    for ( var j = 0; j < pl ; j++)
	places[j] = 0;
    
    uglies[0] = 1; // first ugly is 1
    for(var i  = 1; i < n ; i ++)
    {

        for ( var j = 0; j < pl ; j++)
            uglies[i] = Math.min(uglies[i] , uglies[places[j]] * primes[j]);
        for(var  k  = 0; k < pl ; k ++)
            if (uglies[i]  === primes[k] * uglies[places[k]])
                places[k]++;
    }
    return uglies[n-1];
}
