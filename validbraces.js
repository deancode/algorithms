function validBraces(braces){
  const stack = [];
  
  for (let i = 0; i < braces.length; i++) {
    let braceInd = braces[i];
    let stackLen = stack.length;
    
    // Add opening brace to the stack
    if (braceInd === '(' || braceInd === '{' || braceInd === '[') {
      stack.push(braceInd);
    }
    
    // Remove matching end brace from the stack or exit
    else if (braceInd === ')') {
      if (stack[stackLen - 1] === '(') stack.pop();
      else return false;
    }
    else if (braceInd === '}') {
      if (stack[stackLen - 1] === '{') stack.pop();
      else return false;
    }
    else if (braceInd === ']') {
      if (stack[stackLen - 1] === '[') stack.pop();
      else return false;
    }
  }
  
  // Is the stack empty?
  return stack.length === 0; 
}