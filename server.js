const express=require('express');
const app=express()
const cors=require('cors')
const path=require('path')
const conn=require('./models/conn')
const {fetchItems}=require('./controller/itemFetchController')
cors()
app.use(express.static(path.join(__dirname,"client","build")))
// const store_init= new store({
//     name:"rm general store",
//     location:"IIT BHU",
//     items:[{id:1,itemname:"colin",price:30},{id:2,itemname:"comfort",price:80},{id:3,itemname:"condioola",price:50}]
// })   

  
app.get('/search/:str',async (req,res)=>{
    const s=req.params.str
   const result=await fetchItems(s)
   res.send(result) 
})

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"client","build","index.html"))
})
app.listen(process.env.PORT || 8000,()=>{
    console.log("server started on http://localhost:8000")
})