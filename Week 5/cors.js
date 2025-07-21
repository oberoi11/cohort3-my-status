const express=require("express")
const app=express()
app.use(cors({
    domains:["url1","url2","url2"]
}))
//cors comes into picture only when we are sending request fdrom a different domain ove rthe internet or more specificaaly acorees different doimains it will not be blocked across postman as it is localhost strill when i make it a service to 
//deploy it will be blocked 

//if rontend and vbackend are hosted on the ame domain then ther eis no use of the cors middleware

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html")
})

app.use(express.json())
app.post("sum",(req,res)=>{
    const a=parseInt(req.body.a)
    const b=parseInt(req.body.b)
    res,json({
        ans:a+b
    })
})
app.listen(3000)