const express=require("express");
const app=express()
let gc=0;
let numberofrequests={}
//something like this for keeping track of how many requests per persoon in a single second
setInterval(()=>{
    numberofrequests={}
},1000)
//request count
app.use(function(req,res,next)){
    //basic rate limiter
    if(numberofrequests[req.headers["id"]]){
        numberofrequests[req.headers["id"]]++;
        if(numberofrequests[req.headers["id"]]>5){
            res.status(411).send("no entry")
        }else{
            next()
        }
    }else{
        numberofrequests[req.headers["id"]]=1
    }
    gc++;
    next()
}
app.use("/get",(req,res)=>{
    numberofrequests[req.headers.id]++;
    //logic
})
app.use("/post",(req,res)=>{
    //logic
})
app.use("/delete",(req,res)=>{
    //logic
})
//this will save ou server and help us keep track of the load on the server


//rate limiter
//only 5 requets per second
app.listen(3000)