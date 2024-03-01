const express=require("express")

const app=express()
const PORT=5000

app.get("/",(req,res)=>{
    let randomNumber=Math.floor(155 * Math.random())
    res.send({
        randomNumber
    })
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})