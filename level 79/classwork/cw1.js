let age = 15;
age = 16;
console.log(age); // 16

// const - მუდმივი მნიშვნელობა, შეცვლა არ შეიძლება
const country = "Georgia";
// country = "USA"; // Error
console.log(country);




// B) String - Template Literals ( )


const name = "Vako";
const userAge = 15;

// ძველი გზა
console.log("My name is " + name + " and I am " + userAge);

// ახალი ES6 გზა
console.log(My name is ${name} and I am ${userAge});



// C) For Loop - for...of


const numbers = [10, 20, 30];

for (let num of numbers) {
    console.log(num);
}
// 10
// 20
// 30



// D) Arrow Function (=>)


// ჩვეულებრივი ფუნქცია
function sum(a, b) {
    return a + b;
}

// Arrow function
const sum2 = (a, b) => a + b;
console.log(sum2(5, 3)); // 8

// ერთი პარამეტრი
const hello = name => Hello, ${name};
console.log(hello("Vako"));

// ბლოკით
const square = num => {
    return num * num;
}
console.log(square(4)); // 16