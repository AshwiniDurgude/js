
function checkPairAddition(num) {

    let returnArray = []
    let tempArray = [1,2,3,4,5,6,7,8,9]

    for(let i=0; i<tempArray.length;i++)
    {
        for(let j=0; j<tempArray.length;j++) {
            if(i !== j) {
                if((tempArray[i] + tempArray[j]) === num) {
                    let pair = [ tempArray[i], tempArray[j] ]
                    returnArray.push(pair)
                    // return [ tempArray[i], tempArray[j] ]
                }
            }
        }
    }
    return returnArray
}

// const ans = checkPairAddition(10)
// console.log("ans=> ", ans)


// [  ]

//[ 1, 2 , 3]

console.log(
    ashu.checkPairAddition(ashu.num)
)