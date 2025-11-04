document.getElementById("randombtn").onclick = function(){
    let num = Math.floor(Math.random()*1001)
    let p = document.createElement("p")
    p.textContent = num
    document.body.appendChild(p)
}