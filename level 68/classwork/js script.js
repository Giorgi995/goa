
let dataBase = [];

// HTML ელემენტების წამოღება
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let registerBtn = document.getElementById("registerBtn");

// ღილაკზე დაჭერისას
registerBtn.onclick = function() {
  // ვიღებთ მნიშვნელობებს
  let userName = nameInput.value;
  let userEmail = emailInput.value;
  let userPassword = passwordInput.value;

  // ვქმნით ახალ account ობიექტს
  let account = {
    name: userName,
    email: userEmail,
    password: userPassword
  };
 
  // ობიექტის დამატება dataBase მასივში
  dataBase.push(account);

  // ვასუფთავებთ შესატან ველებს
  nameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";

  // შედეგის ჩვენება კონსოლში
  console.log("ახალი მომხმარებელი დაემატა:", account);
  console.log("მიმდინარე dataBase:", dataBase);
};