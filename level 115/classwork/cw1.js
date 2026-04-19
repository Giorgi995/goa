const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const randomNumber = Math.floor(Math.random() * 100) + 1;

console.log("გამოიცანი რიცხვი 1-დან 100-მდე");

function guessNumber() {
  rl.question("შეიყვანე რიცხვი: ", function (answer) {
    const guess = Number(answer);

    if (guess === randomNumber) {
      console.log("გილოცავ! სწორად გამოიცანი ");
      rl.close();
    } 
    else if (guess > randomNumber) {
      console.log("უფრო პატარა რიცხვია ⬇");
      guessNumber();
    } 
    else {
      console.log("უფრო დიდი რიცხვია ⬆");
      guessNumber();
    }
  });
}

guessNumber();