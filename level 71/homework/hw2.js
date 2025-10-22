//pop-შლის ბოლო ელემენტს მასივიდან და აბრუნებს მას
let colors=["black","blue","white"];
let lastaitem=colors.pop();
console.log(colors);
console.log(lastaitem);

let stack = [10, 20, 30];
stack.pop()
console.log(stack);

//push-ამატებს ელემენტს მასივის ბოლოში მასივი
let fruits = ["orange","apple","kiwi"];
fruits.push("pear");
console.log(fruits);

let numbers = [1, 2, 3];
numbers.push(4, 5);
console.log(numbers);

//shift-შლის პირველ ელემენტს და აბრუნებს მას
let cities = ["Batumi","Kutaisi","Tbilisi"];
let firstcity = fruits.shift();
console.log(cities);
console.log(firstcity);


let queue = ["first", "second", "third"]
queue.shift();
console.log(queue);

//unshift-ამატებს მასივის დასაწყის 
let animals = ['cat', 'lion'];
animals.unshift('elephant');
console.log(animals);

let scores = [100, 150, 200];
scores.unshift(25, 50);
console.log(scores);

//slise-ქმნის ახალ მასივს რომელიც შეიცავს ამოჯრილ ელემენტებს
let stackOFnumbers = [10, 20, 30, 40, 50, 60, 70]; 
let slicedArray = stackOFnumbers.slice(3);
console.log(slicedArray);
console.log(stackOFnumbers);


let letters = ['a', 'e', 'i', 'o', 'u'];
let sliced = letters.slice(1, 4);
console.log(sliced);
console.log(letters);

//splis- შლის ელემენტებს და ამატებს ახალ ელემენტებს სურვოლოსამებრ მითითებულ ადგილას
let carModels = ['BMW', 'Tesla', 'Audi'];
carModels.splice(0, 1, 'Mersedes', 'Mitsubishi');
console.log(carModels);

let stackOFitems = ['pen', 'pencil', 'notebook', 'sharpener'];
stackOFitems.splice(2, 2);
console.log(stackOFitems);







