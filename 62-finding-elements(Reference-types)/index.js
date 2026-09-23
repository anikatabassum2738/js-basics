const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
];

const course = courses.find(function (course) {
    return course.name === 'a';
});

console.log(course);

// find() method returns the value of the first element in the array that satisfies the provided testing function. otherwise undefined is returned.