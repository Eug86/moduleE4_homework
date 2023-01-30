const obj = {
  a : 5,
  b : 7,
  c : 11,
  d : 888
};

function prop(a) {
  for (let key in a) {
    if (a.hasOwnProperty(key)) {
      console.log(key, a[key])
    }
  }
}

prop(obj)