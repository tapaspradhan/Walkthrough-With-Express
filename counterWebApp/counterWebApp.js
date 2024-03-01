const express=require("express")

const app=express()
const PORT=5000
let counter=0

app.get("/",(req,res)=>{
   res.send({counter})
})
app.get("/increment",(req,res)=>{
    counter=counter+1
   res.send({counter})
})

app.get("/decrement",(req,res)=>{
    counter=counter-1

   res.send({counter})
   
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})