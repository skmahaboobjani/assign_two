var reverseVowels = function(s) 
{

    let vowels="aeiouAEIOU"
  let res=[]
    for(let i=0; i<s.length; i++)
    {
        if(vowels.includes(s[i]))
        {
           res.push(s[i])
        }
    }

    for(let i=0; i<s.length; i++)
    {
        if(vowels.includes(s[i]))
        {
            s=s.substring(0,i)+res.pop()+s.substring(i+1)
        }
    }

    return s
    
};
console.log(reverseVowels("IceCreAm"))