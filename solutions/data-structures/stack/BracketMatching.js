import Stack from './Stack';


export const bracketMatch  = str => {

    let stack = new Stack();
    
    for (var i = 0; i < str.length; i++) {

	let chr = str.charAt(i);
	if (chr === '(' || chr === '[' || chr === '{'  ) stack.push(chr);	
	if (chr === ')' || chr === ']' || chr === '}'){
	    if  (
		(chr === ')' && stack.peek() === '(') ||
		    (chr === ']' && stack.peek() === '[') ||
		    (chr === '}' && stack.peek() === '{') )
		stack.pop(); 
             else return false;
	}
	}
    return stack.isEmpty();
}
