/*

Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.
*/



function translate(str) {
var vowels = "AEIOUYaeiouy";
var vowelTest = /[AEIOUYaeiouy]/i;  
var stop = 0;  
  
  //Checks first character of string for vowel. If its a vowel simply add "way" to end of string and call it a day
  
    if (vowelTest.test(str.charAt(0))) {
      str = str + "way";          
      stop = 1;
   }
   
  
    
  // Loops through looking for first vowel in string. Takes any characters before that, cuts them out, and adds them to end of string. Then adds "ay" to the end. 
  
  if ( stop !==1) {
   for (var i = 0 ; i < str.length ; i++){
     if (vowelTest.test(str.charAt(i))) {
       var last = str.slice(0,i);      
       str = str.slice(i,(str.length));
       str = str + last + "ay";
       break;
     }
   
   
   }  
  }
