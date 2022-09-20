function fibo(fnum,snum,n)
{
    let ser=fnum+" "+snum
    for(let i=0;i<n;i++)
    {
        let sum=fnum+snum
        ser=ser+" "+sum
        fnum=snum
        snum=sum
    }
    console.log(ser)
    
}
// fibo(0,1,10)
function fibo(fnum,snum,n)
{
    let ser=fnum+"  "+snum
    for(let i=0;i<n;i++)
    {
        let sum=fnum+snum
        ser=ser+" "+sum
        fnum=snum
        snum=sum
    }
    console.log(ser)
}
fibo(10,11,5)