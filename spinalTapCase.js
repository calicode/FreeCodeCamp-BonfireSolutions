/*

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

*/


function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  

  str = str.replace(/([a-z])([A-Z])/g, '$1 $2').split(/\s/);
 
 // change the word to lower case and replace any instance of _ with - for each element of the str array
  var str2 = str.map (function (val) {
          
    val = val.toLowerCase().replace(/[_]/g,'-');
    return val;
    
    
  });
  
  return str2.join("-");

}

spinalCase('thisIsSpinalTap');
