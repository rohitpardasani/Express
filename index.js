const express=require('express');

const app=express();

app.get('/',(req,res)=>{
res.send("<h1>hello world</h1>")
});

const PORT=5001;
app.listen(PORT,()=>{
    console.log("server started" +PORT);
});