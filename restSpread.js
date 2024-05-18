//function filterOutOdds
function filterOutOdds() {
var nums = Array.prototype.slice.call(arguments);
   return nums.filter(function(num) {
      return num % 2 === 0;
});
}
 
//Refactored using rest operator and arrow function:
const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);

//funtion findMin using rest and spread operator
const findMin = (...args) => Math.min(...args);

// Test cases
console.log(findMin(1, 4, 12, -3)); // -3
console.log(findMin(1, -1)); // -1
console.log(findMin(3, 1)); // 1

//function mergeObjects
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

// Test case
console.log(mergeObjects({a: 1, b: 2}, {c: 3, d: 4})); // {a: 1, b: 2, c: 3, d: 4}

//function double and retur arrgument
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(val => val * 2)];

// Test cases
console.log(doubleAndReturnArgs([1, 2, 3], 4, 4)); // [1, 2, 3, 8, 8]
console.log(doubleAndReturnArgs([2], 10, 4)); // [2, 20, 8]

//SLICE and DICE
//function removeRandom
const removeRandom = items => {
   const index = Math.floor(Math.random() * items.length);
      return [...items.slice(0, index), ...items.slice(index + 1)];
};
        
// Example usage
const items = [1, 2, 3, 4, 5];
console.log(removeRandom(items)); // Array with one random element removed
        
//function extend
const extend = (array1, array2) => [...array1, ...array2];

// Test case
console.log(extend([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
        
const addKeyVal = (obj, key, val) => {
        
// OPTION 1
let newObj = { ...obj }
newObj[key] = val;
return newObj;
        
// OPTION 2 (uses an object enhancement you'll see in the next unit)
// return { ...obj, [key]: val };
}
        
/** Return a new object with a key removed. */
        
const removeKey = (obj, key) => {
        
 // OPTION 1
let newObj = { ...obj }
delete newObj[key]
return newObj;
        
// OPTION 2 (uses an object enhancement you'll see in the next unit)
// ({ [key]: undefined, ...obj } = obj);
// return obj;
}
        
/** Combine two objects and return a new object. */
        
const combine = (obj1, obj2) => {
return { ...obj1, ...obj2 };
}
        
/** Return a new object with a modified key and value. */
        
const update = (obj, key, val) => {
        
 // OPTION 1
        
let newObj = { ...obj }
newObj[key] = val;
return newObj;
        
}