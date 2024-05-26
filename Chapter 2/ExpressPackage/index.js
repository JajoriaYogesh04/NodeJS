const express = require("express");
const app = express();
// console.dir(app);

let port=8080;
app.listen(port,()=>{
    console.log(`App is listening on the port ${port}`);
})

// app.use((req,res)=>{
//     // console.log(req);

//     // res.send({
//     //     name:"Apple",
//     //     color:"Red"
//     // })

//     let code = "<h1>Fruits</h1><ul><li>Apple</li><li>Mango</li></ul>"
//     res.send(code);
//     console.log("Request received");
// })


// app.get("/",(req,res)=>{
//     res.send("Hello, I am root");
// })
// app.get("/search",(req,res)=>{
//     res.send("You are on SEARCH path");
// })
// app.get("/contact",(req,res)=>{
//     res.send("You are on CONTACT path");
// })
// app.get("*",(req,res)=>{
//     res.send("WRONG REQUEST");
// })
// app.post("/",(req,res)=>{
//     res.send("POST on ROOT path");
// })


// app.get("/:username/:id",(req,res)=>{
//     console.log(req.params);
//     let {username, id}=req.params;
//     let htmlStr = `<h1>Welcome to the page of @${username}</h1>`
//     res.send(htmlStr);
// })


app.get("/search",(req,res)=>{
    // console.log(req.query);
    let {q}=req.query;
    if(!q){
        res.send(`<h1>Nothing Searched</h1>`)
    }
    res.send(`<h1>Search Result: ${q}</h1>`);
})