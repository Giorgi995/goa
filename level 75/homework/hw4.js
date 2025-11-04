const small = document.getElementById("smallbox")
const size = 200-50
let x = 0, y = 0
let dir = "right"
setInterval(() => {
    if(dir==="right"){
        x++
        if(x>=size) dir = "down"
} else if(dir==="down"){
    y++
    if(y>=size) dir = "left"
} else if(dir==="left"){
    x--
    if(x<=0) dir = "up"
} else if(dir==="up"){
    y--
    if(y<=0) dir = "right"
}
    small.style.left = x+"px"
    small.style.top = y+"px"
}, 5);