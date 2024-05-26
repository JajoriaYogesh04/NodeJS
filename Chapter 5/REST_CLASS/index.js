const express = require("express");
const app = express();
const port=8080;

app.set("view engine","ejs");

app.use(express.urlencoded({extended:true}));

const path = require("path");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

const { v4: uuidv4 } = require('uuid');
// uuidv4();

const methodOverride = require('method-override');
app.use(methodOverride('_method'))

let posts = [
    {
        id:  uuidv4(),
        username: "yogesh04",
        content: "I am learning rest",
    },
    {
        id:  uuidv4(),
        username: "aryan28",
        content: "My coding buddy is yogesh",
    },
    {
        id:  uuidv4(),
        username: "azad15",
        content: "I am CEO of a successful company.",
    },
]

app.get("/posts",(req,res)=>{
    res.render("index.ejs", { posts });
})

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})

app.post("/posts",(req,res)=>{
    console.log(req.body);
    // res.send("Accepting Request from Form");
    let { username, content }=req.body;
    let id=uuidv4();
    posts.push({ id, username, content })
    res.redirect("/posts");
})

app.get("/posts/:id",(req,res)=>{
    let { id } = req.params;
    let post = posts.find((p)=> id===p.id);
    // res.send("On the id");
    res.render("show.ejs", { post })

    
})

app.patch("/posts/:id",(req,res)=>{
    let { id } = req.params;
    let newContent = req.body.content;
    console.log(id);
    // console.log(newContent);
    let post=posts.find((p)=>id===p.id);
    post.content=newContent;
    console.log(post)
    // res.send("PATCH working properly");
    res.redirect("/posts");
})

app.get("/posts/:id/edit",(req,res)=>{
    let { id }=req.params;
    let post = posts.find((p)=>id===p.id);
    res.render("edit.ejs",{ post })
    // res.send("OK");
})

app.delete("/posts/:id",(req,res)=>{
    
    let { id }=req.params;
    posts = posts.filter((p)=>id !== p.id);
    // res.send("Deleted");
    res.redirect("/posts");
})

app.listen(port,()=>{
    console.log("Listening to port 8080");
})