const express= require("express");
const app= express();
const port= 8080;

app.get("/", (req, res)=>{
    res.send("Getting Request on INDEX Route");
})

app.listen(port, ()=>{
    console.log("Listening to to port 8080");
})