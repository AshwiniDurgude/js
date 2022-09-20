function reverse(a)
{
    var len=a.length
    var rev_str=''
    for(let i=len-1;i>=0;i--)
    {
        rev_str=rev_str+a[i]
    
    }
    return rev_str
}
var reverse_order=reverse("ashu")
console.log(reverse_order)


function rev(num)
{
var len=num.length
var i=len-1
var rev_str=''
while(i>=0)
{
    rev_str=rev_str+num[i]
    i--
}
console.log("rev_str" ,rev_str)
}
// rev("5421")