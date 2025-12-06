fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        const firstfive = data.slice(0,5);
        firstfive.forEach(post => {
            console.log(post.title);
        });
    })
    .catch(err => console.log("error", err))