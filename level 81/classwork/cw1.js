class Account {
        constructor(firstName, lastName, email, password) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.password = password;
        }
    }

    const accounts = [];

    // ფორმის წამოღება
    const form = document.getElementById("accountForm");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // გვერდის გადატვირთვის თავიდან აცილება

        // Arrow function — იღებს მნიშვნელობებს და ქმნის ობიექტს
        const handleSubmit = () => {
            const firstName = document.getElementById("firstName").value;
            const lastName = document.getElementById("lastName").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // ახალი ობიექტის შექმნა
            const account = new Account(firstName, lastName, email, password);

            // მასივში დამატება
            accounts.push(account);

            console.log("ახალი ობიექტი:", account);
            console.log("Accounts array:", accounts);
        };

        handleSubmit();
    });


const numbers = [2, 3, 5, 6, 6, 3, 1, 15, 8];


const squared = numbers.map(num => num ** 2);
console.log("Squared:", squared);

const plusFive = numbers.map(num => num + 5);
console.log("Plus Five:", plusFive);


const evens = numbers.filter(num => num % 3 === 0);
console.log("Even Numbers:", evens);


const uniqueOnce = numbers.filter(num => 
    numbers.indexOf(num) === numbers.lastIndexOf(num)
);
console.log("Only Once:", uniqueOnce);



// --- Manual Map ---
function manualMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}

// --- Manual Filter ---
function manualFilter(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }
    return result;
}


// --- ტესტირება ---
const numbers = [1, 2, 3, 4, 6];

// test manualMap - რიცხვების კვადრატები
const squares = manualMap(numbers, (num) => num * num);
console.log("manualMap squares:", squares);

// test manualMap - ყველა რიცხვს +10
const plusTen = manualMap(numbers, num => num + 11);
console.log("manualMap +10:", plusTen);

// test manualFilter - ლუწები
const evens = manualFilter(numbers, num => num % 2 === 0);
console.log("manualFilter evens:", evens);

// test manualFilter - 3-ზე მეტი რიცხვები
const greaterThanThree = manualFilter(numbers, num => num > 3);
console.log("manualFilter >3:", greaterThanThree);





