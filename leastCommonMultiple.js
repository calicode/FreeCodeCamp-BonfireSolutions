/*

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.
Test Cases
smallestCommons([1, 5]) should return a number.
smallestCommons([1, 5]) should return 60.
smallestCommons([5, 1]) should return 60.
smallestCommons([1, 13]) should return 360360.
*/


function smallestCommons(arr) {
  var arr2 = [];
  
  var final = 1;
  var currTest = 2;
 
   // Returns true of currTest divided by value has no remainder. 
  function findMultiples (value) { if ((currTest % value) === 0) { return true;} }
  
  if (arr[0] < arr[1]) { 
  
    //push range of numbers bettween given array elements into arr2
    for (var i = arr[0] ; i <= arr[1] ; i++) {
      arr2.push(i); }
    
  }
  
  
  // do the same as above but for different situation. not yet implemented
  
  else if (arr [0] > arr[1]) { 
  for (var z = arr[1]; z <= arr[0]; z++ ) 
    { arr2.push(z);}
  
  } 
 
  
  
  // until remainder is found, loops through every element in arr2, testing it against the findMultiples function. If currTest is evenly divisible by every number in arr2, final is set and the loop ends. 
  for (; final < currTest ;) {
 
  
  if (arr2.every(findMultiples)) { final = currTest;  } else if (!arr2.every(findMultiples)) { currTest++;}
  
  }
  
  return currTest;
}


smallestCommons([1,5]);
