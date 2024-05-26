const express = require("express");
const app = express();
const path = require("path");

const port=8080;

app.set("view engine","ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/",(req,res)=>{
    res.render("home");
})
app.get("/hello",(req,res)=>{
    res.send("HELLO");
})

app.get("/random",(req,res)=>{
    let data=(Math.floor(Math.random()*6))+1;
    // res.render("rollDice",{ num: data});
    res.render("rollDice",{ data});
})


// activity
app.get("/ig/:username",(req,res)=>{
    let follower=["Aryan","Azad","Parth","Abcd"]
    let { username }=req.params;
    res.render("instagram",{ username });
})

app.listen(port,()=>{
    console.log(`Listening the ${port}`);
});