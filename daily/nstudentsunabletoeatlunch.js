/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    var queue = students.slice(); 
    var stack = sandwiches.slice(); 

    var unableToEat = 0; 

    while (queue.length > 0 && unableToEat < queue.length) {
        if (queue[0] === stack[0]) {
        queue.shift(); 
        stack.shift(); 
        unableToEat = 0; 
        } else {
        queue.push(queue.shift()); 
        unableToEat++; 
        }
    }

    return unableToEat;
};