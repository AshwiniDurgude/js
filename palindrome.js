function palindrome(num)
{
    var len=num.length
    var rev_str=''
    for(let i=len-1;i>=0;i--)
    {
        rev_str=rev_str+num[i]
    }
    if(num==rev_str)
    {
        console.log("Number is Palindrome")
    }
    else
    {
        console.log("Number is not Palindrome")
    }
}
palindrome("987111")