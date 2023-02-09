const express= require('express');
require("./db/conn");
const Student = require("./models/students");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

// create a new user
app.post("/students",(req,res)=>{
    console.log(req.body);
    const user = new Student(req.body);
    console.log("got it")
    user.save().then(()=>{
        res.status(201).send(user);
        // return;
    }).catch((e)=>{
        res.status(400).send(e);
        // return;
    })
    res.send("hey from other side");
})

app.listen(port,()=>{
    console.log(`connection set at ${port}`)
})