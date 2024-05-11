// Print odd numbers in an array
//  Anonymous function
var a= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Anonymous function");
   var oddnum=function(array) {    
        for(var i = 0; i < array.length; i++)
            {   if(array[i] % 2 !==0)
                    {
                    
                    console.log(array[i])
                    }
            }
    }
    
    oddnum(a);

//  IIFE
var b= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("IIFE");
    (function(array) {    
        for(var i = 0; i < array.length; i++)
            {   if(array[i] % 2 !==0)
                    {
                    console.log(array[i])
                    }
            }
    })(b);

