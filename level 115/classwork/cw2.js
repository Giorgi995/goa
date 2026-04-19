// Buffer მაგალითი Node.js-ში

// 1. ტექსტიდან Buffer-ის შექმნა
const buf1 = Buffer.from("Hello Node.js");

console.log("Buffer 1:", buf1);
console.log("Buffer 1 ტექსტად:", buf1.toString());


// 2. Buffer-ის ზომის ნახვა
console.log("Buffer 1 სიგრძე:", buf1.length);


// 3. ცარიელი Buffer-ის შექმნა
const buf2 = Buffer.alloc(10);

console.log("Buffer 2 (ცარიელი):", buf2);


// 4. Buffer-ში მონაცემის ჩაწერა
buf2.write("Node");

console.log("Buffer 2 ჩაწერის შემდეგ:", buf2);
console.log("Buffer 2 ტექსტად:", buf2.toString());


// 5. კიდევ ერთი მაგალითი
const buf3 = Buffer.from("Programming");

console.log("Buffer 3:", buf3);
console.log("Buffer 3 ტექსტად:", buf3.toString());