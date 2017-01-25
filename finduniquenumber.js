// There is an array with some numbers. All numbers are equal except for one. Try to find it!

function findUniq(arr) {
  const results = {};
  
  arr.forEach((ele) => {
    if (!results[ele]) results[ele] = 1;
    else results[ele] = 2;
  });
  
  for (let key in results) {
    if (results[key] === 1) return Number(key);
  }
  
  return false;
}

