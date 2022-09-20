function prime()
{
    
    for(let num=1;num<100;num++)
    {
        let count=0
        for(let i=1;i<=num;i++)
        {
            if(num%i==0)
            {
                count ++
                //  break
            }
        }
        if(count==2)
        {
            console.log(num)
        }
        // else
        // {
        //     console.log("Number is not prime",num)
        // } 
    } 
}
let number=prime(100)
 console.log(number)