// Sum of all numbers in an array
// anonymous function 
var sum =function(a){
    var  res=0;
    for(i=0;i<a.length;i++)
    {
            res+=a[i]
    }
    return res;
 
}
console.log(sum([1,2,3,4,5,6]))

//IIFE

(function(a){
    var res = 0; // Initialize the variable res to store the sum
    for (var i = 0; i < a.length; i++) {
        res += a[i]; // Add each element of the array to the sum
    }
    console.log(res); // Print the sum to the console
})([1, 2, 3, 4, 5, 7]);
