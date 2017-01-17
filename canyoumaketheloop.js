// You are given a node that is the beginning of a linked list. 
// This list always contains a tail and a loop.
// Your objective is to determine the length of the loop.

// Use the `getNext' method or 'next' property to get the following node.
// node.getNext()
// node.next

function loop_size(node) {
  let count = 1;
  let tortoise = node;
  let hare = node.next;
  
  // Find a starting point to count the loop by having one node catch up to the other
  while (tortoise !== hare) {
    tortoise = tortoise.next;
    hare = hare.next.next;
  }
  
  tortoise = tortoise.next;
  while (tortoise !== hare) {
    count++;
    tortoise = tortoise.next;
  }
  
  return count;
}