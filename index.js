'use strict';

// YOU KNOW WHAT TO DO //
/**
* identity: Retuns the value unchanged.
*
* @param{any datatype} value: The value being returned.
*
* @return {any datatype} Returns the value with no changes
*/

function identity(value) {
return value
}
module.exports.identity = identity;

/**
* typeOf: Compares the value to a chain of if else if statements filtering out 
* false postives for object and returns their correct type as a string
*
* *@param {any datatype} value: The value we're testing the data type of
* 
* @return {string} Returns the type of data ("object", "array", "string", etc).
*/

function typeOf(value){
      if (Array.isArray(value)){
      return "array";

  } else if (value instanceof Date){
      return false;

  } else if (value === null){
      return "null";

  } else if (typeof value === "object"){
      return "object";

  } else {
      return typeof(value);
  }    
}

module.exports.typeOf = typeOf;

/**
* first: Creates a new array containing the nth number of values starting from
* the first index forward.
* 
* *@param {array} array: The array we want the first (number) values of.
* @param {number} number: The number of values starting from index 0 we want returned
* 
* @return {array} If the first agrument is not an array or the number is less
* than zero, returns an empty array.
* If the number is undefined or NaN, returns the value at index 0 in new array.
* Otherwise retuns a new array containing the first nth values from oringal
* array in a new array.
*/

function first (array, number) {
    let result = []
    if (Array.isArray(array) === false || number <= 0){
        return []
    }
    if (number === undefined || NaN){
        return array[0]
    }
    if (number > array.length){
        return array
    }

    for (let i=0; i < number; i++){
        result.push(array[i])
        
    }return result
}

module.exports.first = first;

/**
* last: Creates a new array containing the last nth number of values starting from
* the last index back.
* 
* *@param {array} array: The array we want the last (number) values of.
* @param {number} number: The number of values starting from last index we want returned
* 
* @return {array} If the first agrument is not an array or the number is less
* than zero, returns an empty array.
* If the number is undefined or NaN, returns the value at last index in new array.
* Otherwise retuns a new array containing the last nth values from oringal
*  array in a new array.
**/

 function last(array, number) {
     let result = []
    if (Array.isArray(array) === false){
        return []
    }
    if (number === undefined || NaN){
        return array[array.length-1]
    }
    if (number > array.length){
        return array
    }
    if (number <= 0){
        return  []
    }
    for (let i = array.length -1; i >= array.length -number; i--){
        ////console.log(i)
        result.unshift(array[i])
    } return result
}
module.exports.last = last;

/**
* indexOf: Loops through an array checking for the given value against the 
* current value at index (i) of loop, if array[i] has the given value, returns
* that index. Only checks for first instance of that value.
* 
* *@param {array} array: Array we're checking the index of
* @param {any datatype} value: The value we're checking for to return it's index 
* 
* @return {number} If the array is not an array returns -1, otherwise it returns
* the value of (i) once if conditional is met, which is the index of the value.
*/

function indexOf(array, value){
    if (array.includes(value) === false){
        return -1
    }
    for (let i = 0; i < array.length-1; i++){
        if (array[i] === value){
            return i
        }
    }
}

module.exports.indexOf = indexOf;

/**
* contains: Loops through an array checking if the exact (value) is contained within,
* returning true if at least one instance of (value) exists within the array. False
* if the entire array doesn't contain an instance of (value).
* 
* *@param {array} array: The array we want to check the contents of.
* @param {any datatype} value: The value inside the array we're checking for.
* 
* @return {boolean} True if at least one index in the array contains (value),
* flase otherwise.
*/

function contains(array, value){
    return array.includes(value) ? true:false
}


module.exports.contains = contains;

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}

module.exports.each = each;

/**
* unique: Loops through each index of the array and checks if that value is found
* at any other index of the array pushing the first instance of that value into 
* a new array without duplicates.
* 
* *@param {array} array: The array we want to pull unique values from.
* 
* @return {array} Returns the new result array which now contains only the
* unique values from oringal array.
*/

function unique(array){
  var result = []
  for (let i = 0; i < array.length; i++){
    if (result.indexOf(array[i]) === -1){
        result.push(array[i]);
        }
  }return result;
}

module.exports.unique = unique;

/**
* filter: Iterates through an array and invokes the given function on each index,
* pushing it's results to a new filtered array if the filterFunc resolves to true
* for that value at current index.
* 
* *@param {array} array: The array we want to invoke our filter function on each index.
* @param {function} filterFunc: The function we want to run on each index of the array,
* takes value, index, and array as agruments and returns a boolean value.
* 
* @return {array} Returns the filterArr array which contains each value of the 
* oringal array that resolves to true once filterFunc is invoked on it.
*/

function filter(arr, filterFunc) {    
  let filterArr = []; // empty array        
  // loop though array    
  for(let i=0;i<arr.length;i++) {        
    let result = filterFunc(arr[i], i, arr);        
    // push the current element if result is true        
    if(result)             filterArr.push(arr[i]);     
  }    return filterArr;
}

module.exports.filter = filter;

/**
* reject: The logical inverse of filter, iterates over each value and invokes 
* the given function on it, if function resolves to false, pushes value into new
* result array.
* 
* *@param {array} array: The array we want to invoke our filter function on each index.
* * @param {function} func: The function we want to run on each index of the array,
* takes value, index, and array as agruments and returns a boolean value.
* 
* @return {array} Returns the filterArr array which contains each value of the 
* oringal array that resolves to false once filterFunc is invoked on it.
*/

