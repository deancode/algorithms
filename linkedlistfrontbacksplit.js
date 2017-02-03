// Linked Lists - Front Back Split

// Write a FrontBackSplit() function that takes one list and splits
// it into two sublists — one for the front half, and one for the 
// back half.If the number of elements is odd, the extra element 
// should go in the front list.
// For example, FrontBackSplit() on the list 2 -> 3 -> 5 -> 7 -> 11 -> null 
// should yield the two lists 2 -> 3 -> 5 -> null and 7 -> 11 -> null.

function Node(data) {
  this.data = data === undefined ? null : data;
  this.next = null;
}

function frontBackSplit(source, front, back) {
  let count = 0;
  let current = source;
  while (current) {
    count++;
    current = current.next;
  }
  let frontLength = Math.ceil(count / 2);
  
  current = source;
  for (let i = 0; i < frontLength - 1; i++) {
    current = current.next;
  }

  back.data = current.next.data;
  back.next = current.next.next;
  current.next = null;

  front.data = source.data;
  front.next = source.next;
}