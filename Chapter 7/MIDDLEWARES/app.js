const express= require("express");
const app= express();
const port= 8080;

//Middleware->Response send

// app.use((req, res, next)=>{
//     // let  { query } = req.query;
//     // console.log( query );   //Show we can access the request and response
//     console.log("Hello I am MIDDLEWARE 1");
//     // res.send("MIDDLEWARE FINISHED");
//     return next();
//     console.log("Function after MIDDLEWARW 1");     //NOT EXECUTE
// })

// app.use((req, res, next)=>{
//     console.log("Hello I am MIDDLEWARE 2");
//     next();
// })

app.use((req, res, next)=>{
    req.time= new Date(Date.now()).toString();
    console.log(req.method, req.hostname, req.path, req.time);
    return next();
})

app.get("/", (req, res)=>{
    console.log("Getting Request on ROOT page")
    res.send("Getting Request on ROOT page");
})

app.get("/random", (req, res)=>{
    console.log("Getting request on RANDOM page");
    res.send("Getting request on RANDOM page");
})

app.listen(port, ()=>{
    console.log("Listening to to port 8080");
})