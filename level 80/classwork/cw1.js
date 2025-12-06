// ვქმნით ცვლადებს, რომლებსაც გამოვიყენებთ ობიექტის კუთვნილებების სახელებში
let x = "bal";
let y = "ance";

// ვქმნით account ობიექტს
// კუთვნილების სახელები არის: გამოთვლადი (computed properties) და string-ების კონკატინაცია
const account = {
    [x + y]: 0,                   // balance → გამოთვლილი კუთვნილების სახელი
    ["own" + "er"]: "Vako",       // owner → კონკატინაციით მიღებული სახელი

    // deposit მეთოდი – this.balance ზრდის amount-ით
    deposit(amount) {
        this.balance += amount;
    }
};

// deposit მეთოდის 2 გამოძახება
account.deposit(100);
account.deposit(50);

// ვქმნით person ობიექტს
const person = {
    firstName: "Giorgi",
    lastName: "Kobaladze",
    age: 20,
    balance: 200      // მასაც აქვს balance
};

// Object.assign() – ორი ობიექტის შერწყმა
// personAccount იქნება person + account გაერთიანებული
const personAccount = Object.assign({}, person, account);

// კონსოლში გამოტანა
console.log("account:", account);
console.log("person:", person);
console.log("personAccount:", personAccount);

// ვქმნით dataArr მასივს 3 ელემენტით
const dataArr = ["JavaScript", 2025, "GOA"];

// დესტრუქტურიზაცია – 3 ელემენტი 3 ცვლადში
const [lang, year, academy] = dataArr;

// კონსოლში გამოტანა
console.log(lang);     // JavaScript
console.log(year);     // 2025
console.log(academy);  // GOA


function myFunc(first, ...rest) {
    console.log("First argument", first);
    console.log("Other argument", rest);
}

myFunc(20, 30, 40, 50, 60),






