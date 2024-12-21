var kidsWithCandies = function(candies, extraCandies)
 {
   
   let op=[]

     for(let i=0; i<candies.length; i++)
     {
           let max=Math.max(...candies)
         if(candies[i]+extraCandies>=max)
         {
             op.push(true)
         }
         else
         {
             op.push(false)
         }
     }
     return op
    
};
console.log(kidsWithCandies([2,3,5,1,3],3))