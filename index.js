require('dotenv').config();
const express = require("express");
const app = express();
const port = 4000;

app.get('/',(req,res)=>{
    res.send("Hello World!");
});

app.get('/twitter',(req,res)=>{
    res.send("twitterDotCom");
});

app.get('/login',(req,res)=>{
    res.send('<h1>Hi I am Learning Backend Technology</h1>');
});

app.listen(process.env.PORT,()=>{
    console.log(`Example app is listening on port ${port}`);
});