// Convert all the strings to title caps in a string array
//  Anonymous function &IIFE
var Name=["hari","mohan","raj"]

console.log("Anonymous function");

    var convstr=Name.map(function(str)
    {
      return str.toLowerCase().split(' ').map(function(word){
        return word.charAt(0).toUpperCase() + word.slice(1)
      }).join(' ')
    })
    
    console.log(convstr);
//  IIFE
// let stringArray = ["hello world", "this is a test", "another example"];

// let titleCapsArray = stringArray.map(function(str) {
//     return str.toLowerCase().split(' ').map(function(word) {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     }).join(' ');
// });

// console.log(titleCapsArray);
var str="my name is ayesha";
(function(str) {
   str = str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
   } 
   return str.join(' ');
   var n=str
})(str)