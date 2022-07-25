console.log('Hello World');
// Inferred types 
var age = 30;
age = 35;
var untypedAge = 24;
untypedAge = 'Thirty';
var myAge = 30;
// Typing functions 
function add(a, b) {
    return a + b;
}
var arr = [1, 2, 3];
arr.push(3);
// TypeScript generics 
var Observable = /** @class */ (function () {
    function Observable(value) {
        this.value = value;
    } // 
    return Observable;
}());
