fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then( users => {
        users.forEach(element => {
        console.log(`name: ${element.name} email: ${element.email}`)    
        });
    })
    .catch(error => console.error("error:", error));
    
    /*
    
    რატომ არის fetch ასინქეონული?
    -- fetch მუშაობს ქსელთან http, რაც შეიძლება დიდხანს გაგრძელდეს.
    -- თუ ის სინქრონული იქნებოდა მაშინ მთელი პროგრამა გაიყინებოდა პასუხის მიღებამდე.
    -- ასინქრონულობა საშვალებას გვაძლევს პროგრამა გააგრძელოს სხვა კოდის შესრულება, სანამ სერვერიდან პასუხი მოვა.
    
    
    რატომ აბრუმებს ყოველტვის  Promise?
    -- Promise არის ობიექტი რომელიც წარმოადგენს მომავალში მიყაბულ შედეგს.
    -- fetch თავიდანვე აბრუნებს Promise-ს რადგან პასუხი ჯერ არ არის მიღებული.
    -- Promise გვაძლევს საშვალებას .then() და .catch() ბლოკებით დავამუშავოთ შედეგი.
    */


