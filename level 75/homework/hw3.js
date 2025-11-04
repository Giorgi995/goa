const form = document.getElementById("info")
const table = document.getElementById("table")
form.addEventListener("submit",function(a){
    a.preventDefault()
    function container(){
        let name = document.getElementById("name")
        let email = document.getElementById("email")
        let password = document.getElementById("password")
        let tr = document.createElement("tr")
        tr.innerHTML = `<td>${name}</td><td>${email}</td><td>${password}</td>`
        return tr
    }
    function presentational(row){
        table.appendChild(row)
    }
    const newrow = container()
    presentational(newrow)
    form.reset()
})