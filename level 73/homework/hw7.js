let input = document.getElementById("input")
let btn = document.getElementById("add button")
let list = document.getElementById("list")

btn.addEventListener("click", function(){
    let text=input.value.trim()
    let li = document.createElement("li")
    li.textContent=text
    let dltbtn=document.createElement("button")
    dltbtn.textContent = "delete"
    dltbtn.addEventListener("click", function(){
        li.remove() 
    })
    li.appendChild(dltbtn)
    list.appendChild(li)
    input.value=""
})
