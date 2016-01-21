/*

Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, add(2, 3) should return 5, and add(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = add(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

add(2, 3) should return 5.
add(2)(3) should return 5.
add("http://bit.ly/IqT6zt") should return undefined.
add(2, "3") should return undefined.
add(2)([3]) should return undefined.

*/



function add() {
var input = arguments[0];
  
for (var i = 0 ; i < arguments.length ; i++) { if (typeof(arguments[i]) !== 'number') { return undefined;} }
if (arguments.length == 2) { return arguments[0] + arguments[1];}
  
else if (arguments.length == 1) { 
  
  return (function(a) { if (typeof a !== 'number') return undefined; else return input + a; });

}
 
  
}
add (2,3);
