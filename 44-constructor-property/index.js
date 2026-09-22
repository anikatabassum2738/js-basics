// every object has a constructor property that references a function that was used to create that object

// new String(); - '',"",``
// new Boolean(); - true, false
// new Number(); - 1, 2, 3, ...

// Factory Function
function createCircle(radius) {
    return {
        radius, //if key and value are same then we can write like this
        draw() {
            console.log('draw');
        }
    };
}

const myCircle = createCircle(1);

// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const another = new Circle(1);

