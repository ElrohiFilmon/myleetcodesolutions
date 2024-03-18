/**
 * @return {Function}
 */
var createHelloWorld = function() {
    let s="Hello World"
    return function(...args) {
        return s
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */