import Stack from './Stack';



export const evalPostFix = arr => {
    let stack = new Stack();
    
    for (var i = 0; i < arr.length; i++) {
	if (typeof arr[i] == 'number'){
	    stack.push(arr[i]);
	}
	if (arr[i] === '-'){
	    let arg1 = stack.pop();
	    let arg2 = stack.pop();
	    if (arg1 && arg2)stack.push(arg1-arg2); else return null;
	}
	if (arr[i] === '+'){
	    let arg1 = stack.pop();
	    let arg2 = stack.pop();
	    if (arg1 && arg2)stack.push(arg1+arg2); else return null;
	}
	if (arr[i] === '*'){
	    let arg1 = stack.pop();
	    let arg2 = stack.pop();
	    if (arg1 && arg2)stack.push(arg1*arg2); else return null;
	}
	if (arr[i] === '/'){
	    let arg1 = stack.pop();
	    let arg2 = stack.pop();
	    if (arg1 && arg2)stack.push(arg1/arg2); else return null;
	}
    }
    let res = stack.pop();
    
    if (stack.isEmpty() && res ) return res; 
    else return null;

}


