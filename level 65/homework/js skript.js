let leptop = {
    brend: "lenovo",
    remi: "32gb", 
    price: 1200,
    turnOn: function(){
        console.log("leptop turn on")
    }
}
document.getElementById("leptop-btn").addEventListener("click", function(){
    leptop.turnOn()
})
let box= document.getElementById("box")
document.getElementById("bgBtn").addEventListener("click",function(){
        box.style.background="yellow"
})

function checkBirthYear(){

    let input= document.getElementById("yearInput").value
    let age = 2025 - input
    if(age<18){
        document.getElementById("ageMsg").innerText="minor"
    } else{
     document.getElementById("ageMsg").innerText="addut"   
    }
}
document.getElementById("yearBtn").addEventListener("click",checkBirthYear)

let teacher={
    name:"Nino",
    sabgect: "Georgian language",
    experience: 23,
    greet: function(){
    alert("hello i teach " + this.sabgect)    
    }
}

document.getElementById("greetBtn").addEventListener("click", function(){
    teacher.greet()
})

