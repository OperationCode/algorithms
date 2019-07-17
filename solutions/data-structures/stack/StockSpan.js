import Stack from './Stack';



export const stockSpan = price => {
    let stack = new Stack();
    var res = new Array(price.length);

    res[0] = 1;
    stack.push(0);
    
    for (var i = 1; i < price.length; i++) {
        // Pop elements from stack while stack is not 
        // empty and top of stack is smaller than 
        // proce[i] 
        while (!stack.isEmpty() && price[stack.peek()] <= price[i]) 
            stack.pop(); 
  
        // If stack becomes empty, then price[i] is 
        // greater than all elements on left of it, 
        // i.e., price[0], price[1], ..price[i-1].  Else 
        // price[i] is greater than elements after 
        // top of stack 
        res[i] = (stack.isEmpty()) ? (i + 1) : (i - stack.peek()); 
  
        // Push this element to stack 
        stack.push(i); 
    } 
return res;
}

