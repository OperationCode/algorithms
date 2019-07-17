import Stack from './Stack';



export const nextGreaterElement = arr => {
    let stack = new Stack();
    var res = new Array(arr.length);

    stack.push(0);
    for (var i = 1; i < arr.length; i++) { 
  
    if (stack.isEmpty()) { 
      stack.push(i); 
      continue; 
    } 
  
    /* if stack is not empty, then 
       pop an index from stack. 
       If the corresponding element is smaller 
       than next element, then 
       the NGE of that index if the next element
       Keep popping while elements are 
    smaller and stack is not empty */
    while ( !stack.isEmpty()  && arr[stack.peek()] < arr[i])
    {          
      res[stack.pop()] = arr[i];
    } 
  
    /* push next index onto stack so that we can find 
    next greater for it */
    stack.push(i); 
  } 
  
  /* After iterating over the loop, the remaining 
  elements in stack do not have a next greater 
  element, so set them to null */
  while (!stack.isEmpty() ) { 
      res[stack.pop()]  = null;
  } 

return res;
} 
