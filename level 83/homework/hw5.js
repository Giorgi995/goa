const numset = new Set([1,2,2,3,4,4,5,6])
let acc = 0;
for (const num of numset){
    acc += num; 
}
console.log("sum", acc);