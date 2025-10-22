const userInput = document.getElementById("username")

const h1 = document.getElementById("h1")
const submitBtn = document.getElementById("mysubmit")


function getUsername () {
    let username = userInput.value;
    h1.textContent = "hello" + username;
}

submitBtn.onclick = getUsername()

