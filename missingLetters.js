/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Test Cases

fearNotLetter("abce") should return "d".
fearNotLetter("abcdefghjklmno") should return "i".
fearNotLetter("bcd") should return undefined.
fearNotLetter("yz") should return undefined.

*/

function fearNotLetter(str) {
var finish = 0;
  var seqLast = 0;
  
  
  for (var i = 1 ; i < str.length ; i++ )
  {
    
    
    seqLast = str.charCodeAt(i-1);  
    seqLast++;
    
    if (str.charCodeAt(i) !==  seqLast && finish !== 1 ) {
     str = String.fromCharCode((seqLast));
     
      finish = 1;
      return str;
      
    }
   
    else if (finish ==1 ) { return undefined; }
    
  }
  
}

fearNotLetter("abce");
