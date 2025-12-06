const myMap = new Map([
    ["name", "giorgi"],
    ["age", 15],
    ["city", "Tbilisi"],
    ["academy", "komarovi"],
    ["level", 82]
]);

myMap.set("language", "JS");
console.log(myMap.has("age"));
console.log(myMap.get("city"));
myMap.delete("level");
console.log([...myMap.keys()]);
console.log([...myMap.values()]);
console.log([...myMap.entries()]);

const requestPromise = new Promise((resolve, reject) => {
    const internetRequest = true;

    setTimeout(() => {
        if (internetRequest) {
            resolve("Internet OK");
        } else {
            reject("Internet ERROR");
        }
    }, 4000);
});


// ყოველ 0.5 წამში სტატუსის შემოწმება
const interval = setInterval(() => {
    console.log("Promise status: pending...");
}, 600);

// საბოლოო შედეგი
requestPromise
    .then(msg => {
        clearInterval(interval);
        console.log("Resolved:", msg);
    })
    .catch(err => {
        clearInterval(interval);
        console.log("Rejected:", err);
    });