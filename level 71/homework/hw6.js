function manualRaverse(arr){
    return arr.manualRaverse
}
console.log(manualRaverse([1,2,3,4,5]))

function manualslice(arr, a,b){
    let result=[]
    for (let i=a; i<b; i++){
        result.push(arr[i])
    }
    return result
}