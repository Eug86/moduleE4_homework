const obj = {
  a : 5,
  b : 7,
  c : 11,
  d : 888
};

const str = 11;

function find(a, b) {
  let count = 0;
  for (let key in a) {
    if (a[key] === b) {
      count++;
    }    
  }

  if (count > 0) {
  return true;  
  } else { return false;
         }
}


console.log(find(obj, str))