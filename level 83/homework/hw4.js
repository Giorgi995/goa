const user = new Map();
user.set(1, "Nika");
user.set(2, "Andria");
user.set(3, "Gio");
user.set(4, "Saba");

console.log("keys", [...user.keys()]);
console.log("values", [...user.values()]);
console.log("entries:");
for (const entry of user.entries()){
    console.log(entry)
}