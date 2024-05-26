const express=require("express");
const app=express();
let port=8080;

const path=require("path");
app.set("views",path.join(__dirname,"/views"));

// app.use(express.static("public"));
app.use(express.static(path.join(__dirname,"public/CSS")));
app.use(express.static(path.join(__dirname,"public/JS")));

app.set("view engine","ejs");
app.get('/',(req,res)=>{
    res.send("Home Page");
})
app.get("/ig/:username",(req,res)=>{
    const instaData=require("./data.json");
    // console.log(instaData);
    let { username }=req.params;
    const data = instaData[username];
    // console.log(data);
    if(data){
        res.render("instagram",{ data });
    }
    else{
        res.render("error.ejs")
    }
})
app.listen(port,()=>{
    console.log(`Listening port ${port}`);
})