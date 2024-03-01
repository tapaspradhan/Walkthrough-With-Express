const express=require("express")

const app=express()
const PORT=5000

app.get("/",(req,res)=>{
    res.send("<h1>I am Home Page</h1>")
})
app.get("/about",(req,res)=>{
    res.send("<h1>I am About Page</h1>")
})
app.get("/contact",(req,res)=>{
    res.send("Email:support@pwskills.com")
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})