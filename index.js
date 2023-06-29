const express=require("express")
const app=express()
// app.use(express.json())
app.use(logger)
app.get("/",(req,res,next)=>{
    console.log("Welcome HomePage")
    res.send("welcome")
})
app.get("/contacts",(req,res)=>{
    console.log("welcome to contacts page")
    res.end("Contacts page")
})
app.get("/about",(req,res)=>{
    console.log("welcome to about page")
    res.end("About page")
})
app.listen(3500,()=>{
    console.log("server is running")
})
function logger(req,res,next){
   console.log("Global middle ware for all routes")
   next()
}