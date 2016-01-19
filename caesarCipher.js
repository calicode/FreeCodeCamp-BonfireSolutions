/*

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

Remember to use Read-Search-Ask if you

Test Cases

rot13("SERR PBQR PNZC") should decode to "FREE CODE CAMP"
rot13("SERR CVMMN!") should decode to "FREE PIZZA!"
rot13("SERR YBIR?") should decode to "FREE LOVE?"
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.") should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."


*/
function rot13(encodedStr) {
  var codeArr = encodedStr.split("");  // String to Array
  var decodedArr = []; // Your Result goes here
  // Only change code below this line
  
  for(var i =0; i<codeArr.length;i++){
    if (codeArr[i] == " ") { decodedArr.push(codeArr[i]);}
    
   
    
    else { 
      var tmp = codeArr[i];
      tmp = tmp.charCodeAt(0);
      if (tmp >= 78 && tmp < 91) { tmp=String.fromCharCode(tmp-13);}
      else if (tmp <=77 && tmp > 64 ) {tmp=String.fromCharCode(tmp+13);}
      else { tmp=String.fromCharCode(tmp);}
      decodedArr.push(tmp);}
    
    
  }


  // Only change code above this line
//return decodedArr;
    return decodedArr.join(""); // Array to String
}

// Change the inputs below to test
rot13("SERR CVMMN!");
