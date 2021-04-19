const fetch = require ('node-fetch');

let url = "https://jsonplaceholder.typicode.com/posts";

let settings = { method: "Get" };

fetch (url, settings)
    .then(res => res.json())
    .then((json) => {
        // work on JSON 
    });


const fs = require ('fs')

// write to file

fs.writeFile('posts.json',JSON.stringify(["I am a zuri intern"]), (err) => {
    if(err) throw err
})