function reject(array, func){
   return filter(array, function(elements, i, array){
       return !func(elements, i, array)
   });
}
module.exports.reject = reject;

/**
* partition: Iterates through an array and ivokes a function on each value, pushes
* values that resovles to true into one array, the values that resolve to false into
* another.
* 
* *@param {array} array: The array we want to invoke our test function on each index.
* * @param {function} testFunc: The function we want to run on each index of the array,
* takes value, index, and array as agruments and returns a boolean value.
* 
* @return {array} An array containing two sub arrays, the first
* being the values the resolved to true, the second values that resolves to false.
*/
function partition(array, testFunc){
    let isTrue = []
    let isFalse = []
    
    for (let key in array){
        var test = testFunc(array[key], key, array)
        if(test){isTrue.push(array[key])
        ////console.log(isTrue)
    } else {isFalse.push(array[key])
        ////console.log(isFalse)
        }
    } 
    return [isTrue,isFalse]
}
module.exports.partition = partition;

/**
* map: Calls a function on each element of the array or value in collection and 
* pushes the results into a new array.
* 
* *@param {array or object} collection: The array we want to invoke our function
* on each element/value.
* * @param {function} func: The function to invole on each element/value.
* 
* @return {array} The result array containing the modified value/elements. 
*/

function map(collection, func){
    let type = typeOf(collection)
    let result = []
    ////console.log(type)
    if (type === 'object'){
        for (let key in collection){
            result.push(func(collection[key], key, collection))
            ////console.log(result)
        } return result
    } else if (type === 'array') {
        for (let i=0; i < collection.length; i++)
        result.push(func(collection[i], i, collection))
    } return result
}

module.exports.map = map;

/**
* pluck: Loops through a collection and pushes each value paired with the key(prop)
* passed as an argument into an array.
* 
* *@param {array of object} collection: The collection we want to pull properties from
* * @param {any} prop: The property we want returned from collection 
* 
* @return {array} An array containing each the value from each property(prop) in
* the collection.
*/
function pluck(collection, prop){
    return map(collection, function(object, index, collection){
        return object[prop];
    });
}

module.exports.pluck = pluck;

/**
* every: Calls a function on every element of a collection and returns true
* if every element resolves to true when function is called. If no callback function
* is provided, returns true if each value in the collection is truthy, false otherwise.
* 
* *@param {array of object} collection: The collection we'd like to test.
* * @param {function} func: The function we're testing the truthy/falsyness of
* each element with.
*
* @return {boolean} True if all elements in the array are truthy, false if at 
* least one element is falsy.
*/
function every(collection, func){
    
//console.log("collection" , collection)
let result = true
if (func === undefined){
    for (let key in collection){
        if (collection[key] === false){
            result =  false
        }
    }
}else{

    each(collection, (el, i, collection) => {
        //console.log("elements ",el)
        if (func(el, i, collection) === false){
           result = false
        }
     
    })}
    return result
}

module.exports.every = every;

/**
* some: Calls a function on every element of a collection and returns true
* if at least one element resolves to true when function is called. If no callback function
* is provided, returns true if at least one value in the collection is truthy, false otherwise.
* 
* 
* *@param {array of object} collection: The collection we'd like to test.
* * @param {function} func: The function we're testing the truthy/falsyness of
* each element with.
*
* @return {boolean} False if all elements in the array are falsy, true if at 
* least one element is true.
*/
function some(collection, func){
    let result = false
    
    if (func === undefined){
    for (let key in collection){
        if (collection[key]){
            result =  true
        }
    }
}else{
        each(collection, (el, i, collection) => {
       
        if (func(el, i, collection)){
           result = true
        }
     
    })}
    return result
}

module.exports.some = some;

/**
* reduce: Excutes provided reducer function on each element of the array,
* resulting in a single value. The seed serves as the starting value and
* each interation of the loop the function is called again with the previous
* result as the new seed.
* 
* *@param {array} collection: The collection we're reducing to a single value.
* * @param {function} func: The reducer function to invoke on each element.
* @param {number} seed: The starting value for our function.
* 
* @return {number} The final result which is the total of each invoking of the 
* reducer function.
*/

function reduce(array, func, seed){
   var prevResult = seed;
   if (seed === undefined){
       prevResult = array[0];
       for (let i = 1; i < array.length; i++){
           prevResult = func(prevResult, array[i], i);
       }
       //return prevResult;
   } else {
       each(array, function(el, i, array){
           prevResult = func(prevResult, el, i, array)
       })
   }
   return prevResult
}

module.exports.reduce = reduce;

/**
* Extend: Adds properties from possibly multiple objects to an object
* overiding intital properties for that key if new ones are given. Loops over
* both index and key of arguments object and sets value to the current value
* in the arguments object.
* 
* *@param {object} object: The object we'd like to add more properties to.
* * @param {arguments object} ...objects: Any number of objects passed as arguments
* contained in the agruments object.
* 
* @return {object} The oringal object modified with new values.
*/

function extend(object1,...objects){
    for (let i=0; i < objects.length; i++){
        for( let key in objects[i]){
            let current = objects[i]
            object1[key] = current[key]
        }
    } return object1
}
module.exports.extend = extend;