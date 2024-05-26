const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");
const express = require("express");
const {v4: uuidv4}=require('uuid');
const app=express();
const path = require("path");
const methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'mysql',
});

// console.log(getRandomUser());

// let getRandomUser= () => {
//     return {
//       id: faker.string.uuid(),
//       username: faker.internet.userName(),
//       email: faker.internet.email(),
//       password: faker.internet.password(),
//     };
//   }

let getRandomUser= () => {
    return [
      faker.string.uuid(),
      faker.internet.userName(),
      faker.internet.email(),
      faker.internet.password(),
    ];
  }


// let q = "SHOW TABLES"

// let q = "INSERT INTO user(id, username, email, password) VALUES(?, ?, ?, ?)";
// let user = ["123", "123_newuser","abc@gmail.com", "abc"];

// let q = "INSERT INTO user(id, username, email, password)VALUES ?";
// let users = [["123b", "123_newuserb","abc@gmail.comb", "abcb"],["123c", "123_newuserc","abc@gmail.comc", "abcc"]];

// let q = "INSERT INTO user(id, username, email, password) VALUES ?";
// let data = [];
// for(let i=1; i<=100; i++){
//     // console.log(getRandomUser());
//     data.push(getRandomUser());
// }


// try{
//     connection.query(q, user, (err, result)=>{
//         if (err) throw err;
//         console.log(result);
//         // console.log(result.length);
//         // console.log(result[0]);
//     })
// }
// catch(err){
//     console.log(err);
// }

// try{
//     connection.query(q, [users], (err, result)=>{
//         if (err) throw err;
//         console.log(result);
//         // console.log(result.length);
//         // console.log(result[0]);
//     })
// }
// catch(err){
//     console.log(err);
// }
// connection.end();

// try{
//     connection.query(q, [data], (err,result)=>{
//         if(err) throw err;
//         console.log(result);
//     })
// }catch(err){
//     console.log(err);
// }
// connection.end();


app.get("/",(req,res)=>{
    // res.send("Welcome to HOME");
    let q = "SELECT COUNT(*) FROM user";
    try{
        connection.query(q, (err, result)=>{
            if(err) throw err;
            let count = result[0]["COUNT(*)"];
            // res.send(`Number of entries: ${count}`);
            console.log(count);
            res.render("home.ejs", { count });
        })
    }
    catch(err){
        res.send("some ERROR occured");
    }

})

app.get("/user",(req,res)=>{
    let q= "SELECT * FROM user";
    try{
        connection.query(q, (err, result)=>{
            if(err) throw err;
            // console.log(result);
            // res.send(result);
            res.render("showusers.ejs", { result });
        })
    }
    catch(err){
        res.send("ERROR");
    }
})

app.get("/user/:id/edit",(req,res)=>{
    let { id } = req.params;
    // console.log(id);
    let q = `SELECT * FROM user WHERE id="${id}"`;
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            let user = result[0];
            res.render("edit.ejs", { user });
            console.log(user);
        })
    }
    catch(err){
        res.send("ERROR");
    }
    // res.send(`YOU CAN EDIT ${id}`);
   
})

app.patch("/user/:id",(req,res)=>{
    let {id} = req.params;
    // console.log(id);
    let {username: newuser, password: newpass}=req.body;
    console.log(newuser);
    let q = `SELECT * FROM user WHERE id='${id}'`;
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            console.log(result);
            let user=result[0];
            // res.send(result);
            if(newpass != user.password){
                res.send("WRONG PASSWORD");
            }
            else{
                let q2=`UPDATE user SET user.username="${newuser}" WHERE id="${id}"`;
                connection.query(q2, (err,result)=>{
                    try{
                        if(err) throw err;
                        // console.log(result);
                        // res.send(result);
                        res.redirect("/user")
                    }
                    catch(err){
                        res.send("ERROR2");
                    }
                })
            }
        })
    }
    catch(err){
        res.send("ERROR");
    }
    
    // res.send("UPDATED");
})

app.listen("8080",()=>{
    console.log("App is listening");
})
  