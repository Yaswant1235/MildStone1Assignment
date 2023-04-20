function doubleValues(array) {
    return array.concat.apply([], array.map(function (el) { return [el, el] }));
 }
 
 console.log(doubleValues([1, 2, 3]))