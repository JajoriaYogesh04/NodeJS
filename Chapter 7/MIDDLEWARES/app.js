const express= require("express");
const app= express();
const port= 8080;

//Middleware->Response send

app.use((req, res)=>{
    console.log("Hello I am MIDDLEWARE");
    res.send("Hello I am MIDDLEWARE");
})

app.get("/", (req, res)=>{
    res.send("Getting Request on ROOT page");
})

app.get("/random", (req, res)=>{
    res.send("Getting request on RANDOM page");
})

app.listen(port, ()=>{
    console.log("Listening to to port 8080");
})