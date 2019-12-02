

let a = {
    name: 'static',
    count: 0
  };

  function foo(object, value, i) {
    let array = [];
    for (let j=1; j <(i+1); j++) {
      let newObject = Object.assign({}, object);
      newObject[value] = j;
      array.push(newObject);
    }
    return array;
  }
  
  console.log(foo(a, 'count', 10));
