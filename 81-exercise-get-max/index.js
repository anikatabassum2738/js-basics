const numbers = [1, 2, 3, 4];

const max = getMax([1, 2]);

console.log(max);

function getMax(array) {
    if (array.length === 0) return undefined;

    // let max = array[0];

    // for (let i = 1; i < array.length; i++)
    //     if (array[i] > max)
    //         max = array[i];
    
    // return max;

    // using reduce method
    return array.reduce((a, b) => (a > b) ? a : b);
}

// Any time you have an array of values and you want to get a single value as a result of iterating that array, think of the reduce method. In this case, we're finding the largest value in this array, so we're reducing this array into a single value. 

