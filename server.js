const express=require('express');
const app=express()
const cors=require('cors')
const path=require('path')
const conn=require('./models/conn')
const {offlineLinearSearch,textIndexSearch, textRegexSearch}=require('./controller/searchController');

cors()
app.use(express.static(path.join(__dirname,"client","build")))
  
app.get('/search/:str',async (req,res)=>{
    const searchString=req.params.str
   const result=await textRegexSearch(searchString.toLowerCase());
   res.send(result);
});

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"client","build","index.html"))
})
app.listen(process.env.PORT || 8000,()=>{
    console.log("server started on http://localhost:8000")
});