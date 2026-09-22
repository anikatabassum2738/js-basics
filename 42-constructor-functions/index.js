// Camel Notation: oneTwoThreeFour
// Pascal Notation: OneTwoThreeFour

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
function Circle() {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const circle = new Circle(1);