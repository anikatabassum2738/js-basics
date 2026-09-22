function createCircle(radius) {
    return {
        radius, //if key and value are same then we can write like this
        draw() {
            console.log('draw');
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);