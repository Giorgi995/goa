const studentsMap = new Map()
studentsMap.set("Nika", 95);
studentsMap.set("Saba", 88);
studentsMap.set("Sandro", 78);
studentsMap.set("Andria", 66);
studentsMap.set("Giorgi", 55);
console.log(studentsMap)
console.log(studentsMap.get("Nika"));
console.log(studentsMap.has("Luka"));
console.log(studentsMap.has("Sandro"));
console.log(studentsMap.delete("Andria"));
console.log(studentsMap)