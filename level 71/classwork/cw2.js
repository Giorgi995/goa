// ვქმნით კონსტრუქტორს ობიექტებისთვის (ეს შაბლონია)
function NumberObj(number, even) {
  this.number = number; // თვითონ რიცხვი
  this.even = even;     // true ან false — ლუწია თუ არა
}

// ცარიელი მასივი, სადაც ყველა ობიექტს ჩავამატებთ
let numbers = [];

// ვმუშაობთ 1-იდან 10-მდე
for (let i = 1; i <= 10; i++) {
  // ვამოწმებთ, ლუწია თუ არა
  let isEven = i % 2 === 0 ? true : false;

  // ვქმნით ობიექტს ჩვენი კონსტრუქტორით
  let numObj = new NumberObj(i, isEven);

  // ვამატებთ მასივში
  numbers.push(numObj);
}

// საბოლოოდ ვხედავთ ყველა ობიექტს
console.log(numbers);


















