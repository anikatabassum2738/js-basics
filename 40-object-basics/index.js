//Object-oriented Programming (OOP)
// Object oriented programming is basically a style of programming where we see a program as a collection of objects that talk to each other to perform some functionality. So here we have a circle object, and this object has a few properties and a function. In object oriented programming terms, if a function is part of an object, we call the function a method. So here more accurately instead of saying we're calling the draw function of the circle object, we say we're calling the draw method of the circle object. So draw method. So that's the difference between a function and a method if a function is part of an object, in object oriented programming terms, we refer to that function as a method.

let radius = 1;
let x = 1;
let y = 1;

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function () {
        console.log('draw');
    }
};

circle.draw(); //method

// function draw() {}
// function move() {}