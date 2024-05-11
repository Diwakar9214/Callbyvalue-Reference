// // programs in arrow functions.
// Print odd numbers in an array

var a= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Arrow function");
   var oddnum=array=> {    
        for(var i = 0; i < array.length; i++)
            {   if(array[i] % 2 !==0)
                    {
                    
                    console.log(array[i])
                    }
            }
    }
    
    oddnum(a);