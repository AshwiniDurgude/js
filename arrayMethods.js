//Array Method Map
const a=[1,2,3,4,5]
const b=a.map(function(item)
{
    return item*3
})
// console.log(b)

//Filter
const words=["React","Script","Javascript","Angular","Interview","Java"]
const ans=words.filter((word)=>word.length>6)
// console.log(ans)


let newarry=["take","your","Dream","Seriousaly","efforts","successfully"]
for(let i=0;i<words.length;i++)
{
    if(words[i].length>6)
    {
        newarry.push(words[i])
    }
}
// console.log(newarry)

// forEach
let arr=[1,2,3,4,5,6,7,8,9]
 function consoleEven(arr)
{
    let data=arr.map((num)=>(num%2===0 ? num*2 : num*1))
    console.log(data) 
}
consoleEven([1,2,3,4,5,6,7,8,9])