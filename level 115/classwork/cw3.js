const fs = require("fs");
const path = require("path");

// ფოლდერის და ფაილების სახელები
const folder = path.join(__dirname, "Data");
const infoFile = path.join(folder, "info.txt");
const replyFile = path.join(folder, "reply.txt");

// Data ფოლდერის შექმნა (თუ არ არსებობს)
if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder);
    console.log("Data ფოლდერი შექმნილია.");
}

// info.txt-ში ინფორმაციის ჩაწერა
try {
    fs.writeFileSync(infoFile, "ეს არის info.txt-ში ჩაწერილი ინფორმაცია Node.js-ის დახმარებით.");
    console.log("info.txt წარმატებით შეიქმნა და ჩაწერა შესრულდა.");
} catch (err) {
    console.error("info.txt-ის ჩაწერა ვერ მოხერხდა:", err);
}

// reply.txt-ში ინფორმაციის ჩაწერა
try {
  fs.writeFileSync(replyFile, "ეს არის reply.txt ფაილის შინაარსი Node.js-ით.");
    console.log("reply.txt წარმატებით შეიქმნა და ჩაწერა შესრულდა.");
} catch (err) {
    console.error("reply.txt-ის ჩაწერა ვერ მოხერხდა:", err);
}