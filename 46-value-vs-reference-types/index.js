// value types (primitives) - number, string, boolean, symbol, undefined, null
// reference types - object, function, array

// how primitives and objects behave differently? primitives are copied by their value and objects are copied by their reference

let x = { value: 10 };
let y = x;

x.value = 20;

let obj = { value: 10 };

function increase(obj) {
    obj.value++;

}

increase(obj);
console.log(obj);