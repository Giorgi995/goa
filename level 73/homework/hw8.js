let btn=document.getElementById("randombtn")
btn.addEventListener("click", function(){
    let p=document.createElement("p")
    let randomnum=Math.floor(Math.random()*1001)
    p.textContent=randomnum
    document.body.appendChild(p)
})










