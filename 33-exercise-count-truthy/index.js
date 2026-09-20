// const isActive = true;
// const name = 'name'; //truthy (true), if the string was empty then falsy (false)


const array = [0, null, undefined, '', 1, 2, 3];
console.log(countTruthy(array))
function countTruthy(array) {
    let count = 0;
    for (let value of array)
        if (value)
            count++;
    return count;
} 