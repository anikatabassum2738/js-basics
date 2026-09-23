const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(n => n >= 0);
console.log(filtered);

const items = filtered.map(n => '<li>' + n + '</li>');
console.log(items);

const html = '<ul>' + items.join('') + '</ul>';
console.log(html);

const objects = filtered.map(n => {
    const obj = { value: n };
    return obj;
});
console.log(objects);

const object = filtered.map(n => {
    return { value: n };
});
console.log(object);

// chaining
const filtered2 = numbers
    .filter(n => n >= 0)
    .map(n => ({ value: n }))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);
console.log(filtered2);