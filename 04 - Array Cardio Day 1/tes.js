const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
const counterObject = data.reduce((o, e) => {
  if(Object.hasOwn(o, e)){
    o[e]++;
  }
  else{
    o[e] = 0;
  }
  return o;
}, {});
console.log(counterObject);