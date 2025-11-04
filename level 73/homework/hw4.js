let time=10
function count(){
 console.log(time)
 time--
if(time<0){
 clearInterval(countdown)
 console.log("time up")
}
}
let countdown = setInterval(count,1000)
