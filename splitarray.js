function splitarray(arr,size)
{
    let finalarray=[]
    let split=0
    while(split<arr.length)
    {
        finalarray.push(arr.slice(split,split+size))
        split+=size
    }
    return finalarray

}
console.log(splitarray([1,2,3,4,5],4))