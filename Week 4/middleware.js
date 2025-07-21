const express=require("express");
const app=express()
let gc=0;
app.use(function(req,res,next)){
    gc++;
    next()
}
app.use("/get",(req,res)=>{
    //logic
})
app.use("/post",(req,res)=>{
    //logic
})
app.use("/delete",(req,res)=>{
    //logic
})
//this will save ou server and help us keep track of the load on the server
app.listen(3000)