const express=require("express")
const app=express()


app.get("/sum",(req,res)=>{
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
    //query parameters ? sepearated by &
    const ans=a+b
    res.json({
        answer:ans
    })
})

app.get("/multiply",(req,res)=>{
    
})


app.get("/divide",(req,res)=>{
    
})


// Middleware function
function logRequest(req, res, next) {
  console.log(`Request made to: ${req.url}`);
  next();
}

// Apply middleware to a specific route
app.get('/special', logRequest, (req, res) => {
  res.send('This route uses route-specific middleware!');
});

app.get("/sum", function(req, res) {
    console.log(req.name);
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});



app.listen(3000)