Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and it's value, that was passed on as the second argument.

Test Cases
where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) should return [{ first: "Tybalt", last: "Capulet" }].
where([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }) should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }].
where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }) should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].
where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }) should return [{ "a": 1, "b": 2, "c": 2 }].


*/
function where(collection, source) {
  var arr = Object.keys(source);
  var name = source[(arr[0])];
  var output =[];

  
  
  //Outer loop goes through every object in the collection array. Resets howmany to 0.  
  for (var i = 0; i < collection.length; i++) {
  
  var howmany = 0;
    
  //Loops through each property/value in the source object, and compares it to the property/value of current collection object.    
   for (var z=0; z < arr.length; z++ ) {
     
    if (collection[i].hasOwnProperty((arr[z])) && collection[i][(arr[z])] == source[(arr[z])] ) {   
     howmany++;     
     }
    
    
   
    }
  // Only pushes current collection object to output array if it has all properties in source and the values match.   
  if (howmany == arr.length) { output.push(collection[i]); }
       
   
  }
 
  // What's in a name?
  return output;
}
where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });


