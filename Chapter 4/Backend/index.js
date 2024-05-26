const express = require("express");
const app=express();
port=8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/register",(req,res)=>{
    // res.send("standard GET request");
    let {user,pass}=req.query;
    res.send(`standard GET request, Welcome! ${user}`)
})

app.post("/register",(req,res)=>{
    console.log(req.body);
    let {user,pass}=req.body;
    res.send(`standard POST request, Welcome! ${user}`)
})

app.listen(port,()=>{
    console.log(`Listening port ${port}`);
})