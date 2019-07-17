export function nwd( s, p){
    var l = s.length;
    if ( l <= p) return 1; // There is only one way to decode a single digit
    if ( l-1 == p) return 1;
    if ( s[p+1] === '0') return  nwd(s,p+2); 
 //  If the second digit is 0, we can only parse this as a single digit.
    if ( (s[p] == '1' ||
        (  s[p] == '2' && s[p+1] > '0' && s[p+1] <= '6' ) )
        ){   //  if the string is "[1][1-9]..." or"[2][1-6]..."  then we can decode this 
	// using just one digit, or using 2 digits.  There are  nwd(s, p+1) 
	// ways of decoding the rest of the string if we use one digit,
	// and  nwd(s, p+2) ways if we use 2.
	return (  nwd(s, p+1)  + nwd(s, p+2));

    }
    //  The string starts with a 3 or higher (or 27 or higher), so we can only parse this as a single  digit
       return  nwd(s,p+1);
}

export function nwdMem(s,p){
    var mem = new Array(1+ s.length);
    return  nwdM(s,p,mem);
}

export function  nwdM( s,p, mem){
    var l = s.length;
    if ( l <= p ) return 1; // There is only one way to decode a single digit
    if ( l-1 === p ) return 1;
    if (mem[p]){return mem[p];}
    if ( s[p+1] === '0')
    {
	mem[p] = nwdM(s,p+2,mem);  
	return mem[p]; }
 //  If the second digit is 0, we can only parse this as a single digit.
    if ((s[p] == '1' ||
        (  s[p] == '2' && s[p+1] > '0' && s[p+1] <= '6' ) )
        )   //  if the string is "[1][1-9]..." or"[2][1-6]..."  then we can decode this 
	// using just one digit, or using 2 digits.  There are  nwd(s, p+1) 
	// ways of decoding the rest of the string if we use one digit,
	// and  nwd(s, p+2) ways if we use 2.
       {
	   mem[p] =  nwdM(s, p+1,mem)  + nwdM(s, p+2,mem);
	   
           return mem[p];
	}
    //  The string starts with a 3 or higher (or 27 or higher), so we can only parse this as a single  digit
    mem[p] =  nwdM(s,p+1,mem);
    return mem[p];
		
}


export function  nwd_dp( s){
    var l = s.length;
    var dp = new Array(l);
    dp[l] = 1;
    for (var i = l-1; i>=0; i--){
        if ( l-1==i) { dp[i] = 1;
		       continue; }
   	if (s[i+1] === '0') { dp[i] =  dp[ i+2];
			     continue;}
   	if  ( s[i] === '1' ||
	      (s[i] === '2' && s[i+1] >= '0' && s[i+1] <= '6' ))
    	{
	    dp[i] = (  dp[ i+2] + dp[ i+1] ); } 
	else
	    dp[i] = dp[i+1] ;
    	  }	
    return dp[0];
}

export  function  nwd_c( s){
    var l = s.length;
    var c = 1;
    var c1 = 1;
    for (var i = l-1; i>=0;i--){
        if ( l-1===i) { c = 1;  continue;}
        if (s[i+1] === '0'){  c1 = c; 
			     continue;}
	if (s[i] === '1' ||
            ( s[i] == '2' && s[i+1] > '0' && s[i+1] <= '6' ) )
        {
	    var tmp = c;
            c = (  c1 + c);
            c1 = tmp;
        } else c1 = c;
    }
    return c;
}
