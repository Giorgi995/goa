const weatherisgood = true;
console.log("pending...")
const Promise = new promise((resolve, reject)=> {
    setTimeout(() => {
        weatherisgood
        ? resolve("weatherisgood")
        : reject("weatherisbad")
        
    },2000);
})

promise
    .then(res => console.log("resolved", res))
    .catch(err => console.log("rejected", err));